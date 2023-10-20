import React from "react";

const StartOverButton = ({ setGameOver, setBoard, setXPlaying }) => {
    const resetGame = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));
        setXPlaying(true);
    };

    return (
        <button className="startOver" onClick={resetGame}>
            Start Over
        </button>
    );
};

export default StartOverButton;
