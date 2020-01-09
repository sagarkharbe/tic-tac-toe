import React, { Component } from "react";

import "./Winner.scss";

class Winner extends Component {
  render() {
    return (
      <div>
        <h2 className={`winner-text ${this.props.winner}`}>
          {this.props.winner}
        </h2>
      </div>
    );
  }
}

export default Winner;
