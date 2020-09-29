import React from 'react'
import Todo from './Todo'

export default function DisplayTodos(props) {
    let todos = props.todos.map((e, i) => <Todo todo={e} index={i} /> )
    return (
        <ul>
            { todos }
        </ul>
    )
}