import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        {/* 夾在裡面的可以用children */}
        <li>{this.props.children}</li>
      </div>
    );
  }
}

export default List;
