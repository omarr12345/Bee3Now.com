import {
  get_mobileaccessories_products,
  set_all_products,
  add_to_cart,
  remove_from_cart,
  add_to_favourite,
  remove_from_favourites,
} from "./Type";

export const setAllProducts = (data) => {
  return {
    type: set_all_products,
    products: data,
  };
};
export const getMobileAccessoriesProducts = (data) => {
  return {
    type: get_mobileaccessories_products,
    products: data,
  };
};
export const addToCart = (productInfo) => {
  return {
    type: add_to_cart,
    cart: productInfo,
  };
};

export const removeFromCart = (product) => {
  return {
    type: remove_from_cart,
    cart: product,
  };
};

export const addToFavourites = (favouriteProduct) => {
  return {
    type: add_to_favourite,
    favourites: favouriteProduct,
  };
};

export const removeFromFavourites = (favouriteProduct) => {
  return {
    type: remove_from_favourites,
    favourites: favouriteProduct,
  };
};
