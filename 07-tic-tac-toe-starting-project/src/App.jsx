import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
function  deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
const initalGameBoard = [
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];
function deriveGameBoard(gameTurns){
  const gameBoard = [...initalGameBoard.map(row => [...row])];
  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }
  return gameBoard;
}
function deriveWinner(gameBoard,players){
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol= gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol= gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol !== null && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol){
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  const [gameTurns, setGameTurn] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard,players);
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurn((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }
        , ...prevGameTurns
      ];
      console.log(updatedTurns);
      return updatedTurns;
    });
  }
  function handleRematch(){
    setGameTurn([]);
  }
  function handlePlayerNameChange(playerSymbol, newName){
    setPlayers((prevPlayers)=>{
      return {...prevPlayers, [playerSymbol]: newName};
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
            initalName='Player 1' 
            symbol='X' 
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange} />
          <Player 
            initalName='Player 2' 
            symbol='O' 
            isActive={activePlayer === 'O'} 
            onChangeName={handlePlayerNameChange}
            />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
