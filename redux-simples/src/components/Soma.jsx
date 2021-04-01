import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Soma =  props => {

    const {min, max} = props

    return (
        <Card title='Soma dos números' Blue>
            <div >
                <span>
                        <span>Resultado: </span>
                        <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)