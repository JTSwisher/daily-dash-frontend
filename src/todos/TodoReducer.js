const todoReducer = (state= {todos: [], requesting: false}, action) => {
    switch(action.type) {
        case "CREATING_TODO":
            return {...state, todos: [...state.todos], requesting: true}
        case "TODO_CREATED": 
            return {...state, todos: [...state.todos, action.todo], requesting: false}
        case "FETCHING_TODOS":
            return {...state, todos: [], requesting: true}
        case "TODOS_RECEIVED":
            return {...state, todos: [...state.todos].concat(action.todos), requesting: false}
        case "DELETING_TODO":
            return {...state, todos: [...state.todos], requesting: true}
        case "TODO_DELETED": //filter out todo based on id, return remaining todos
            const todos = state.todos.filter(todo => todo.id !== action.id);
            return { todos , requesting: false }
        default:
            return state;
    }
}

export default todoReducer;