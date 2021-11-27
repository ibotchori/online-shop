import React, { Component } from "react";

import classes from "./Currency.module.css";

import { connect } from "react-redux";
import { getPrice } from "../../redux/actions";

export class Currency extends Component {
  render() {
    //Price Handler Function for Dispatch currency
    const priceHandler = (currency = "USD") => {
      if (this.props.products.length !== 0) {
        if (currency === "USD") {
          const filter = this.props.products[0].prices.filter(
            (item) => item.currency === "USD"
          );
          this.props.getPrice(filter);
        }
        if (currency === "GBP") {
          const filter = this.props.products[0].prices.filter(
            (item) => item.currency === "GBP"
          );
          this.props.getPrice(filter);
        }
        if (currency === "AUD") {
          const filter = this.props.products[0].prices.filter(
            (item) => item.currency === "AUD"
          );
          this.props.getPrice(filter);
        }
        if (currency === "JPY") {
          const filter = this.props.products[0].prices.filter(
            (item) => item.currency === "JPY"
          );
          this.props.getPrice(filter);
        }
        if (currency === "RUB") {
          const filter = this.props.products[0].prices.filter(
            (item) => item.currency === "RUB"
          );
          this.props.getPrice(filter);
        }
      }
    };
    return (
      <div className={classes.main}>
        {this.props.products.length !== 0 ? (
          this.props.products[0].prices.map((price) => {
            return (
              <p
                onClick={priceHandler.bind(null, price.currency)}
                key={price.amount}
                className={classes.currency}
              >
                {price.currency}
              </p>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>Nothing Here...</p>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    getPrice,
  };
};

export default connect(null, mapDispatchToProps())(Currency);
