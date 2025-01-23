import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './scss/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
      <div className='nav_container'>
        <FontAwesomeIcon onClick={handleMain} icon={faHome} className='home' />
        <input
          type='text'
          placeholder='지금 가장 핫한 영화는?🤔'
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <div className='btns'>
          <button className='btn login_btn' onClick={handleLogin}>
            로그인
          </button>
          <button className='btn signup_btn' onClick={handleSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
