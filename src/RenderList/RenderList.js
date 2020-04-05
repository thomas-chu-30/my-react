import React, { Component } from "react";
import List from "./List.js";
const item = ["Learn React", "Learn JS", "Learn HTML", "Learn CSS"];
class RenderList extends Component {
  render() {
    return (
      <div>
        {item.map((e) => (
          <List>{e}</List>
        ))}
      </div>
    );
  }
}

export default RenderList;
