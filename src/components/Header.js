import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import '../index.css';

function Header() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const navLinkStyle = ({ isActive }) => (isActive ? activeStyle : undefined);
  return (
    <div className="navs">
      <div className="left-header">
        <img src={planet} alt="planetImage" width="60px" />
        <h3>Space Travelers Hub</h3>
      </div>
      <ul>
        <li>
          <NavLink to="/" style={navLinkStyle} className="rockets">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missionspage"
            className="missions"
            style={navLinkStyle}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myprofilepage"
            className="profile"
            style={navLinkStyle}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Header;
