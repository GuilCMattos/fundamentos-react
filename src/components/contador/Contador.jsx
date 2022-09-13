import './Contador.css'
import React, { Component } from "react";

export default class Contador extends Component { 

    state = { 
        number: this.props.inicialNumber || 0,
        step: this.props.stepNumber || 5,
    }

    inc = () => { 
        this.setState({ 
            number: this.state.number + this.state.step
        });
    }

    dec = () => { 
        this.setState({ 
            number: this.state.number - this.state.step
        });
    }

    setStep = (e) => { 

        this.setState({
            step: +e.target.value,
        })

    }
    

    render() { 
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>

                <div>
                    <label htmlFor="">Passo: </label>
                    <input id="step" type="number" value={this.state.step} onChange={this.setStep} />
                </div>

               <button onClick={this.inc}> +</button>
               <button onClick={this.dec}> -</button>
            </div>
        )
    }


}