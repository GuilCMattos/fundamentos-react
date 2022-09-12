import React from "react"

export default function ComParametro({title, aluno, nota}) { 
    const status = nota >= 7 ? 'Aprovado' : 'de Recuperação';
    return ( 
        <div>
            <h2>{title}</h2>
            <p><strong>{aluno}</strong> tem nota <strong>{nota}</strong> e está {status} </p>
        </div>
    )
}