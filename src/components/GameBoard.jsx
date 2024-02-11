import { useState } from 'react';

export default function GameBoard({ onSelectSquare, Board }) {
    

    // const [gameBoard, setgameBoard] = useState(initialGameBoard);

    // function handleGameBoard(rowIndex, colIndex) {
    //     setgameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id='game-board'>
            {Board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                                </button>
                        </li>)}
                    </ol>
                </li>
            )}
        </ol>
    );
}