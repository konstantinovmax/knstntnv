import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavBar() {
  return (
    <nav className="header__menu">
        <NavLink exact to="/" className="header__menu-link" activeClassName="header__menu-link_active">Главная</NavLink>
        <NavLink to="/about-me" className="header__menu-link" activeClassName="header__menu-link_active">Обо мне</NavLink>
        <NavLink to="/portfolio" className="header__menu-link" activeClassName="header__menu-link_active">Портфолио</NavLink>
    </nav>
  );
}

export default HeaderNavBar;