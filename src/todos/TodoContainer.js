import React from 'react';
import './Todo.css'
import { BsPlusCircle } from 'react-icons/bs'

export default function TodoContainer() {

    //create state set to null when true render form to create new todo
    // add icon to change state 

    return (
        <>
        <p id="header">Todos</p>
        <BsPlusCircle id="plus-icon"/>
        <hr id="hr"/>
        </>
    )
}