import React, { useState} from 'react';
import './Todo.css'
import { BsPlusCircle } from 'react-icons/bs'
import CreateTodoForm from './CreateTodoForm'

export default function TodoContainer() {
    const [formDisplay, setFormDisplay] = useState(false)

    let todoForm;
    if (formDisplay) todoForm = <CreateTodoForm submit={createTodo}/>;

    return (
        <>
        <p id="header">Todos</p>
        <BsPlusCircle id="plus-icon" onClick={() => setFormDisplay(!formDisplay)} />
        <hr id="hr"/>
        { todoForm }
        </>
    )
}