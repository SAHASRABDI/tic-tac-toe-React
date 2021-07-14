import React, { useState } from "react";
import Board from "./board";
const initialState = Array(9).fill(null);

function Game() {
  const [boxNumber, setBoxNumber] = useState(initialState); //entire board
  const [nextPlayerX, setNextPlayer] = useState(true); //whether X or O
  const [scoreX, setscoreX] = useState(0);
  const [scoreO, setscoreO] = useState(0);
  const [whoWinner, setwhoWinner] = useState(null); //it can be NULL,DRAW,X,O
  const [step, setStep] = useState(0); //count the steps to decide

  function resetState() {
    setBoxNumber(Array(9).fill(null));
    setNextPlayer(true);
    setStep(0);
    setwhoWinner(null);
  }

  function handleClick(index) {
    if (boxNumber[index]) return;
    else {
      if (!boxNumber[index] && step === 0 && whoWinner) return;
      var tempStep = step + 1;
      setStep(tempStep);
      //console.log(step);
      var tempBox = boxNumber;
      var tempwinner = null;
      tempBox[index] = nextPlayerX ? "X" : "O";
      setBoxNumber(tempBox); //updated the board
      //console.log(tempBox);

      const winning_moves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < winning_moves.length; i = i + 1) {
        if (
          tempBox[winning_moves[i][0]] &&
          tempBox[winning_moves[i][0]] === tempBox[winning_moves[i][1]] &&
          tempBox[winning_moves[i][1]] === tempBox[winning_moves[i][2]] &&
          tempBox[winning_moves[i][2]]
        ) {
          tempwinner = tempBox[winning_moves[i][0]];
          setwhoWinner(tempBox[winning_moves[i][0]]);
          break;
        }
      }
      //console.log(tempwinner);
      if (!tempwinner) {
        if (step < 8) {
          setNextPlayer(!nextPlayerX);
        } else {
          setwhoWinner("Draw");
          setStep(0);
          //window.alert("This is alert box!");
        }
      } else {
        if (tempwinner === "X") {
          setscoreX(scoreX + 1);
          setStep(0);
        }
        if (tempwinner === "O") {
          setscoreO(scoreO + 1);
          setStep(0);
        }
        //window.alert("This is alert box!");
      }
    }
  }

  return (
    <div className="game">
      <div className="game-board">
        <h1>Score of Player X: {scoreX}</h1>
        <h1>Score of Player O: {scoreO}</h1>

        {whoWinner === null ? (
          nextPlayerX ? (
            <h1>It's Player X's turn </h1>
          ) : (
            <h1>It's Player O's turn </h1>
          )
        ) : whoWinner === "X" ? (
          <div>
            <h1>Player X is winner</h1>
          </div>
        ) : whoWinner === "O" ? (
          <div>
            <h1>Player O is winner</h1>
          </div>
        ) : (
          <div>
            <h1>The game is a Draw</h1>
          </div>
        )}

        <br />
        <Board array={boxNumber} onClick={handleClick} />
      </div>
      <br />
      <div className="resetButton">
        <button
          style={{ height: "50px", width: "200px", fontSize: "20px" }}
          onClick={resetState}
        >
          Reset game
        </button>
      </div>
    </div>
  );
}
export default Game;
