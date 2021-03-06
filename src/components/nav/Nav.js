import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../style/logo.jpg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__ul">
        <li className="nav__li">
          <NavLink
            exact={true}
            className="nav__link"
            activeClassName="active"
            to="/"
          >
            Column Header
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink
            exact={true}
            className="nav__link"
            activeClassName="active"
            to="/rowsorting"
          >
            Row Sorting
          </NavLink>
        </li>
        {/* <li className="nav__li">
          <NavLink
            exact={true}
            className="nav__link"
            to="/rowdragging"
            activeClassName="active"
          >
            Row Dragging
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default memo(Nav);
