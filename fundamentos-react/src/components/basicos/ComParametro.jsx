import React from 'react'

export default function ComParametro(params){
    const {titulo, subtitulo} = params;

    //Dáerro, pois as propriedades são somente leitura
    // props.subtitulo = 'Alterando'
    return (
        <div>
            <div>{titulo}</div>
            <div>{subtitulo}</div>
        </div>
    )
}