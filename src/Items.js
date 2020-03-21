import React, { Component } from "react";
class Item extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = {
    title: "Message",
    text: ""
  };
  sayHi = () => {
    this.setState({ text: "Hi !!" });
  };
  render() {
    return (
      <div>
        {/* <h3>{this.state.title}</h3> */}
        {/* <li>{this.state.text}</li> */}
        {/* <button onClick={this.sayHi}>say Hi !!</button> */}
        <li>
          {this.props.text}({this.props.price + 1})
        </li>
        <li>{this.props.children}</li>
      </div>
    );
  }
}

export default Item;
