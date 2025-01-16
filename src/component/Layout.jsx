import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='layout'>
      <header>
        <NavBar />
      </header>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
