import React, { Component } from "react";

import { currencySymbol } from "../ui/Symbol";
import { connect } from "react-redux";
import classes from "./CartPage.module.css";
import SizeButton from "../ui/SizeButton";

export class CartItem extends Component {
  render() {
    //get changed symbol
    let symbol = currencySymbol(this.props.price);
    //filter price by currency
    let price = this.props.item.prices.filter(
      (currency) => currency.currency === this.props.price
    );
    let amount = price.length !== 0 ? price.map((item) => item.amount) : "";

    return (
      <div className={classes.cartContainer}>
        <div className={classes.productContainer}>
          <div className={classes.productDetails}>
            <h2>{this.props.item.name}</h2>
            <p>{this.props.item.description.replace(/(<([^>]+)>)/gi, "")}</p>
            <p>
              {symbol}
              {amount}
            </p>

            <div className={classes.productSizes}>
              {this.props.item.attributes[0].items.map((size) => (
                <SizeButton className={classes.forBtn}>
                  {size.displayValue}
                </SizeButton>
              ))}
            </div>
          </div>

          <div className={classes.rightContainer}>
            <div className={classes.rightButtons}>
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
            <div className={classes.rightImage}>
              <img src={this.props.item.gallery[0]} alt="sweater" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.products.price[0].currency,
  };
};

export default connect(mapStateToProps)(CartItem);
