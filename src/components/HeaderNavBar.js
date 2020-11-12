import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavBar() {
  return (
    <nav className="header__menu">
        <NavLink exact to="/" className="header__menu-link" activeClassName="header__menu-link_active">ГЛАВНАЯ</NavLink>
        <NavLink to="/about-me" className="header__menu-link" activeClassName="header__menu-link_active">ОБО МНЕ</NavLink>
        <NavLink to="/portfolio" className="header__menu-link" activeClassName="header__menu-link_active">ПОРТФОЛИО</NavLink>
    </nav>
  );
}

export default HeaderNavBar;