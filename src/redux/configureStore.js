import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rocketReducer } from './rockets';

const rootReducer = combineReducers({
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducer,
},
applyMiddleware(thunk));

export default store;
