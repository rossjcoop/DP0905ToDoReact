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
    	<li>
    	<input type="button" onClick={this.remove} className="checkbox" value="✕"/>
    	<span className={this.props.status}>{this.props.text}</span>
    	<button onClick={this.complete} className="checkbox">✓</button>
    	</li> 	   
    )
  }
}

export default TodoItem