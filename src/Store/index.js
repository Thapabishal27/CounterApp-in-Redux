import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../Components/Counter/ReducerCounter";
const store = configureStore({
  reducer: counterReducer,
});

export default store;
