import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [actiePlayer,setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));
  }
  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initalName='Player 1' symbol='X' isActive={actiePlayer === 'X'}/>
            <Player initalName='Player 2' symbol='O' isActive={actiePlayer === 'O'}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={actiePlayer} />
        </div>
      </main>
  )
}

export default App
