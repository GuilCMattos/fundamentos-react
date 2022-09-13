import React, {useState} from "react";

export default props => { 

    let [value, setValue] = useState(0)

    function change() { 
        
    }

    return (
        <div>
            <h2>Números sorteados</h2>
            <h3>{}</h3>
            <h2>Selecione a quantidade:</h2>
            <input value={value} type="number" onChange={change} />
            <button></button>
        </div>
    )
}