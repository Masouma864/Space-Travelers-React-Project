import React from 'react';
import { useDispatch } from 'react-redux';
import './css/RocketItem.css';
import { reserve, cancleRes } from '../redux/rockets';

function Rocket(props) {
  const dispatch = useDispatch();
  const allRocket = { props };
  const eachRocket = allRocket.props.rocket;
  return (
    <li className="list">
      <figure className="img-div">
        <img src={eachRocket.flickr_images[0]} alt="Rocket" className="each-img" />
      </figure>
      <article>
        <h2>{eachRocket.rocket_name}</h2>
        <p>
          <span>
            {eachRocket.reserved === false ? '' : 'Reserved'}
          </span>
          {eachRocket.description}
        </p>
        <button
          type="button"
          style={{ backgroundColor: `${eachRocket.reserved === true ? 'grey' : '#007bff9c'}` }}
          onClick={() => {
            if (!eachRocket.reserved) {
              dispatch(reserve(eachRocket.id));
            } else {
              dispatch(cancleRes(eachRocket.id));
            }
          }}
        >
          {eachRocket.reserved === true ? 'Cancel Reservations' : 'Reserve Rocket'}
        </button>
      </article>
    </li>

  );
}

export default Rocket;
