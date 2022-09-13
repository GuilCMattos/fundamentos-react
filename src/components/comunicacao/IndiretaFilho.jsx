import React from "react";

export default props => { 
    const cb = props.Clicou
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                _ => { cb('João', 53, true)
                }
            }>Fornecer informações</button>
        </div>
    )
}