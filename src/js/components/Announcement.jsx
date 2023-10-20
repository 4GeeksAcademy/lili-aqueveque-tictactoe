import React from "react";

const Announcement = ({ scores, xPlaying }) => {
    const { xScore, oScore } = scores;
    const currentPlayer = xPlaying ? "X" : "O";

    if (xScore > oScore) {
        return (
            <div className="announcement">
                <span>X Wins!</span>
            </div>
        )
    } else if (xScore < oScore) {
        return (
            <div className="announcement">
                <span>O Wins!</span>
            </div>
        )
    } else {
        return (
            <div className="announcement">
                <span>It is {currentPlayer} turn!</span>
            </div>
        )
    }
}

export default Announcement;