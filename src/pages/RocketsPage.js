import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../components/RocketItem';
import fetchRockets from '../redux/rockets/rockets';
import style from '../components/css/RocketItem.module.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rocketArr = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketArr.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketArr.length]);

  return (
    <div>
      <ul className={style.allList}>
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
