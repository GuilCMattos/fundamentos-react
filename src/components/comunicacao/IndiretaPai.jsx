import React, {useState} from "react";

import IndiretaFilho from "./IndiretaFilho";

export default props => { 
    let [name, setName] = useState('?');
    let [age, setAge] = useState(0);
    let [nerd, setNerd] = useState(false);

    function fornecerInformacoes(name, age, nerd) { 
        setName(name);
        setAge(age);
        setNerd(nerd)
    
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