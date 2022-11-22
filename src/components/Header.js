import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
    <div className='header-container'>
        <div className="left-header">
            <img src={planet} alt="planetImage" width="60px" />
            <h3>Space Travelers Hub</h3>
        </div
        <ul className="flex">
      <li>
        <NavLink
          to="/"
          style={(isActive) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missionspage"
          style={(isActive) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myprofilepage"
          style={(isActive) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </div>

);