import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todoCompleted } from './TodoActions'
import { FaCheck } from 'react-icons/fa'

export default function Todo(props) {
    const dispatch = useDispatch();
    const {todo} = props

    const saveNewTodo = useCallback(
        (todo) => dispatch(todoCompleted(todo.user_id, todo.id)),
        [dispatch]
    );

    return (
        <li className="todo" >
            <FaCheck id="todo-complete-icon" onClick={ () => saveNewTodo(todo)}/>
            <p id="todo-title">{props.todo.body}</p>
            <p id="todo-created-date">-{new Date(props.todo.created_at).toLocaleDateString()}</p>
        </li>
    )
}