import React, { useState} from 'react';
import './Todo.css'
import { BsPlusCircle } from 'react-icons/bs'
import TodoForm from './CreateTodoForm'

export default function TodoContainer() {
    const [formDisplay, setFormDisplay] = useState(false)

    let createTodo = (todo) => { //temp will be handled by redux dispatch
        fetch("http://localhost:3001/api/v1/users/1/todos", {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({todo: todo})
        })
        .then(res => res.json())
        .then(todo => console.log(todo))
    }

    let todoForm;
    if (formDisplay) todoForm = <TodoForm submit={createTodo}/>;

    return (
        <>
        <p id="header">Todos</p>
        <BsPlusCircle id="plus-icon" onClick={() => setFormDisplay(!formDisplay)} />
        <hr id="hr"/>
        { todoForm }
        </>
    )
}