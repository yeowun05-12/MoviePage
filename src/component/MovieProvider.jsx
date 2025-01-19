import React, { createContext, useContext, useEffect, useState } from 'react';
import { ACCESS_TOKEN, API_URL } from '../api/config';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]); // API에서 받아온 데이터를 저장
  const [loading, setLoading] = useState(true); // 데이터를 불러오는 중인지 체크
  const [error, setError] = useState(null); // 에러 발생 시 에러 메시지 저장

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL}/movie/popular`, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        });

        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했어요!'); // 만약 response가 로딩 안 됐으면 에러 던져줘
        }

        const data = await response.json();
        setMovie(data.results);
      } catch (err) {
        setError(err.message); // 에러 나면 잡아서 메시지 띄워줘~
      } finally {
        setLoading(false); // 다 아니면 로딩중이야~
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movie, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

export function useMovie() {
  return useContext(MovieContext);
}
