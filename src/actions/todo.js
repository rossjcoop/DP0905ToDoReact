import store from '../store'
import shortid from 'shortid'


export function addTodo(todoInput) {
	store.dispatch({
		type: 'ADD_TODO',
		todo: {
			text: todoInput,
			id: shortid.generate(),
			status: 'pending'
		}
	})
}



export function removeTodo(todoId) {
	store.dispatch({
		type: 'REMOVE_TODO',
		id: todoId 
	})
}



export function completeTodo(todoId) {
	store.dispatch({
		type: 'COMPLETE_TODO',
		id: todoId
	})
}


export function clearComplete() {
	store.dispatch({
		type: 'CLEAR_COMPLETE'
	})
}


export function changeView(newView) {
	store.dispatch({
		type: 'CHANGE_VIEW',
		view: newView
	})
}