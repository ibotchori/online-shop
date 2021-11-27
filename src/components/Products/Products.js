import React, { Component } from "react";

import { gql } from "@apollo/client";
import { GET_CATEGORY } from "../../data/Queries";
import { client } from "../../index";

import classes from "./Products.module.css";
import Product from "./Product";
import CategoryName from "../ui/CategoryName";

import { connect } from "react-redux";
import { getProductsAction } from "../../redux/actions/";

export class Products extends Component {
  componentDidMount = async () => {
    const response = await client.query({
      query: gql`
        ${GET_CATEGORY}
      `,
    });

    this.props.getProductsAction(response.data.category.products);
  };

  render() {
    return (
      <>
        <CategoryName>All Products</CategoryName>
        <div className={classes.parent}>
          {this.props.products ? (
            this.props.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          ) : (
            <p>Loading...</p>
          )}
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

const mapDispatchToProps = () => {
  return {
    getProductsAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Products);
