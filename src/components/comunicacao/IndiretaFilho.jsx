import React from "react";

export default props => { 
    const cb = props.Clicou
   
    const gerarAge = () => parseInt(Math.random() * (20)) + 50;

    const gerarNerd = () => Math.random() > 0.5;

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                _ => { cb('João', gerarAge(), gerarNerd())
                }
            }>Fornecer informações</button>
        </div>
    )
}