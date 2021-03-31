import React from 'react';

export default (props) =>{
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min
    return(
        <>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor minimo</strong> {props.min}</p>
            <p><strong>Valor Maximo</strong> {props.max}</p>
            <p><strong>Valor Escolhido</strong> {aleatorio}</p>
        </>
    )
}