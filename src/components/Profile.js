import React from 'react';
import { useSelector } from 'react-redux';
import './css/ProfilePage.css';

function Profile() {
  const rocketArr = useSelector((state) => state.rockets);
  const reserveRckt = rocketArr.filter((each) => each.reserved === true);

  return (
    <div className="all-profile">
      <div className="each-profile">
        <h2>My Missions</h2>

      </div>
      <div className="each-profile">
        <h2>My Rockets</h2>

        {reserveRckt.map((res) => (

          <p className="each-data" key={res.id}>{res.rocket_name}</p>

        ))}

      </div>
    </div>
  );
}

export default Profile;
