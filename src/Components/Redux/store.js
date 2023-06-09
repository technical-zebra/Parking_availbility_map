import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import filter from './filterReducer'
import search from './searchReducer'

const allReducers = combineReducers({
  filter,
  search,
});

const store = configureStore({
  reducer: allReducers,
})

export default store;