import React, { Component } from "react";

import "./GameInfo.scss";

class GameInfo extends Component {
  render() {
    return (
      <div className="game-info-container">
        <div>
          <p className="info">
            Turn :
            <span
              className={`info-icon ${this.props.turn}`}
            >{` ${this.props.turn} `}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default GameInfo;
