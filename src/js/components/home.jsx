//Components
import React, { useState } from "react";

import Announcement from "./Announcement";
import StartOverButton from "./StartOverButton";
import Board from "./Board";
//image & others
import ticTacToeTitle from "../../img/tictactoe-title.png";
import Lobby from "./Lobby";

const Home = () => {
	const WIN_COMBOS = [ //8 possible winning combos
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xPlaying, setXPlaying] = useState(true);
	const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
	const [gameOver, setGameOver] = useState(false);
	const [players, setPlayers] = useState({ playerX: "", playerO: "" });

	const handleJoinGame = (playerX, playerO) => {
		setPlayers({ playerX, playerO });
	};

	const resetGame = () => {
		setGameOver(false);
		setBoard(Array(9).fill(null));
		setXPlaying(true); // Reset player turn to X
		setScores({ xScore: 0, oScore: 0 }); // Reset scores
	};

	const handleBoxClick = (boxIdx) => {
		if (board[boxIdx] || gameOver) return; // If the box is already filled or the game is over, do nothing

		const updatedBoard = board.map((value, idx) => (idx === boxIdx ? (xPlaying ? "X" : "O") : value));

		const winner = checkWinner(updatedBoard);

		if (winner) {
			if (winner === "O") {
				setScores((prevScores) => ({ ...prevScores, oScore: prevScores.oScore + 1 }));
			} else {
				setScores((prevScores) => ({ ...prevScores, xScore: prevScores.xScore + 1 }));
			}
			setGameOver(true);
		} else {
			setXPlaying(!xPlaying);
		}

		setBoard(updatedBoard);
	};

	const checkWinner = (board) => {
		for (let i = 0; i < WIN_COMBOS.length; i++) {
			const [x, y, z] = WIN_COMBOS[i];
			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				return board[x];
			}
		}
		return null; // Return null if there is no winner
	};

	return (
		<div className="container text-center">
			<div className="menu">
				<img className="titleBrand" src={ticTacToeTitle} alt="Tic Tac Toe" />
				{!players.playerX || !players.playerO ? (
					<Lobby onJoinGame={handleJoinGame} />
				) : (
					<>
						<Announcement scores={scores} xPlaying={xPlaying} gameOver={gameOver} />
						<StartOverButton setGameOver={setGameOver} setBoard={setBoard} setScores={setScores} setXPlaying={setXPlaying} />
						<Board board={board} onClick={handleBoxClick} />
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
