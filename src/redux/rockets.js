import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH__ROCKET = 'Space-Travelers-React-Project/src/redux/rockets/FETCH__ROCKET';
const fetchUrl = 'https://api.spacexdata.com/v3/rockets';
// Reducers

const rocketArr = [];

export const rocketReducer = (state = rocketArr, action) => {
  switch (action.type) {
    case FETCH__ROCKET:
      return action.allRckts;
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
      },
    );
  });
  console.log(dataArr);
  dispatch({
    type: FETCH__ROCKET,
    allRckts: data,
  });
});
