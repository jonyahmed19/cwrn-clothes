import { CartActionTypes } from "./cart.types";
import { addItemCount, removeItemFromCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.SET_CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItemCount(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartToggleReducer;
