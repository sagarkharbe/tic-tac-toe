import React, { Component } from "react";

import "./Help.scss";

class Help extends Component {
  render() {
    return (
      <div className="help-container">
        <img
          className="img-tic-tac-toe"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/200px-Tic_tac_toe.svg.png"
          alt="Tic Tac Toe"
        />
        <p>
          <b>Tic Tac Toe </b> It is a pencil and paper game between two players:{" "}
          <b className="o-symbol">O</b> y <b className="x-symbol">X</b>, which
          mark the spaces of a 3 × 3 board in turn. A player wins if he manages
          to have a line of three of his symbols: the line can be horizontal,
          vertical or diagonal.
        </p>
        <p>
          The players soon discover that the perfect game ends in a draw
          regardless of what the first player plays with.
        </p>
        <p>
          The same simplicity of the three-in-a-row game makes it ideal as a
          pedagogical tool to teach the concepts of game theory and the branch
          of artificial intelligence that is responsible for the search for game
          trees.
        </p>
        <blockquote>
          <img
            className="game-tic-tac-toe"
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Tictactoe1.gif"
            alt="Game Tic Tac Tow"
          />
          <p>
            Animation of a game where <b className="x-symbol">X</b> they win in
            their fourth move by preventing the <b className="o-symbol"> O </b>{" "}
            from making a line of three in their third move in the lower right
            corner.
          </p>
        </blockquote>
        <h3 className="subtitle">Rules</h3>
        <p>
          Each player must only place their symbol once per turn and must not be
          on a square already played. In case the player cheats The winner will
          be the other. You should get a straight line or diagonal by symbol. If
          the player marks a box, even if it is the minimum mark, you must put
          symbol of the next play on that box.
        </p>
      </div>
    );
  }
}

export default Help;
