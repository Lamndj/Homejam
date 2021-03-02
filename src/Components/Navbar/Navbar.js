import React from "react";
import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";
import Search from "../../assets/search.png";
import Hamburger from "../../assets/Hamburger.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" className="navbar__logo" />
      <ul className="navbar__list">
        <li className="navbar__list__desktop__icon">
          <img className="navbar__searchIcon" src={Search} alt="search" />
          <p>Search</p>
        </li>
        <li className="navbar__list__desktop__icon">
          <p>Help</p>
        </li>
        <li className="navbar__list__desktop__icon">
          <p>Account</p>
        </li>
        <li className="navbar__phone__icon">
          <img src={Search} alt="Hamburger" />
        </li>
        <li>
          <img src={Cart} alt="Cart" />
        </li>
        <li className="navbar__phone__icon">
          <img src={Hamburger} alt="Hamburger" />
        </li>
      </ul>
    </div>
  );
}
