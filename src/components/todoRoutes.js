import React, { Component } from 'react'
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoBar from './todoBar';
import { changeView } from '../actions/todo'

class todoRoutes extends Component {
	componentWillReceiveProps(props) {
		const status = props.match.params.status || 'all'
		changeView(status)
	}

  render() {
    return (
    	<div className="containerMain">
    		<TodoForm />
          	<TodoList />
          	<TodoBar />
        </div>
      
    )
  }
}

export default todoRoutes