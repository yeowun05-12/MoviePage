import { createContext, useEffect, useState } from 'react';
import { API_URL } from '../api/config';
import axios from 'axios';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]); // API에서 받아온 데이터를 저장
  const [loading, setLoading] = useState(true); // 데이터를 불러오는 중인지 체크
  const [error, setError] = useState(null); // 에러 발생 시 에러 메시지 저장
  const [searchTerm, setSearchTerm] = useState([]);

  // 인기 영화 목록 불러오기
  useEffect(() => {
    //처음 렌더링 할 때 안에 있는 함수를 무조건 실행하는 것, 의존성 배열안에 있는 요소가 값이 바뀌면 리렌더링 될 수 있게 한다. // 의존성 배열을 비워두면 무조건 처음에 한 번만 렌더링 된다.
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${API_URL}/discover/movie`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`, // 인증 정보 중 1개, Bearer의 방식으로 토큰을 전달함. 여러 방식이 있음
          },
          params: {
            // 추가적인 정보를 전달하는데 사용된다
            language: 'ko-KR',
          },
        });
        //데이터 확인
        
        if (response.status !== 200) {
          throw new Error('데이터를 불러오는 데 실패했어요!'); // 만약 response가 로딩 안 됐으면 에러 던져줘
        }

        setMovie(response.data.results);
      } catch (err) {
        setError(err.message); // 에러 나면 잡아서 메시지 띄워줘~
      } finally {
        setLoading(false); // 다 아니면 로딩중이야~
      }
    };

    fetchMovies();
  }, []);

  // 검색 영화 목록 불러오기 < 전역 상태를 위해 남겨둠 >
  // const fetchSearchMovies = async (searchTerm) => {
  //   if (!searchTerm) {
  //     setSearchTerm([]);
  //     return;
  //   }

  //   try {
  //     setLoading(true);
  //     const response = await axios.get(`${API_URL}/search/movie`, {
  //       headers: {
  //         Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  //       },
  //       params: {
  //         query: encodeURIComponent(searchTerm),// encodeURIComponent는 특수문자 검색에서 에러를 방지할 수 있음
  //         language: 'ko-KR',
  //       },
  //     });

  //     if (response.status === 200) {
  //       setSearchTerm(response.data.results);
  //     } else {
  //       throw new Error('검색 결과를 불러오는 데 실패했습니다.');
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <MovieContext.Provider value={{ movie, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
