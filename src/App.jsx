import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './Winning_Combination.js'
import GameOver from './components/GameOver.jsx'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(prevTurns) {
  let PlayerSymbol = 'X'
  if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
    PlayerSymbol = '0';
  }
  return PlayerSymbol;
}

function App() {
  const [GameTurns, setGameTurns] = useState([])
  //const [ActivePlayer, setActivePlayer] = useState("X");

  let gameBoard = initialGameBoard;

  for (const turn of GameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const ActivePlayer = deriveActivePlayer(GameTurns);

  let winner;

  for (const combinations of WINNING_COMBINATIONS) {
    const FirstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const SecondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const ThirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (FirstSquareSymbol === SecondSquareSymbol && SecondSquareSymbol === ThirdSquareSymbol) {
      winner = FirstSquareSymbol;
    }
  }

  function handleActivePlayer(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => {
    //   return (curActivePlayer === "X" ? "0" : "X");
    // });


    setGameTurns((prevTurns) => {
      const PlayerSymbol = deriveActivePlayer(prevTurns);
      const updatedturns = [{ square: { row: rowIndex, col: colIndex }, player: PlayerSymbol }, ...prevTurns]

      return updatedturns;
    });

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={ActivePlayer === "X"} />
          <Player initialName='Player 2' symbol='0' isActive={ActivePlayer === "0"} />
        </ol>

        {winner && <GameOver winner={winner} />}
        
        <GameBoard onSelectSquare={handleActivePlayer} Board={gameBoard} />
      </div>

      <Log turns={GameTurns} />
    </main>
  )
}

export default App
