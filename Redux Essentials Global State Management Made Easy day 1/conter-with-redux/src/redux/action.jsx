import { DECREMENT, INCREMENT, } from "../redux/action.Types";

export const Increment = () => {
  return {
    type: INCREMENT, // Action type
  };
};

export const Decrement = () => {
  return {
    type: DECREMENT, // Action type
  };
};
