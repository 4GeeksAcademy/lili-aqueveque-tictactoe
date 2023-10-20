import React from 'react';
import Box from "./Box";

const Board = ({board, onClick}) => {
    return (
        <div className='board'>
            {board.map((value, idx) => {
                {/*Shouldnt be able to re-click on a square and change its value */}
                return <Box value={value} onClick={() => value === null && onClick(idx)}/>
            })}
            </div>
    )
}

export default Board;