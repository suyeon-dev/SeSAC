import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const style = { margin: '4px' };

  return (
    <header>
      <h2>ReactRouter 실습</h2>
      <nav>
        <li style={style}>
          <Link to='/student/santa'>산타🎅</Link>
        </li>
        <li style={style}>
          <Link to='/student/bebe'>베베🐧</Link>
        </li>
        <li style={style}>
          <Link to='/student/new?name=suyeon'>searchParams</Link>
        </li>
      </nav>
    </header>
  );
}
