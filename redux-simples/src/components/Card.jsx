import React from 'react';
import './Card.css';

function getColor(props){
    if(props.Red) return 'Red'
    if(props.Green) return 'Green'
    if(props.Blue) return 'Blue'
    if(props.Purple) return 'Purple'
  
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`} >
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}