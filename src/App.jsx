import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import MovieDetail from './component/MovieDetail';
import Layout from './component/Layout';
import Main from './component/Main';

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path={`/detail`} element={<MovieDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
