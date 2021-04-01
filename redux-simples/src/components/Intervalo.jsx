import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux';

import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'

const Intervalo =  props => {

    const {min, max} = props;
    // props.alterarMinimo(1000000)

    return (
        <Card title='Intervalo de números' Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(props){
    return {
        min : props.numeros.min,
        max : props.numeros.max
    }
}

function mapDispatchToProp(dispatch){
    return {
        alterarMinimo(novoNumero){
            //action creator -> action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo)