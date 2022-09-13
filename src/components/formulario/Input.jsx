import './Input.css'
import React, {useState} from "react";

export default props => { 
    const [value, setValue] = useState('Inicial');

    function quandoMudar(e) {   
        setValue(e.target.value)   
    }

    return ( 
        <div className='Input'>
            <h2>{value}</h2>

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            <input value={value} type="text" onChange={quandoMudar} />
            <input value={value} type="text" readOnly />
            <input value={undefined} type="text"  />
        </div>

           
        </div>
    )
}