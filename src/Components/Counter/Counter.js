import React from "react";
import "./Counter.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./ReducerCounter";

function CounterApp() {
  const Count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>CounterApp In Redux</h1>
      <h2>{Count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterApp;
