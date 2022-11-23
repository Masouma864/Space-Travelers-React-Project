import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissionsApi } from '../redux/missions/MissionsSlice';
import Missionscard from './Missionscard';
import '../index.css';

const Missionlist = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchMissionsApi());
  }, []);
  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td className="table-header"><strong>Mission</strong></td>
            <td className="table-header"><strong>Description</strong></td>
            <td className="table-header"><strong>Status</strong></td>
            <td className="table-header">&nbsp;</td>
          </tr>
        </tbody>
        {mission.map((item) => (
          <Missionscard
            key={item.missionid}
            missionname={item.missionName}
            description={item.missionDesc}
            id={item.missionid}
            missionjoin={item.missionjoin}
          />
        ))}
      </table>
    </section>
  );
};

export default Missionlist;
