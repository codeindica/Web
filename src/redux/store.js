import { createStore } from "redux";
import RootReducer from "./reducers";

const store = createStore(RootReducer); // First Step

console.log('initial state', store.getState()); // Second Step
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState())) // Third State
store.dispatch();
unsubscribe();

export default store;