import { createStore } from "redux";
import ProductReducers from "../Reducers";

const savedState = JSON.parse(window.localStorage.getItem("cart"));
const savedStatee = JSON.parse(window.localStorage.getItem("favourites"));
//const finalState = [savedState[0]];
//console.log(finalState);

const initState = {
  products: [],
  cart: savedState || [],
  favourites: savedStatee || [],
};

const store = createStore(
  ProductReducers,
  initState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
