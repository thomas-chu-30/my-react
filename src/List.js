import React, { Component } from "react";
import Items from "./Items.js";

class List extends Component {
  //static property
  //static method
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Items price={100} text="board"></Items>
        <Items price={200} text="pen"></Items>
        <Items price={150} text="apple"></Items>
        <Items price={128} text="pineaple"></Items>
        <Items price={400} text="good job"></Items>
        {/* <Items>如果你要寫在這裡，就要用children</Items> */}
      </div>
    );
  }
}

export default List;
