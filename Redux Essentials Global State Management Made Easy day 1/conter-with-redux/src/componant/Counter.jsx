import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../redux/action";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count); // Get count from Redux store

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
