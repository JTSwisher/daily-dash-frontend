import React from 'react'

export default function Todo(props) {
    return (
        <li className="todo" key={props.index}>
            <p id="todo-title">{props.todo.body}</p>
            <p id="todo-created-date">-{new Date(props.todo.created_at).toLocaleDateString()}</p>
        </li>
    )
}