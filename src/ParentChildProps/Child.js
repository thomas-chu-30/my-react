import React, { Component } from "react";

class Child extends Component {
  state = {
    count: 0
  };
  addChildCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <h3>Child: {this.state.count}</h3>
        <button>+Parent</button>
        <button onClick={this.addChildCount}>+Child</button>
      </div>
    );
  }
}

export default Child;
