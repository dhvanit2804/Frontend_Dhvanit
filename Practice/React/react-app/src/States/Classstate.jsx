// state :- it's a varible useing modify
// state :- same file data change
// state in class :- constr super
// state this as well on object :- define
// setstate fix
// this.setstate  :- method

// class method fix in state , this.state ,  this.setstate :- change kar
import React, { Component } from "react";

class Classstate extends Component {
  constructor() {
    super();
    this.state = {
      Count: 0,
    };
  }

  increment = () => {
    this.setState({
      Count: this.state.Count + 1,
    });
  };

  decrement = () => {
    this.setState({
      Count: this.state.Count - 1,
    });
  };

  zero = () => {
    this.setState({
      Count: 0,
    })
  }

  render() {
    return (
      <div className="container">
        <h1>The Current Count is: {this.state.Count}</h1>
        <button className="btn btn-success" onClick={this.increment}>
          Increase
        </button>
        <button className="btn btn-danger ms-3" onClick={this.decrement}>Decrease</button>

        <button className="btn btn-info ms-3" onClick={this.zero}>Reset</button>
      </div>
    );
  }
}

export default Classstate;
