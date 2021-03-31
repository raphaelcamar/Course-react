import React from 'react';

export default (props) =>{

    const isPar = props.numero % 2 === 0
    return (
        <div>
            <p>Número selecionado:{ props.numero}</p>
            {isPar ? 
                <span>Par</span> :  
                <span>Impar</span>
            }
            
            
        </div>
    )
}