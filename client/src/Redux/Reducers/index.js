import {
  add_to_cart,
  get_all_products,
  set_all_products,
  remove_from_cart,
  add_to_favourite,
  remove_from_favourites,
} from "../Actions/Type";

import { printData } from "../../Api/Products";

function ProductReducers(state, action) {
  switch (action.type) {
    case set_all_products:
      const dataState = {
        ...state,
        products: [...action.products],
      };

      return dataState;

    case get_all_products:
      return state;

    case add_to_cart:
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].Id === action.cart.Id) {
          state.cart[i].quantity += action.cart.quantity;
          window.localStorage.setItem("cart", JSON.stringify(state.cart));

          return state;
        }
      }

      const newState = {
        ...state,

        cart: [
          ...state.cart,
          {
            ...action.cart,
          },
        ],
      };

      window.localStorage.setItem("cart", JSON.stringify(newState.cart));

      return newState;

    case remove_from_cart:
      const newCartAfterRemove = {
        ...state,
        cart: state.cart.filter((v) => v !== action.cart),
      };

      window.localStorage.setItem(
        "cart",
        JSON.stringify(newCartAfterRemove.cart)
      );

      return newCartAfterRemove;

    case add_to_favourite:
      for (var i = 0; i < state.favourites.length; i++) {
        if (state.favourites[i].Id === action.favourites.Id) {
          window.localStorage.setItem(
            "favourites",
            JSON.stringify(state.favourites)
          );

          return state;
        }
      }

      console.log("else");
      const newfavouritesState = {
        ...state,
        favourites: [
          ...state.favourites,
          {
            ...action.favourites,
          },
        ],
      };

      window.localStorage.setItem(
        "favourites",
        JSON.stringify(newfavouritesState.favourites)
      );

      return newfavouritesState;

    case remove_from_favourites:
      const newFavStateAfterRemove = {
        ...state,
        favourites: state.favourites.filter((v) => v !== action.favourites),
      };

      window.localStorage.setItem(
        "favourites",
        JSON.stringify(newFavStateAfterRemove.favourites)
      );

      return newFavStateAfterRemove;

    default:
      return state;
  }
}

export default ProductReducers;
