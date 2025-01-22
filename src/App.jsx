import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from './api/config';
import './App.scss';
import MovieDetail from './component/MovieDetail';
import Layout from './component/Layout';
import Main from './component/Main';
import SearchMovie from './component/SearchMovie';
import Login from './component/login';
import SignUp from './component/signUP';
import axios from 'axios';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchSearchMovies = async (searchQuery) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/search/movie`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
        },
        params: {
          query: searchQuery,
          language: 'ko-KR',
        },
      });
      setSearchResult(response.data.results);
    } catch (error) {
      console.error('검색 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };
  // 디바운싱 처리된 검색어로 API 호출
  useEffect(() => {
    if (!query.trim()) {
      setSearchResult([]); // 검색어가 없으면 결과 초기화
      return;
    }

    const debounceTimeout = setTimeout(() => {
      fetchSearchMovies(query);
    }, 600); // 600ms 디바운싱

    return () => clearTimeout(debounceTimeout); // 이전 타이머 정리
  }, [query]); // query가 변경될 때 실행

  return (
    <Routes>
      <Route element={<Layout onSearch={setQuery} />}>
        <Route path={`/`} element={<Main />}></Route>
        <Route
          path={`/detail/:id`}
          element={<MovieDetail movies={searchResult} />}
        ></Route>
        <Route
          path={`/search`}
          element={<SearchMovie movies={searchResult} isLoading={isLoading} />}
        ></Route>
        <Route path={`/login`} element={<Login />}></Route>
        <Route path={`/sign-up`} element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
