import React from "react";
import ReactDOM from "react-dom";
import List from "./List.js";
import Input from "./Input.js";
import Parent from "./ParentChildProps/Parents.js";
import MyComponent from "./MyComponent.js";

ReactDOM.render(<List />, document.getElementById("list"));
ReactDOM.render(<Input />, document.getElementById("input"));
ReactDOM.render(<Parent />, document.getElementById("parent"));
ReactDOM.render(<MyComponent />, document.getElementById("root"));
