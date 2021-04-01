import React from 'react';
import Card from './Card';
import {connect} from 'react-redux';

const Media = props => {

    const{min, max} = props

    return (
        <Card title='Média dos números' Green>
            <div >
                <span>
                        <span>Resultado: </span>
                        <strong>{(max + min) / 2}</strong>
                    </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min : state.numeros.min,
        max : state.numeros.max
    }
}

export default connect(mapStateToProps)(Media);