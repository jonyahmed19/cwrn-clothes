import React from "react";
import CustomButton from "../custom-button/customButton.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { setToggleCart } from "../../redux/cart/cart.action";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <h4 className="center">Cart is empty!</h4>
        )}

        <CustomButton
          label="GO TO CHECKOUT"
          onClick={() => {
            history.push("/checkout");
            dispatch(setToggleCart());
          }}
        />
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
