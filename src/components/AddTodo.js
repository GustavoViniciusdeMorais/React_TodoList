import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    sendData = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    listening = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.sendData} style={{display: 'flex'}}>
                <input 
                type="text" 
                style={{flex: '10', padding: '5px'}} 
                name="title" 
                placeholder="if you want to add something, feel free to do it"
                onChange={this.listening}
                />
                <input type="submit" value="Add" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
