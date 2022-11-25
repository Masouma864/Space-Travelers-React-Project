/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import style from './css/RocketItem.module.css';
import { reserve, cancleRes } from '../redux/rockets/rockets';

function Rocket(props) {
  const dispatch = useDispatch();
  const allRocket = { props };
  const eachRocket = allRocket.props.rocket;

  return (
    <li className={style.list}>
      <figure className={style.imgDiv}>
        <img src={eachRocket.flickr_images[0]} alt="Rocket" className={style.eachImg} />
      </figure>
      <article className={style.details}>
        <h2>{eachRocket.rocket_name}</h2>
        <p>
          {eachRocket.reserved ? <span className={style.badge}>reserved</span> : null}
          {eachRocket.description}
        </p>
        <button
          type="button"
          className={eachRocket.reserved ? `${style.cancelBtn}` : `${style.reserveBtn}`}
          onClick={() => {
            if (!eachRocket.reserved) {
              dispatch(reserve(eachRocket.id));
            } else {
              dispatch(cancleRes(eachRocket.id));
            }
          }}
        >
          {eachRocket.reserved ? 'Cancel Reservations' : 'Reserve Rocket'}
        </button>
      </article>
    </li>

  );
}

export default Rocket;
