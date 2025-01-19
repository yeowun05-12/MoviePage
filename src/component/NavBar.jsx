import React from 'react';

import { Router } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <h1>나도볼래</h1>
      <img src='' alt='' className='logo' />
      <input type='text' />
      <div className='btns'>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default NavBar;
