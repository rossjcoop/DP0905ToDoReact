

const initialState = {
	todos: [],
	view: 'all'
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'ADD_TODO':
			return {...state, todos:[action.todo,...state.todos]}

		case 'REMOVE_TODO':
            return {...state, todos: state.todos.filter(todoItem => todoItem.id !== action.id)}

        case 'COMPLETE_TODO':
            return {...state, todos: state.todos.map( todoItem => {
            	if(todoItem.id === action.id) {
            		return {...todoItem, status: 'completed'}
            	} else {
            		return todoItem
            	}
            })}

        case 'CLEAR_COMPLETE':
        	return {...state, todos: state.todos.filter(todo => todo.status !== 'completed')}

        case 'CHANGE_VIEW':
        	return {...state, view: action.view}

        default:
            return state
    }
}
		




