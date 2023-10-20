import React, { useState } from "react";
import Announcement from "./Announcement";
import StartOverButton from "./StartOverButton";
import Tile from "./Tile";
import Board from "./Board";
import ticTacToeTitle from "../../img/tictactoe-title.png";

const Home = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xPlaying, setXPlaying] = useState(true); //x always starts the game

	const handleBoxClick = (boxIdx) => {
		const updatedBoard = board.map((value, idx) => {
			if (idx == boxIdx) {
				return xPlaying === true ? "X" : "O";
			} else {
				return value;
			}
		})

		setBoard(updatedBoard);

		setXPlaying(!xPlaying);
	}

	return (
		<div className="container text-center">
			<div className="menu">
				<img className="titleBrand" src={ticTacToeTitle} alt="Tic Tac Toe" />
				<Announcement />
				<StartOverButton />
				<Board board={board} onClick={handleBoxClick} />
			</div>
		</div>
	);
};

export default Home;