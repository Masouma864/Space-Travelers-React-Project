import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rocketReducer } from './rockets/rockets';
import missionsReducer from './missions/MissionsSlice';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions: missionsReducer,
});

const store = configureStore(
  {
    reducer,
  },
  applyMiddleware(thunk, logger),
);

export default store;
