import React, { Component } from 'react'
import { removeTodo, completeTodo } from '../actions/todo'



class TodoItem extends Component {

	remove = (e) => {
		removeTodo(this.props.id)
	}

	complete = (e) => {
		completeTodo(this.props.id)
	}


  render() {
    return (
    	<li className={this.props.status}>
    	<input type="checkbox" onClick={this.remove} className="checkbox" />
    	{this.props.text}
    	<button onClick={this.complete}>Done!</button>
    	</li> 	   
    )
  }
}

export default TodoItem