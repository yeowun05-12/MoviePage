import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MovieDetail from './component/MovieDetail';
import Layout from './component/Layout';
import Main from './component/Main';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={`/`} element={<Main />}></Route>
        <Route path={`/detail/:id`} element={<MovieDetail />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
