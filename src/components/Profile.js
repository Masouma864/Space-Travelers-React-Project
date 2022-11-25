import React from 'react';
import { useSelector } from 'react-redux';
import './css/ProfilePage.css';
import { selectAllmissions } from '../redux/missions/MissionsSlice';

function Profile() {
  const rocketArr = useSelector((state) => state.rockets);
  const reserveRckt = rocketArr.filter((each) => each.reserved === true);

  // missions reservation
  const reservation = useSelector(selectAllmissions);
  const missiondata = reservation.filter((item) => item.missionjoin);

  return (
    <div className="all-profile">
      <div className="each-profile">
        <h2>My Missions</h2>
        {missiondata.map((mission) => (
          <p key={mission.missionid} className="each-data">
            {mission.missionName}
          </p>
        ))}

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
