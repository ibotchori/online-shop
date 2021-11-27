import React, { Component } from "react";

import classes from "./OverLay.module.css";

export class OverLay extends Component {
  render() {
    return (
      <div
        className={classes.overlay}
        style={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default OverLay;
