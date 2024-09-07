//Author: Erik Rodriguez
'use client' // This is a client component 👈🏽
import React from 'react'
//import './styles.css'
const styles = {
  game: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardRow: {
    clear: 'both',

    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    gap: '1px',
  },
  square: {
    padding: '40px',
    border: '1px solid black',
    borderRadius: '2px',
  },
}
const Square = (props) => {
  const style = props.value ? `square ${props.value}` : `square`
  return (
    <button style={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default function TicTacToe(props) {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = React.useState(true)
  const winner = calculateWinner(squares.slice())
  const xO = xIsNext ? 'X' : 'O'
  const handleClick = (i) => {
    const _squares = squares.slice()
    //avoid set action while clicking used square
    if (winner || _squares[i]) {
      return
    }
    _squares[i] = xO

    setSquares(_squares)
    setXIsNext(!xIsNext)
  }

  return (
    <div style={styles.game}>
      <div className="board">
        <div className="status">
          {winner ? `Winner is:  ${winner} !` : 'Next Player: ' + xO}
        </div>

        <div style={styles.boardRow}>
          {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => handleClick(i)} />
          ))}
        </div>
        {winner && (
          <button onClick={() => setSquares(Array(9).fill(null))}>
            Try again and reset the board
          </button>
        )}
      </div>
    </div>
  )
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
