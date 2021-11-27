import React, { Component } from "react";

import { connect } from "react-redux";

import CategoryName from "../ui/CategoryName";
import Product from "./Product";

import classes from "./Products.module.css";

export class Category extends Component {
  render() {
    const filtered = this.props.products.filter(
      (item) => item.category === "tech"
    );

    return (
      <>
        <CategoryName>Tech</CategoryName>
        <div className={classes.parent}>
          {filtered.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.data,
  };
};

export default connect(mapStateToProps)(Category);
