import React from "react";
import "./collectionItem.styles.scss";
import CustomButton from "../custom-button/customButton.component";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        label="Add to cart"
        inverted="true"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
