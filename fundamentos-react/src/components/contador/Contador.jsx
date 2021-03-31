import React, { useState } from 'react';
import './contador.css';
import Display from './Display';
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends React.Component{

    state ={
        numero : this.props.numeroInicial || 0,
        passo : this.props.passoInicial || 5,

    }

    // constructor(props){
    //     super(props)

    //     this.inc = this.inc.bind(this);
    // }

    inc = () =>{
        this.setState({numero : this.state.numero + this.state.passo})
    }

    dec = () =>{
        this.setState({numero : this.state.numero - this.state.passo})
    }
    setPasso = (novoPasso) =>{
        this.setState({passo : novoPasso})
    }

    render(){
        return(
            <div className="contador">
                <h2>Contador</h2>
                <Display  numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
            </div>
        )
    }
}