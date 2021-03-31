import React, {Component} from 'react';
import './button.css';

export default props =>
<button className={`
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
`}onClick={_ => props.click && props.click(props.label)}>{props.label}</button>