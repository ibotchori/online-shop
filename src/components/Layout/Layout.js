import React, { Component } from "react";
import Header from "../Header/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
