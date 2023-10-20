import React from 'react';
import Box from "./Box";

const Board = ({board, onClick}) => {
    return (
        <div className='board'>
            {board.map((value, idx) => {
                return <Box value={value} onClick={() => onClick(idx)}/>
            })}
            </div>
    )
}

export default Board;