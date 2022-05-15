import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import Form from './Form';
import TodoList from './TodoList';
import './Content.css';

function MainContent() {
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);
    // const addTask = (task) => {
    //     setTasks([...tasks, task]);
    // }
    return (
        <div className="agenda_view">
            <header className='view_header'>
                <div className='view_header__content'>
                    <h1>
                      <span className='simple_title_today'>Today {inputText}</span>
                      <small className='simple_title_date'>{new Date().toDateString() + ''}</small>
                    </h1>
                </div>
            </header>
            <Form setInputText={setInputText} tasks={tasks} setTasks={setTasks}/>
            <TodoList/>
        </div>
      );
    }
  
export default MainContent;