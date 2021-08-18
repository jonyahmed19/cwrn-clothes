import React from "react";
import CustomButton from "../custom-button/customButton.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton label="GO TO CHECKOUT" />
      </div>
    </div>
  );
};

export default CartDropDown;
