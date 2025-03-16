import { legacy_createStore } from "redux";
import counterReducer from "../redux/Counter.reducer";

const store = legacy_createStore(counterReducer);

export default store;
