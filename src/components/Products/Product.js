import React, { Component } from "react";

import { Link } from "react-router-dom";

import classes from "./Product.module.css";

import { currencySymbol } from "../ui/Symbol";

import { getIdsAction } from "../../redux/actions";
import { cartAction } from "../../redux/actions";
import { connect } from "react-redux";

export class Product extends Component {
  render() {
    //Filter Currency with chousen icon currency
    let filteredCurrency = this.props.product.prices.filter(
      (item) => item.currency === this.props.price
    );
    //change amount by currency
    let amount = filteredCurrency.map((item) => item.amount);

    //function to switch currency, locates at ui folder
    let symbol = currencySymbol(this.props.price);

    const addToCartHandler = (productId) => {
      const forCart = this.props.products.filter(
        (item) => item.id === productId
      );
      // need prevent to add duplicates
      this.props.cartAction(forCart);
    };

    return (
      <Link
        style={{ zIndex: "99!important" }}
        onClick={() => this.props.getIdsAction(this.props.product.id)}
        to={
          this.props.product.inStock ? `/product/${this.props.product.id}` : ""
        }
      >
        <div
          style={{ zIndex: "99" }}
          className={`${classes.div1} ${
            this.props.product.inStock ? null : classes.disabled
          }`}
        >
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
          />
          {this.props.product.inStock ? null : (
            <div className={classes.outOfStock}>Out Of Stock</div>
          )}
          {this.props.product.inStock ? (
            <span
              style={{ zIndex: "999!important" }}
              className={classes.smallCart}
            >
              <img
                style={{ zIndex: "999!important" }}
                onClick={addToCartHandler.bind(null, this.props.product.id)}
                className={classes.cartCircle}
                id="circle"
                src="/images/circle.png"
                alt="cart"
              />
            </span>
          ) : (
            ""
          )}
          <p className={classes.title}>{this.props.product.name}</p>
          <p className={classes.price}>
            {symbol}
            {amount}
          </p>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.products.price[0].currency,
    products: state.products.data,
    cart: state.products.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    getIdsAction,
    cartAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Product);
