import React, { useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, createTodo } from './TodoActions'
import './Todo.css';
import { BsFilePlus } from 'react-icons/bs';
import TodoForm from './CreateTodoForm'
import DisplayTodos from './DisplayTodos'

export default function TodoContainer() {
    const [formDisplay, setFormDisplay] = useState(false)
    const dispatch = useDispatch();
    const todosArray = useSelector(state => state.todo.todos)

    const saveNewTodo = useCallback(
        (todo) => dispatch(createTodo(todo)),
        [dispatch]
    );

    let todoForm;
    if (formDisplay) todoForm = <TodoForm  submit={saveNewTodo} updateFormDisplay={setFormDisplay}/>;
    
    useEffect(() => {
        dispatch(getTodos(1))
    }, [dispatch]);

    return (
        <>
        <div className="todo-header">
            <p id="header">Todos</p>
            <BsFilePlus id="plus-icon" onClick={() => setFormDisplay(!formDisplay)} />
            <hr id="hr"/>
        </div>
        { todoForm }
        <div className="todos-display">
            <DisplayTodos todos={todosArray}/>
        </div>
        </>
    )
}