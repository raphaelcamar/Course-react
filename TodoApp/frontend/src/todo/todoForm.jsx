import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {

    const keyHandler = (e)=>{
        if(e.key === 'Enter'){
            e.shiftKet ? props.handleSearch() : props.handleAdd()
        }else if (e.key === 'Escape'){
            props.handleClear();
        }
    }

    return (
        <div className="todoForm" role="form">
    
            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control" 
                    placeholder="Adicione uma Tarefa" value={props.description} 
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                />
            </Grid>
            
            <Grid cols="12 3 2">
               <IconButton sty='primary' icon='plus' onClick={props.handleAdd}></IconButton>
               <IconButton sty='info' icon='search' onClick={props.handleSearch}></IconButton>
               <IconButton sty='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}