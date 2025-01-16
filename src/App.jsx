import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import MovieCard from './component/MovieCard';
import MovieDetail from './component/MovieDetail';
import Layout from './component/Layout';
import data from '../src/assets/data/movieDetailData.json';

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route index element={<MovieCard />}></Route>
        <Route path={`/detail`} element={<MovieDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
