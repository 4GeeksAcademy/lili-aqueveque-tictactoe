import React, { useState } from "react";

const Lobby = ({ onJoinGame }) => {
    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");
    const [selectedSymbolX, setSelectedSymbolX] = useState(false);

    const handleSymbolSelection = (symbol) => {
        if (selectedSymbolX) {
            setPlayerO(symbol);
        } else {
            setPlayerX(symbol);
        }
    };

    const handleStartGame = () => {
        // Validate player names and symbol choices if necessary
        if (playerX && playerO) {
            onJoinGame(playerX, playerO);
        } else {
            alert("Please enter valid names and choose symbols for both players.");
        }
    };

    return (
        <div className="lobby">
            <h2>Choose your Weapon</h2>
            <div className="top">
                <input
                    type="text"
                    placeholder="Player 1 username"
                    value={playerX}
                    onChange={(e) => setPlayerX(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Player 2 username"
                    value={playerO}
                    onChange={(e) => setPlayerO(e.target.value)}
                />
            </div>
            <div className="bottom">
                <button className="xButton">
                    X
                </button>
                <button className="oButton">
                    O
                </button>
            </div>

            <button onClick={handleStartGame}>Start Game</button>
        </div>
    );
};

export default Lobby;
