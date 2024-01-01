import { useState } from 'react';
export default function Player({initalName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initalName);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        //best practice to use a callback function when updating state based on previous state
        setIsEditing((editing) => !editing);
    }
    function handleChange(e){
        setPlayerName(e.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}/>;
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbo">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    )
}