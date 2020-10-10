import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function Todo(props) {
    return (
        <li className="todo" >
            <FaCheck id="todo-complete-icon"/>
            <p id="todo-title">{props.todo.body}</p>
            <p id="todo-created-date">-{new Date(props.todo.created_at).toLocaleDateString()}</p>
        </li>
    )
}