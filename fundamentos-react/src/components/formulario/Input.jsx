import './input.css';
import React, { useState } from 'react';

export default props =>{

    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e){
        setValor(e.target.value);
    }

    return (
        <div>
            <h2>{valor}</h2>
            <div style={{display : 'flex', flexDirection : 'column'}}>
            <input type="text" value={valor} onChange={quandoMudar}/>
            <input type="text" value={valor} readOnly/>
            <input type="text" value={undefined}/>
           </div>
        </div>
    )
}