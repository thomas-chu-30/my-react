import React from "react";
import ReactDOM from "react-dom";
import List from "./List.js";
import Input from "./Input.js";
import Parent from "./ParentChildProps/Parents.js";

// ReactDOM.render(<List />, document.getElementById("root"));
//不太了解為什麼沒有辦法一起show出來
ReactDOM.render(<Input />, document.getElementById("input"));
ReactDOM.render(<Parent />, document.getElementById("root"));
