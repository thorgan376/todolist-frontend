import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import Form from './Form';
import TodoList from './TodoList';
import './Content.css';

function MainContent() {
    const [inputTodo, setInputTodo] = useState("");
    const [todos, setTodos] = useState([]);
    // const addTodo = (todo) => {
    //     setTodos([...todos, todo]);
    // }
    return (
        <div className="agenda_view">
            <header className='view_header'>
                <div className='view_header__content'>
                    <h1>
                      <span className='simple_title_today'>Today</span>
                      <small className='simple_title_date'>{new Date().toDateString() + ''}</small>
                    </h1>
                </div>
            </header>
            <Form
            inputTodo={inputTodo} 
            setInputTodo={setInputTodo}
            todos={todos}
            setTodos={setTodos}/>
            <TodoList 
            setTodos={setTodos}
            todos={todos}/>
        </div>
      );
    }
  
export default MainContent;