import React from 'react';



const UseCallBackButtons = props =>{


    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

//Renderiza o componente APENAS se as propriedades passadas forem diferentes
export default React.memo(UseCallBackButtons);