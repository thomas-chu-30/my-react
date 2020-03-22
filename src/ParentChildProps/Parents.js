import React, { Component, createRef } from "react";
import Child from "./Child.js";
class Parents extends Component {
  childRef = createRef();
  state = {
    count: 0
  };
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  addChildCount = () => {
    this.childRef.current.addChildCount();
  };
  render() {
    return (
      <div>
        <h3>parents: {this.state.count}</h3>
        <button onClick={this.addCount}>+Parent</button>
        <button onClick={this.addChildCount}>+Child</button>
        <Child ref={this.childRef}></Child>
      </div>
    );
  }
}

export default Parents;
