import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurns,setGameTurn] = useState([]);
  const [actiePlayer,setActivePlayer] = useState('X');
  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurn((prevGameTurns)=>{
      let currentPlayer = 'X';
      if(prevGameTurns.length > 0 && prevGameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [
        {square: {row:rowIndex,col:colIndex},player: actiePlayer}
        ,...prevGameTurns
      ];
      return updatedTurns;
    });
  }
  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initalName='Player 1' symbol='X' isActive={actiePlayer === 'X'}/>
            <Player initalName='Player 2' symbol='O' isActive={actiePlayer === 'O'}/>
          </ol>
          <GameBoard 
            onSelectSquare={handleSelectSquare} 
            turns={gameTurns} />
          <Log />
        </div>
      </main>
  )
}

export default App
