import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Sample header</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
