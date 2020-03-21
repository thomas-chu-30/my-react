//第三招
import React, { Component, createRef } from "react";

class Input extends Component {
  //第三招
  myInput = createRef();
  componentDidMount() {
    // 第一招:之後可能會不支援
    // this.refs.myInput.focus();
    // 第二招1
    // this.myInput.focus();
    // 第三招是官方建意的方法
    this.myInput.current.focus();
  }
  setRef = input => {
    // 第二招1
    // this.myInput = input;
    //第二招2
    // input.focus();
  };
  render() {
    return (
      <div>
        <h3>Enter your Input</h3>
        {/* 第一招 */}
        {/* <input type="text" ref="myInput" /> */}
        {/* 第二招 */}
        {/* <input type="text" ref={this.setRef} /> */}
        {/* 第三招 */}
        <input type="text" ref={this.myInput} />
      </div>
    );
  }
}

export default Input;
