import React from 'react';
// import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import './Content.css';
import axios from 'axios';

const Form = ({inputTodo, setInputTodo, setTodos, todos, status, setStatus}) => {
    //Javascript Code And Function here
    const textHandler = (event) => {
        // console.log(event.target.value);
        setInputTodo(event.target.value);
        // console.log(inputTodo);
    }
    const submitTodoHandler = (event) => {
        event.preventDefault();
        // setTodos([...todos, {body:inputTodo, completed: false}]
        //     );
        // setInputTodo("");

        const fetch = (async() => {
            const resp = await axios.post('http://localhost:8080/task/', {
                title: inputTodo,
                body: inputTodo
            })
            setTodos([...todos, resp.data]);
            setInputTodo("");
        })
        fetch();
    }
    const statusHandler = (event) => {
        setStatus(event.target.value);
    }

    return(
        <form>
            <input value={inputTodo} onChange={textHandler} type="text" className="todo-input"/>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i> Add Task
                </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;
