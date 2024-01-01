import { useState } from "react";

const initalGameBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }){
    const [gameBoard,setGameBoad] = useState(initalGameBoard);
    function handleSelectSquare(rowIndex, colIndex){
        setGameBoad((prevGameBoard)=>{
            const updatedGameBoard = [...prevGameBoard.map(innerArr=>[...innerArr])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });
        onSelectSquare();
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>
            )}
        </ol>
    )
}