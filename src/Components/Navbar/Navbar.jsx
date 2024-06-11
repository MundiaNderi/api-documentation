import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex  border border-red-500'>
      <ul className=' list-none flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/unsplash">Unsplash</Link></li>
        <li><Link to="/rickandmorty">Rick & Morty</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
