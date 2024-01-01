import { useState } from "react";

const initalGameBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
];
export default function GameBoard(){
    const [gameBoard,setGameBoad] = useState(initalGameBoard);
    function handleSelectSquare(rowIndex, colIndex){
        setGameBoad((prevGameBoard)=>{
            const updatedGameBoard = [...prevGameBoard.map(innerArr=>[...innerArr])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        });
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