import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="header-content">
      <Link to="/">
        <img className="logo" src="/images/react-logo.png"/>
      </Link>
    </div>
  </div>
)

export default Header;
