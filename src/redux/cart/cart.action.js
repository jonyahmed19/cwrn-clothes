import { CartActionTypes } from "./cart.types";

export const setToggleCart = () => ({
  type: CartActionTypes.SET_CART_TOGGLE,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_CART,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
