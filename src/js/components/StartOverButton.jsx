import React from "react";

const StartOverButton = ({ setGameOver, setBoard, setScores, setXPlaying }) => {
    const resetGame = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));
        setScores({ xScore: 0, oScore: 0 });
        setXPlaying(true);
    };

    return (
        <button className="startOver" onClick={resetGame}>
            Start Over
        </button>
    );
};

export default StartOverButton;
