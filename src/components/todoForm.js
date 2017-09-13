import React, { Component } from 'react'
import { addTodo } from '../actions/todo'

class TodoForm extends Component {
	state = {
		todoInput: ''
	}

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	handleSubmit = (e) => {
		e.preventDefault()
		addTodo(this.state.todoInput)
		this.setState({
			todoInput: ''
		})
		
	}



  render() {
    return (
    	<div className="container">
    		<div className="todoForm">
	    		<form onSubmit={this.handleSubmit}>
	    			<input type="text" name="todoInput" onChange={this.handleInput} value={this.state.todoInput} placeholder="Add a Task" />
	    			<button type="submit" className="checkbox">→</button>
	    		</form>
    		</div>
    	</div>     
    )
  }
}

export default TodoForm