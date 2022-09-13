
import React from "react";

import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import RadomNumber from "./components/basics/RadomNumber";
import Card from "./components/layout/Card";



export default props => 
        <div id="app">      

                    <h1>Fundamentos React</h1>   
                    <Card title="#04 - Desafio Aleatório"> 
                        <RadomNumber max={60} min={1} />
                    </Card> 

                    <Card title="#03 - Fragmento"> 
                         <Fragment />
                    </Card> 

                    <Card title="#02 - Aluno"> 
                          <ComParametro title="Situação Aluno" aluno="Pedro Silva" nota={6} />
                    </Card> 

                    <Card title="#01 - Primeiro"> 
                        <First/>
                    </Card> 
                    
                    

            </div>