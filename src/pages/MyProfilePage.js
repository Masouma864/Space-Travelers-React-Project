import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllmissions } from '../redux/missions/MissionsSlice';

function Profile() {
  const rocketArr = useSelector((state) => state.rockets);
  const reserveRckt = rocketArr.filter((each) => each.reserved === true);
  // missions reservation
  const reservation = useSelector(selectAllmissions);
  const missiondata = reservation.filter((item) => item.missionjoin);

  return (
    <div className="profile">
      <table className="missions">
        <tr>My Missions</tr>
        {/* code here */}
        {missiondata.length > 0 ? (
          <ul className="mt-3 border divide-y-[1px]">
            {missiondata.map((mission) => (
              <li key={mission.missionid} className="py-3 pl-2">
                {mission.missionName}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </table>

      <table className="rockets">
        <tr>My Rockets</tr>
        {reserveRckt.map((res) => (
          <tr key={res.id}>{res.rocket_name}</tr>
        ))}
      </table>
    </div>
  );
}

export default Profile;
