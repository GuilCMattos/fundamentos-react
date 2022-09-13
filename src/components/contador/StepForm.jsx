import React from "react";

export default props => { 
    return(
        <div>
             <label htmlFor="">Passo: </label>
                    <input id="step" type="number" value={props.step} 
                    onChange= {e => props.setStep(+e.target.value)} />
        </div>
    )
}