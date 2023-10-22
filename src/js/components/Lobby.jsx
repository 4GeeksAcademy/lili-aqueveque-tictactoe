import React, { useState } from "react";

const Lobby = ({ onJoinGame }) => {
    const [playerX, setPlayerX] = useState("");
    const [playerO, setPlayerO] = useState("");

    const [selectedSymbol, setSelectedSymbol] = useState(null);

    const handleSymbolSelection = (symbol) => {
        if (selectedSymbol === "X") {
            setPlayerX(playerX);
        } else if (selectedSymbol === "O") {
            setPlayerO(playerO);
        } else {
            alert("Please choose a symbol for both players.");
        }

        // Check if both players have chosen names and symbols
        if (playerX && playerO && selectedSymbol) {
            // Start the game
            onJoinGame(playerX, playerO);
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
                    onChange={(e) => {
                        setPlayerX(e.target.value);
                        setSelectedSymbol("X");
                    }}
                />
                <input
                    type="text"
                    placeholder="Player 2 username"
                    value={playerO}
                    onChange={(e) => {
                        setPlayerO(e.target.value);
                        setSelectedSymbol("O");
                    }}
                />
            </div>
            <div className="bottom">
                <button className="xButton" onClick={() => handleSymbolSelection("X")}>
                    X
                </button>
                <button className="oButton" onClick={() => handleSymbolSelection("O")}>
                    O
                </button>
            </div>
        </div>
    );
};

export default Lobby;
