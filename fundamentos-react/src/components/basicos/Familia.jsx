import React, { cloneElement } from 'react';
import FamiliaMembro from './FamiliaMembro'

export default props =>{
    return (
        <div>
            {
                props.children.map((el, i) => {
                    return cloneElement(el, {...props, key : i})
                })
            }
            
        </div>
    )
}