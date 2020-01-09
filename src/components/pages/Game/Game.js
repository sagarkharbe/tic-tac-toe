import React, { Component } from "react";
import PropTypes from "prop-types";

import Quad from "./Quad/Quad";
import GameInfo from "./GameInfo/GameInfo";
import Winner from "./Winner/Winner";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Game.scss";

const MySwal = withReactContent(Swal);

class Game extends Component {
  constructor(...props) {
    super(...props);

    this.posWinners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  state = {
    elements: new Array(9).fill(null),
    turn: "X"
  };

  init = () => {
    let a = this.state.elements.slice().fill(null, 0, 9);

    this.setState({
      elements: a,
      turn: "X"
    });
  };

  handleClickSquare = index => {
    let a = this.state.elements.slice();
    a[index] = this.state.turn;
    this.setState({
      elements: a
    });
    // need prevState
    this.setState(
      prevState => ({
        turn: prevState.turn === "X" ? "O" : "X"
      }),
      () => this.check()
    );
  };

  check = () => {
    let winner = "";
    for (let i = 0; i < this.posWinners.length && winner === ""; i++) {
      if (
        this.state.elements[this.posWinners[i][0]] &&
        this.state.elements[this.posWinners[i][0]] ===
          this.state.elements[this.posWinners[i][1]] &&
        this.state.elements[this.posWinners[i][1]] ===
          this.state.elements[this.posWinners[i][2]]
      ) {
        // Someone Won
        winner = this.state.elements[this.posWinners[i][0]];
      }
    }

    /** Checking if the board is already full **/
    if (winner === "") {
      winner = "tie";
      for (let i = 0; i < 9 && winner === "tie"; i++) {
        if (!this.state.elements[i]) {
          winner = "";
        }
      }
    }

    if (winner !== "") {
      MySwal.fire({
        title: "Winner",
        showCancelButton: true,
        html: <Winner winner={winner} />,
        confirmButtonText: "Play Again",
        cancelButtonText: "Bach to Menu",
        onClose: () => {}
      }).then(result => {
        if (result.value) {
          this.init();
        } else {
          this.context.router.history.push("/");
        }
      });
    }
  };

  render() {
    return (
      <div className="component">
        <GameInfo turn={this.state.turn} />
        <Quad
          elements={this.state.elements}
          handleClick={this.handleClickSquare}
        />
      </div>
    );
  }
}

export default Game;
