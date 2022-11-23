/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { unjoinMission, joinMission } from '../redux/missions/MissionsSlice';

const Missioncard = ({
  missionname, description, id, missionjoin,
}) => {
  const dispatch = useDispatch();
  const missionSwitchHandler = (event) => {
    dispatch(joinMission(event.target.id));
  };

  const unjoinswitchhandler = (event) => {
    dispatch(unjoinMission(event.target.id));
  };
  return (

    <tr>
      <td>{missionname}</td>

      <td>{description}</td>
      <td className="col3">
        {missionjoin === false ? (<span className="badge">Not A Member</span>) : (<span className="badge">Active Member</span>)}
      </td>
      <td className="col4">
        {missionjoin === false ? (<button className="join-btn" type="submit" id={id} onClick={missionSwitchHandler}>Join Mision</button>) : (<button className="join-btn" type="submit" id={id} onClick={unjoinswitchhandler}>Leave Mission</button>)}
      </td>
    </tr>

  );
};

export default Missioncard;