import React, { Component } from "react";
import "./Block.css";

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const colorarray = ["blue", "black"];
    let ind = colorarray.indexOf(this.state.color);
    console.log(ind);

    this.setState({ color: colordict[this.state.color] });
  }

  render() {
    return (
      <div
        className="Block"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Block;
