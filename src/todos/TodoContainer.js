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
    
    let unsortedTodos = useSelector(state => state.todo.todos)
    let sortedTodosNewestFirst = [...unsortedTodos].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    let todos = dateSort ? sortedTodosNewestFirst : unsortedTodos;

    const dispatch = useDispatch()
    
    const saveNewTodo = useCallback(
        (todo) => dispatch(createTodo(todo)),
        [dispatch]
    );

    let currentUserId = localStorage.getItem('userId')
    useEffect(() => {
        dispatch(getTodos(currentUserId)) 
    }, [dispatch, currentUserId]);

    let todoForm;
    if (isFormDisplay) todoForm = <TodoForm submit={saveNewTodo} updateFormDisplay={setIsFormDisplay}/>;
    
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