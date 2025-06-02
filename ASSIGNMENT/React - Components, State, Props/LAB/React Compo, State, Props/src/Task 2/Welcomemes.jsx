import React, { Component } from "react";

class Welcomemes extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }
  render() {
    return (
      <div>
        <h1>{this.data.title}</h1>
      </div>
    );
  }
}

export default Welcomemes;
