import React from 'react';
import './css/RocketItem.css';

function Rocket(props) {
  const allRocket = { props };
  const eachRocket = allRocket.props.rocket;
  return (
    <li className="list">
      <div className="img-div">
        <img src={eachRocket.flickr_images[0]} alt="Rocket" className="each-img" />
      </div>
      <div>
        <h2>{eachRocket.rocket_name}</h2>
        <p>{eachRocket.description}</p>
        <button type="button">Reserve</button>
      </div>
    </li>

  );
}

export default Rocket;
