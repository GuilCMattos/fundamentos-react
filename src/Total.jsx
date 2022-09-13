import './Total.css'
import React from "react";


import Family from './components/basics/Family';
import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import RadomNumber from "./components/basics/RadomNumber";
import Card from "./components/layout/Card";



export default (props) => { 
        return ( 

                <div className="App">      
                <h1>Fundamentos React</h1>   
        <div className="Cards">

                         <Card title="#05 - Família" color="#0120"> 
                         <Family sobrenome="Mattos" />
                        </Card> 

                
                    <Card title="#04 - Desafio Aleatório" color="#090"> 
                        <RadomNumber max={60} min={1} />
                    </Card> 

                    <Card title="#03 - Fragmento" color="#00F"> 
                         <Fragment />
                    </Card> 

                    <Card title="#02 - Aluno" color="#F00"> 
                          <ComParametro title="Situação Aluno" aluno="Pedro Silva" nota={6} />
                    </Card> 

                    <Card title="#01 - Primeiro" color="#F80"> 
                        <First/>
                    </Card> 

        </div>  

            </div>
        
        )
}
        