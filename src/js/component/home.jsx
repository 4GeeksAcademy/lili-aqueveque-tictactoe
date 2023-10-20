import React, { useState } from "react";
import Announcement from "./Announcement";
import StartOverButton from "./StartOverButton";
import Tile from "./Tile";


//include images into your bundle
import ticTacToeTitle from "../../img/tictactoe-title.png";

//create your first component
const Home = () => {
	const [gameBoard, setGameBoard] = useState([
		' ', ' ', ' ',
		' ', ' ', ' ',
		' ', ' ', ' '
	]);
	return (
		<div className="container text-center">
			<div className="menu">
				<img className="titleBrand" src={ticTacToeTitle} />
				{/*First draw the components as they will go in the page*/}
				<Announcement />
				<StartOverButton />
				<Tile />
			</div>
			{/*{gameBoard.map((value, i) => (
				<Tile key={i} />
			))} */}
		</div>
	);
};

export default Home;
