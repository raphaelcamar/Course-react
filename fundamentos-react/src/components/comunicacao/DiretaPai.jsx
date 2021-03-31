import React from 'react';
import DiretaFilha from './DiretaFilha';

export default (props) =>{
    return (
        <div>
            <DiretaFilha nome="Filho 1" idade={20} nerd={true}/>
            <DiretaFilha nome="Filho 2" idade={15} nerd={true}/>
        </div>
    )
}