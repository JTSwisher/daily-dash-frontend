import React, { useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, createTodo } from './TodoActions'
import './Todo.css';
import { BsFilePlus, BsArrowUpDown } from 'react-icons/bs';
import TodoForm from './CreateTodoForm'
import DisplayTodos from './DisplayTodos'

export default function TodoContainer() {
    const [isFormDisplay, setIsFormDisplay] = useState(false)
    const [dateSort, setDateSort] = useState(false)
    const dispatch = useDispatch()

    const unsortedTodos = useSelector(state => state.todo.todos)
    const sortedNewestFirstTodos = [...unsortedTodos].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    let todos = dateSort ? sortedNewestFirstTodos : unsortedTodos;

    let currentUserId = localStorage.getItem('userId')

    const saveNewTodo = useCallback(
        (todo) => dispatch(createTodo(todo)),
        [dispatch]
    );

    let todoForm;
    if (isFormDisplay) todoForm = <TodoForm submit={saveNewTodo} updateFormDisplay={setIsFormDisplay}/>;
    
    useEffect(() => {
        dispatch(getTodos(currentUserId)) 
    }, [dispatch, currentUserId]);

    return (
        <>
            <div className="todo-header">
                <p id="header">Todos</p>
                <BsFilePlus id="plus-icon" onClick={() => setIsFormDisplay(!isFormDisplay)} />
                <hr id="hr"/>
            </div>
            { todoForm }
            <div className="todos-display">
                <DisplayTodos todos={ todos }/>
            </div>
            <BsArrowUpDown id="sort-icon" onClick={() => setDateSort(!dateSort)}/>
        </>
    )
}