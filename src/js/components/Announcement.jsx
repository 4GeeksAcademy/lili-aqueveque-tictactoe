import React from "react";

const Announcement = ({ scores, xPlaying }) => {
    const { xScore, oScore } = scores;
    const currentPlayer = xPlaying ? "X" : "O";

    return (
        <div className="announcement">
            <span>It is {currentPlayer} turn!</span>
        </div>
    )
}

export default Announcement;