import React from 'react';

export default (props) =>{

    const min = 32
    const max = 70

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            {/* <div>{props.nome}</div>
            <div>{props.idade}</div>
            <div>{props.nerd ? 'Verdadeiro' : 'Falso'}</div> */}
            <div>
                Filho
            </div>
            <button onClick={
                function(e){
                    props.quandoClicar('João', gerarIdade(), true)
                }
            }>Fornecer Informações</button>
        </div>
    )
}