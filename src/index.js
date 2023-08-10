import React from "react";
import ReactDOM from "react-dom";
import pi, { piSquare, piCube } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{piSquare()}</li>
    <li>{piCube()}</li>
  </ul>,
  document.getElementById("root")
);
