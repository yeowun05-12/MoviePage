import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import { useEffect } from 'react';

const Layout = ({ onSearch }) => {
  /**
   *  useLocation
   *  React Router에서 제공하는 내장 훅
   *  현재 앱의 URL 정보를 반환해준다
   *  반환되는 값은 location의 객체이고, 이 안에는 아래와 같은 속성들이 있다
   *  pathname: 현재 경로 (예: /detail/123)
   *  search: 쿼리 문자열 (예: ?key=value)
   *  hash: URL의 해시 값 (예: #section1)
   *  state: 네가 Link나 navigate로 보낸 상태 데이터.
   *  useEffect에서 location을 의존성으로 추가하면, 경로가 바뀔 때마다 실행되게 만들 수 있다.
   */
  const location = useLocation();

  useEffect(() => {
    // 라우트가 변경될 때마다 스크롤 최상단으로 이동
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className='layout'>
      <header>
        <NavBar onSearch={onSearch} />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
