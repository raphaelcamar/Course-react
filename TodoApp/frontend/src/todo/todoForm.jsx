import React, {Component} from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeDescription, search, add, clear} from './todoActions';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){

        const {add, search, description, clear} = this.props

        if(e.key === 'Enter'){
            e.shiftKey ? search : add(description)
        }else if (e.key === 'Escape'){
            clear();
        }
    }

    render(){

        const {add, search, description, clear} = this.props

        return (
            <div className="todoForm" role="form">
                <Grid cols="12 9 10">
                    <input type="text" id="description" className="form-control" 
                        placeholder="Adicione uma Tarefa" value={this.props.description} 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                    />
                </Grid>
                
                <Grid cols="12 3 2">
                <IconButton sty='primary' icon='plus' onClick={() => add(description)}></IconButton>
                <IconButton sty='info' icon='search' onClick={search}></IconButton>
                <IconButton sty='default' icon='close' onClick={clear}></IconButton>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => ({description : state.todo.description})

const mapDispatchToProps = dispatch => bindActionCreators({add, changeDescription, search, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);