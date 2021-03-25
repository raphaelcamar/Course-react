import React from 'react';
import {useParams} from 'react-router-dom'

const Param = props =>{

    const {id} = useParams()

    return(
        <div className="Param">
        <h1>Componente Param</h1>
        <h1>Valor :{id}</h1>
        
        </div>
    )
}

export default Param;