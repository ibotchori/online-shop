import React, { Component } from "react";

import classes from "./CartPage.module.css";

import { connect } from "react-redux";

import CategoryName from "../ui/CategoryName";
import CartItem from "./CartItem";

export class CartPage extends Component {
  render() {
    return (
      <>
        <CategoryName>Cart</CategoryName>
        <div className={classes.cartRow}>
          {this.props.cart.length !== 0 ? (
            this.props.cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          ) : (
            <h2>No Items</h2>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
  };
};

export default connect(mapStateToProps)(CartPage);
