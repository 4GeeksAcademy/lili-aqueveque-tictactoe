import React, { useState } from "react";
import Announcement from "./Announcement";
import StartOverButton from "./StartOverButton";
import Board from "./Board";
import ticTacToeTitle from "../../img/tictactoe-title.png";

const Home = () => {

	const WIN_COMBOS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	const [board, setBoard] = useState(Array(9).fill(null)); //Board design
	const [xPlaying, setXPlaying] = useState(true); //x always starts the game
	const [scores, setScores] = useState({ xScore: 0, oScore: 0 }) //When one is > 0, it wins
	const [gameOver, setGameOver] = useState(false);

	const handleBoxClick = (boxIdx) => {
		const updatedBoard = board.map((value, idx) => {
			if (idx == boxIdx) {
				return xPlaying === true ? "X" : "O";
			} else {
				return value;
			}
		})

		const winner = checkWinner(updatedBoard);

		if (winner) {
			if (winner === "O") {
				let { oScore } = scores;
				oScore += 1
				setScores({ ...scores, oScore })
			} else {
				let { xScore } = scores;
				xScore += 1
				setScores({ ...scores, xScore })
			}
		}

		setBoard(updatedBoard);

		setXPlaying(!xPlaying);
	}

	const checkWinner = (board) => {
		for (let i = 0; i < WIN_COMBOS.length; i++) {
			const [x, y, z] = WIN_COMBOS[i];

			{/* 3 conditions:
				board[x] is truthy (not null, undefined, 0, false, or an empty string).
				board[x] is equal to board[y].
				board[y] is equal to board[z]. 
			*/}
			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				setGameOver(true);
				return board[x];
			}
		}
	}

	return (
		<div className="container text-center">
			<div className="menu">
				<img className="titleBrand" src={ticTacToeTitle} alt="Tic Tac Toe" />
				<Announcement scores={scores} xPlaying={xPlaying} />
				<StartOverButton gameOver={gameOver} setGameOver={setGameOver} setBoard={setBoard} />
				<Board board={board} onClick={handleBoxClick} />
			</div>
		</div>
	);
};

export default Home;