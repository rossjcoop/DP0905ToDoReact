import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './todoItem'

class TodoList extends Component {
	
  render() {
    return (
    	<div className="container">
    		{this.props.todos.map(todo => (
    			<TodoItem key={todo.id} {...todo} />
    		))}	
    	</div>     
    )
  }
}


function mapStateToProps(appState) {
	if (appState.view === 'all') {
		return {
			todos: appState.todos
		}

	} else if (appState.view === 'pending') {
			return {
				todos: appState.todos.filter(todo => todo.status === 'pending')
			}

	} else if (appState.view === 'completed') {
			return {
				todos: appState.todos.filter(todo => todo.status === 'completed')
			}

	}				
}


export default connect(mapStateToProps)(TodoList)