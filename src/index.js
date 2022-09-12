import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First';
import ComParametro from './components/basics/ComParametro';

const el = document.getElementById('root');


ReactDOM.render(
<div>
    <First/>
    <ComParametro title="Situação Aluno" aluno="Pedro Silva" nota={6} />

    


    </div>, 
el)