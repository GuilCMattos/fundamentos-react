import React from "react";

export default props => { 
    const isPar = props.number % 2 === 0;
    return (
        <div>

        {isPar ? <span>Par {props.number}</span> : <span>Impar {props.number}</span>}
            
        </div>
    )
}