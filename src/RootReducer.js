import { combineReducers } from 'redux';
import TodoReducer from './todos/TodoReducer'

export default combineReducers({
    todo: TodoReducer,
})