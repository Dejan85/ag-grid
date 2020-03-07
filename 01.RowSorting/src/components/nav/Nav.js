import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/rowsorting">
            Row Sorting
          </Link>
        </li>
        <li className="nav__li">
          <Link className="nav__link" to="/rowsorting">
            Row Sorting
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
