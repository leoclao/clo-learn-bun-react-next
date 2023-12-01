'use client';

import { useState } from 'react';
import clsx from "clsx"
import styles from "@/styles/modules/game.module.scss"
import Components from "@/components";

function Square({ value, onSquareClick }: any) {
  return <Components.Button modifierClass={styles.square} label={value} onClick={onSquareClick} />
}

function Board({ xIsNext, squares, onPlay }: any) {
  // console.log('xIsNext: ', xIsNext, ', squares', squares[0], ', onPlay:', onPlay);
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    // let nextSquares;
    // if(squares !== null || squares !== undefined) {
    //   nextSquares =  squares.slice();
    // }
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? "X" : "O");
  }

  return (
    <div className={styles.board}>
      {status && (<div className={styles.playerStatus}>{status}</div>)}
      <Components.Grid cols="3" rows="3">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </Components.Grid>
    </div>
  );
}

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquare = history[history.length - 1];
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];
  // console.log(currentSquare);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // setHistory([...history, nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <Components.Button onClick={() => jumpTo(move)} label={description} desc={description} />
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <Components.Grid cols="2">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
        <div className={styles.info}>
          <ol>
            {moves}
          </ol>
        </div>
      </Components.Grid>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
