import React, { Component } from "react";

export class CategoryName extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: "1238px",
          margin: "80px auto",
          padding: "0 20px",
          fontWeight: "400",
        }}
      >
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default CategoryName;
