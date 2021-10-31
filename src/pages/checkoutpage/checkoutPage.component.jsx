import React from "react";
import "./checkoutPage.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkoutItem.component";
import CustomButton from "../../components/custom-button/customButton.component";
import { withRouter } from "react-router";
import StripeCheckoutButton from "../../components/stripe-button/stripeButton.component";

const CheckoutPage = ({ cartIems, total, history }) => {
  return (
    <div className="checkout-page">
      {cartIems.length ? (
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
      ) : (
        <h4>No Products </h4>
      )}
      {cartIems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartIems.length ? (
        <div className="total">
          <div className="total-amout">Total: ${total}</div>
          <StripeCheckoutButton price={total} />
        </div>

      ) : (
        <CustomButton
          label="Go to Shop"
          onClick={() => history.push("/shop")}
        />
      )}

    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartIems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
