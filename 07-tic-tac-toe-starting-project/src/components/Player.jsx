import { useState } from 'react';
export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        //best practice to use a callback function when updating state based on previous state
        setIsEditing((editing) => !editing);
    }
    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={name}/>;
    }
    return (
        <li>
            <span class="player">
                {playerName}
                <span className="player-symbo">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    )
}