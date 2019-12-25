import React, { Component } from "react";
import "./GameBox.css";

import Block from "./Block";

class GameBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
      boxColors: []
    };
  }

  selectColor() {
    let rn = Math.floor(Math.random() * 2);
    let color = rn === 0 ? "blue" : "black";
    return color;
  }

  render() {
    return (
      <div className="GameBox">
        {/* <Block color="gray" />
        <Block color="blue" /> */}
        {Array.from({ length: 5 * 5 }).map(n => (
          <Block color={this.selectColor()} />
        ))}
      </div>
    );
  }
}

export default GameBox;
