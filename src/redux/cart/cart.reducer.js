import { CartActionTypes } from "./cart.types";
import { addItemCount } from "./cart.utils";

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
    default:
      return state;
  }
};

export default cartToggleReducer;
