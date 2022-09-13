import React from "react";

import IndiretaFilho from "./IndiretaFilho";

export default props => { 
    let name = '?';
    let age = 0;
    let nerd = false;

    function fornecerInformacoes(nameParam, ageParam, nerdParam) { 
        name = nameParam;
        age = ageParam
        nerd = nerdParam;
    }

    return (
        <div>
            <span>{name} </span>
            <span><strong>{age} </strong></span> 
            <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            <IndiretaFilho Clicou={fornecerInformacoes}/>
        </div>
    )
}