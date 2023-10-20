import React, { useState } from "react";
import Announcement from "./Announcement";
import StartOverButton from "./StartOverButton";
import Tile from "./Tile";
import Board from "./Board";
import ticTacToeTitle from "../../img/tictactoe-title.png";

const Home = () => {
	const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]
	return (
		<div className="container text-center">
			<div className="menu">
				<img className="titleBrand" src={ticTacToeTitle} alt="Tic Tac Toe" />
				<Announcement />
				<StartOverButton />
				<Board board={board} onClick={null} />
			</div>
		</div>
	);
};

export default Home;