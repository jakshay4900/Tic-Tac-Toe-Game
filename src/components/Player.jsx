import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setisEditing] = useState(false);

    const handleEditClick = function () {
        setisEditing((editing) => !isEditing)
    }

    const handlePlayerNameClick = function (e) {
        console.log(e)
        setplayerName(e.target.value)
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ? <input type="text" required value={playerName} onChange={handlePlayerNameClick} /> : <span className="player-name">{playerName}</span>}

            </span>
            <button onClick={handleEditClick}>{isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}
export default Player;