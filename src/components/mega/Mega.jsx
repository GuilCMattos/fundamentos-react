import './Mega.css'
import React, {useState} from "react";

export default props => { 


function gerarNumberNaoContido(min, max, array) { 
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? 
    gerarNumberNaoContido(min, max, array) : 
    aleatorio
}

function gerarNumeros(qtde) { 
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums)=> { 
        const newNumber = gerarNumberNaoContido(1, 60, nums);
        return [...nums, newNumber]
    }, [])
    .sort((n1, n2)=> n1 - n2)
  

    return numeros
}
   
    const [qtde, setQtde] = useState(props.qtde || 6)
    const inicialNumbers = qtde
    const [number, setNumber] = useState(Array(inicialNumbers).fill(0))



    return (
        <div class="Mega">
            <h2>Números sorteados</h2>
            <h3>{number.join(' ')}</h3>
            <div>
                <label> Quantidade de número:</label>
                <input min={6} max={17} type="number" value={qtde} 
                onChange={e=> {
                    setQtde(+e.target.value)
                    setNumber(gerarNumeros(+e.target.value))
                    } }/>
            </div>
           
            <button onClick={_=> setNumber(gerarNumeros(qtde))}>
                Gerar números
                </button>
        </div>
    )
}