import React from "react";
import "./cartItem.styles.scss";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
