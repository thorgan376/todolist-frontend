import React, {useState, useEffect} from 'react';
// import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import Form from './Form';
import TodoList from './TodoList';
import './Content.css';
import axios from 'axios';

function MainContent() {
    const [inputTodo, setInputTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect( () => {
        filterHandler();
        console.log(filteredTodos);
    },[todos, status])

    useEffect(() => {
        const fetch = (async () => {
            var data = await axios.get('http://localhost:8080/task');
            setTodos(data.data);
        })
        fetch();
    },[])

    const filterHandler = () => {

        switch(status) {
            case 'completed':
                setFilteredTodos(todos => todos.filter(todo => todo.checked === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos => todos.filter(todo => todo.checked === false));
                break;
            default:
                console.log(3, filteredTodos);
                setFilteredTodos(todos);
                break;
        }
    }
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
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}/>
                
            <TodoList 
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}/>
        </div>
      );
    }
  
export default MainContent;