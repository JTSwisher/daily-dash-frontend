import React, { Component } from 'react'
import './Todo.css'
import { BsPlusCircle } from 'react-icons/bs'

class TodoFrom extends Component {

    state = {
        body: '', 
        user_id: 1
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state)
        this.props.updateFormDisplay(false)
        this.setState({body: '', user_id: 1})
    }

    render(){
        return(
            <div className="todo-form">
            <form id="todo-form "onSubmit={e => this.handleSubmit(e)}>
                <input id="todo-input" type="text-area" placeholder="New Todo..." name="body" value={ this.state.body } onChange={e => this.handleChange(e)}></input>
                <button type="submit" id="button-wrapper"><BsPlusCircle id="form-submit-icon" /></button>
            </form>
        </div>
        )
    }
        
}

export default TodoFrom