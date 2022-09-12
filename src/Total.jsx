
import React from "react";

import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import Fragment from "./components/basics/Fragment";
import RadomNumber from "./components/basics/RadomNumber";



export default props => 
        <div id="app">      
                    <h1>Fundamentos React</h1>    
                    <Fragment />
                    <ComParametro title="Situação Aluno" aluno="Pedro Silva" nota={6} />
                    <First/>
                    <RadomNumber max={100} min={10} />

            </div>