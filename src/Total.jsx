import './Total.css'
import React from "react";

import Contador from './components/contador/Contador';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Family from './components/basics/Family';
import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import RadomNumber from "./components/basics/RadomNumber";
import Card from "./components/layout/Card";
import MemberFamily from './components/basics/MemberFamily';
import ListaProdutos from './components/repeticao/ListaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';



export default (props) => { 
        return ( 

                <div className="App">      
                <h1>Fundamentos React</h1>   
                 <div className="Cards">

                        <Card title="#13 - Contador" color="#424242"> 
                        <Contador inicialNumber={10} />
                        </Card> 

                        <Card title="#12 - Input" color="#e45f56"> 
                        <Input />
                        </Card> 

                         <Card title="#11 - Comunicação Indireta" color="#8BAD39"> 
                        <IndiretaPai />
                        </Card> 

                        <Card title="#10 - Comunicação Direta" color="#593230"> 
                        <DiretaPai />
                        </Card> 


                        <Card title="#09 - Condicional 2" color="#982395"> 
                        <UsuarioInfo user={{name: 'Guilherme'}}/>

                        {/* <UsuarioInfo user={{email: 'g@mattos.com.br'}}/> */}

                        </Card> 

                        <Card title="#08 - Condicional" color="#982395"> 
                        <ParOuImpar number={12}/>
                        </Card> 

                        <Card title="#07 - Lista produtos" color="#3A9AD9"> 
                        <ListaProdutos/>
                        </Card> 

                        <Card title="#06 - Lista alunos" color="#F22"> 
                        <ListaAlunos/>
                        </Card> 

                         <Card title="#05 - Família" color="#0120"> 
                         <Family sobrenome="Mattos" > 

                        <MemberFamily name="Guilherme" /> 
                        <MemberFamily name="Arthur" /> 
                        <MemberFamily name="Fernanda" />

                         
                         </Family>
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
        