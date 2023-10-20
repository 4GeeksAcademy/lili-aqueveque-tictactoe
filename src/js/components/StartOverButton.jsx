import React from "react";

const StartOverButton = ({ gameOver, setGameOver, setBoard }) => {
    const resetGame = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));
    };
    
    return (
        <button className="startOver" onClick={resetGame}>Start Over</button>
    );
};

export default StartOverButton;
