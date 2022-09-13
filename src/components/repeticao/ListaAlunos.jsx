import React from "react";
import alunos from "../../data/alunos";

const alunosLI = alunos.map((aluno) => { 
    return ( 
    <li key={aluno.id}> 
        {aluno.id}. {aluno.nome} nota: {aluno.nota} 
    </li>
    )
})

export default props => { 
    return(
        <div>
            <ul>
                {alunosLI}
            </ul>
        </div>
    )
}