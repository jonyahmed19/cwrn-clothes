import { CartActionTypes } from "./cart.types";

export const setToggleCart = () => ({
  type: CartActionTypes.SET_CART_TOGGLE,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_CART,
  payload: item,
});
