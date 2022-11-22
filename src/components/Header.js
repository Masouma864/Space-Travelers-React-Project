import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <div className="flex justify-between items-center ">
    <div className="flex items-center">
      <img src={planet} alt="planetImage" width="60px" />
      <h3>Space Travelers Hub</h3>
    </div>
    <ul className="flex">
      <li>
        <NavLink to="/" className="rockets" >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missionspage"
         className="missions"
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myprofilepage"
         className="profile"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Header;