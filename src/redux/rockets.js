import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH__ROCKET = 'Space-Travelers-React-Project/src/redux/rockets/FETCH__ROCKET';
const fetchUrl = 'https://api.spacexdata.com/v3/rockets';

const RESERVE__ROCKET = 'Space-Travelers-React-Project/src/redux/rockets/RESERVE__ROCKET';
const CANCLE__RESERVE = 'Space-Travelers-React-Project/src/redux/rockets/CANCLE__RESERVE';
// Reducers

const rocketArr = [];

export const rocketReducer = (state = rocketArr, action) => {
  switch (action.type) {
    case FETCH__ROCKET:
      return action.allRckts;
    case RESERVE__ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCLE__RESERVE:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

// Action to fetch Rocket data

export const fetchRockets = createAsyncThunk(FETCH__ROCKET, async (post, { dispatch }) => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  const dataArr = [];
  data.forEach((each) => {
    dataArr.push(
      {
        id: each.id,
        rocket_name: each.rocket_name,
        description: each.description,
        flickr_images: each.flickr_images,
        reserved: false,
      },
    );
  });
  dispatch({
    type: FETCH__ROCKET,
    allRckts: dataArr,
  });
});

export const reserve = (id) => (
  {
    type: RESERVE__ROCKET,
    id,
  }
);

export const cancleRes = (id) => (
  {
    type: CANCLE__RESERVE,
    id,
  }
);
