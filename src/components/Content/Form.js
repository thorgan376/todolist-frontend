import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import MainContent from './MainContent';
import './Content.css'

const Form = ({inputTodo, setInputTodo, setTodos, todos}) => {
    //Javascript Code And Function here
    const textHandler = (e) => {
        console.log(e.target.value);
        setInputTodo(e.target.value);
    }
    const submitTodoHandler = (event) => {
        event.preventDefault();
        setTodos([...todos, {text:inputTodo, completed: false, id: Math.random()}]
            );
        setInputTodo("");
    }

    return(
        <form>
            <input value={inputTodo} onChange={textHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i> Add Task
                </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;
