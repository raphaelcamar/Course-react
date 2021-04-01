import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Sorteio = props => {

    const {min, max} = props;

    const sort =  parseInt(Math.random() * (max - min)) + min

    return (
        <Card title='Sorteio de números' Purple>
            <div >
                <span>
                    <span>Resultado: </span>
                    <strong>{sort}</strong>
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

export default connect(mapStateToProps)(Sorteio)