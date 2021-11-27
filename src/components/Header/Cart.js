import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./Cart.module.css";
import { currencySymbol } from "../ui/Symbol";
import OverLay from "../ui/OverLay";

export class Cart extends Component {
  state = {
    totalPrice: 0,
  };

  // componentDidMount() {
  //   if (this.props.cart.length > 1) {
  //     const total = this.props.cart.reduce(
  //       (a, b) => 1 * a.prices[0].amount + 1 * b.prices[0].amount //products sum
  //     );
  //     this.setState({
  //       totalPrice: total,
  //     });
  //   } else {
  //     this.setState({
  //       totalPrice: this.props.cart.length > 0 ? this.state.totalPrice : 0,
  //     });
  //   }
  // }

  render() {
    let symbol = currencySymbol(this.props.price);

    const amount = this.props.cart.map((item) => item);
    //const arr = amount.map((item) => item);

    //check currency with Header currency
    const currencyCheck = amount.map((item) =>
      item.prices.filter((item) => item.currency === this.props.price)
    );
    //extract price arrays from array
    const extractFromArr = currencyCheck.map(
      (item) => item[item.map((item, index) => index)]
    );
    //final resul
    const PriceResult = extractFromArr.map((item) => item.amount);

    //total summ
    const total =
      PriceResult.length !== 0
        ? PriceResult.reduce(
            (a, b) => 1 * a + 1 * b //products sum
          )
        : 0;

    return (
      <OverLay
        onClick={this.props.cartToggleHandler}
        style={{ display: this.props.lat ? "block" : "none" }}
      >
        <div className={classes.cartContainer}>
          <div className={classes.itemInfo}>
            <p> My bag </p>
            <small>
              {this.props.cart.length > 0 ? this.props.cart.length : "0"}
            </small>
          </div>

          {this.props.cart.length > 0 ? (
            this.props.cart.map((item, index) => {
              return (
                <div key={item.id} className={classes.itemContainer}>
                  <div className={classes.itemDescription}>
                    <p>{item.name}</p>
                    <p>{item.description.replace(/(<([^>]+)>)/gi, "")}</p>
                    <p>
                      {symbol}
                      {PriceResult[index]}
                    </p>
                    <div className={classes.sizes}>
                      <button className={classes.cartBtn}>X</button>
                      <button className={classes.cartBtn}>L</button>
                    </div>
                  </div>

                  <div className={classes.quantity}>
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                  <div className={classes.imagePreview}>
                    <img src={item.gallery[0]} alt={item.name} />
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ padding: "15px" }}>No items</p>
          )}
          <div className={classes.total}>
            <p>Total</p>
            <p>
              {symbol}
              {total.toFixed(2)}
            </p>
          </div>
          <div className={classes.btns}>
            <Link to="/cart">
              <button
                onClick={this.props.cartToggleHandler}
                className={classes.viewBtn}
              >
                view bag
              </button>
            </Link>
            <button className={classes.checkBtn}>checkout</button>
          </div>
        </div>
      </OverLay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.cart,
    price: state.products.price[0].currency,
    products: state.products.data,
  };
};

export default connect(mapStateToProps)(Cart);
