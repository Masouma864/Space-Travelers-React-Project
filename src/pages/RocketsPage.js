import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../components/RocketItem';
import { fetchRockets } from '../redux/rockets';

const RocketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rocketArr = [
    {
      name: 'rock1',
      id: 1,
    },
    {
      name: 'rock2',
      id: 2,
    },
  ];

  return (
    <div>
      <ul>
        {
                rocketArr.map((eachRocket) => (
                  <Rocket key={eachRocket.id} rocket={eachRocket} />
                ))
            }
      </ul>
    </div>
  );
};

export default RocketsPage;
