import React from 'react';

function Rocket(props) {
  const allRocket = { props };
  const eachRocket = allRocket.props.rocket;
  return (
    <div>
      <p>{eachRocket.name}</p>
    </div>

  );
}

export default Rocket;
