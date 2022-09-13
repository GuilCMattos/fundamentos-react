import './Contador.css'
import React, { Component } from "react";

import Display from './Display';
import Buttons from './Buttons';
import StepForm from './StepForm';

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

    setStep = (newStep) => { 

        this.setState({
            step: newStep,
        })

    }
    

    render() { 
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                
                <Display number={this.state.number} />

                <div>
                   <StepForm step={this.state.step} setStep={this.setStep} />
                </div>

                <Buttons inc={this.inc} dec={this.dec} />

               
            </div>
        )
    }


}