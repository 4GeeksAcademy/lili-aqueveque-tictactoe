import React, { useState } from "react";

const Tile = (props) => {
    const [value, setValue] = useState(props.value);

    const tileClick = () => {
        // Handle tile click logic here if needed
        console.log("Tile clicked at location:", props.loc);
    };

    return (
        <div className={"tile " + props.loc} onClick={tileClick}>
            <p>{value}</p>
        </div>
    );
};

export default Tile;

{/*                
<i class="fa-solid fa-x"></i>
<i class="fa-solid fa-o"></i>
*/}