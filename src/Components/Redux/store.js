import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterReducer'

const store = configureStore({
  reducer: filterReducer
})

export default store;