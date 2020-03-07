import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <NavLink className="nav__link" activeClassName="active" to="/">
            Row Sorting
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink className="nav__link" to="/xad" activeClassName="active">
            Treba da uradim
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink className="nav__link" to="/sara" activeClassName="active">
            Treba da uradim
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
