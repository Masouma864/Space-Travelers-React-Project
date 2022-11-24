import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rocketArr = useSelector((state) => state.rockets);
  const reserveRckt = rocketArr.filter((each) => each.reserved === true);

  return (
    <div className="profile">
      <table className="missions">
        <tr>My Missions</tr>
        {/* code here */}
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
