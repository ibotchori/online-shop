import React, { Component } from "react";
import { CartOutline } from "react-ionicons";
import classes from "./Header.module.css";

import { NavLink as Link } from "react-router-dom";

import { connect } from "react-redux";

import { currencySymbol } from "../ui/Symbol";

import Currency from "./Currency";
import Cart from "./Cart";

import { ChevronUpOutline } from "react-ionicons";
import { ChevronDownOutline } from "react-ionicons";

export class Header extends Component {
  state = {
    currencyToggle: false,
    cartToggle: false,
    lat: false,
  };

  toggleHandler = () => {
    this.setState({ currencyToggle: !this.state.currencyToggle });
  };

  render() {
    //icon change for currency
    let symbol = currencySymbol(this.props.price[0].currency);

    const cartToggleHandler = () => {
      this.setState({
        cartToggle: !this.state.cartToggle,
        lat: !this.state.lat,
      });
    };
    //array for categories
    let categ = [];

    //extract categories from products
    this.props.products.map((item) => categ.push(item.category));
    //Remove Duplicates
    let uniqueChars = [...new Set(categ)];

    //Render categories
    let filteredCategories =
      uniqueChars.length !== 0
        ? uniqueChars.map((category) => (
            <li key={category} className={classes.links}>
              <Link
                to={`${category}`}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {category}
              </Link>
            </li>
          ))
        : "No categories";
    return (
      <div className={classes.mainContainer}>
        <nav className={classes.nav}>
          <ul className={classes.list}>{filteredCategories}</ul>
          <Link to="/">
            <img
              className={classes.greenCart}
              src="/images/cart.png"
              height="30px"
              width="30px"
              alt="cart"
            />
          </Link>
          <div className={classes.cartContainer}>
            <p onClick={this.toggleHandler} style={{ padding: "5px" }}>
              {symbol}
            </p>
            <div className={classes.currency} onClick={this.toggleHandler}>
              {this.state.currencyToggle ? (
                <ChevronDownOutline
                  color={"#00000"}
                  height="15px"
                  width="12px"
                />
              ) : (
                <ChevronUpOutline color={"#00000"} height="15px" width="12px" />
              )}
              {this.state.currencyToggle && (
                <Currency products={this.props.products} />
              )}
            </div>
            <div style={{ zIndex: "9999" }}>
              <CartOutline
                color={"#00000"}
                height="25px"
                width="21px"
                onClick={cartToggleHandler}
              />
            </div>
            {this.state.cartToggle ? (
              <Cart
                cartToggleHandler={cartToggleHandler}
                lat={this.state.lat}
              />
            ) : (
              ""
            )}
            <div
              onClick={cartToggleHandler}
              style={{ opacity: this.state.cartToggle ? "1" : "0" }}
              className={classes.statusContainer}
            >
              {this.props.cart.length >= 0 ? this.props.cart.length : "0"}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    price: state.products.price,
    cart: state.products.cart,
  };
};

export default connect(mapStateToProps)(Header);
