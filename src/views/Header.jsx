import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Marcin Muszyński</h1>
      </div>
      <nav className="navbar">
        <Link to="/">Strona główna</Link>
        <Link to="/about">O nas</Link>
        <Link to="/project">Projekty</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    </header>
  );
}

export default Header;