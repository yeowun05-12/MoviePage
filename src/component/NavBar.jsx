import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './scss/navbar.scss';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // 검색어 변경 시 상위로 전달
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm.trim()) {
      onSearch(searchTerm); // 엔터 입력 시 검색 실행
      navigate('/search');
    }
  };

  const handleMain = (e) => {
    navigate('/');
  };

  const handleLogin = (e) => {
    navigate('/login');
  };

  const handleSignUp = (e) => {
    navigate('/sign-up');
  };

  return (
    <div className='nav'>
      <h1 onClick={handleMain}>나도볼래</h1>
      <img src='' alt='' className='logo' />
      <input
        type='text'
        placeholder='지금 가장 핫한 영화는?🤔'
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <div className='btns'>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default NavBar;
