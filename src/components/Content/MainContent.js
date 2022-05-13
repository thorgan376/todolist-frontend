import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import Edit from './Edit';
import './Content.css';

function MainContent() {
    const [tasks, setTasks] = useState(0);
    const [selectedTask, setSelectedTask] = useState(0);
    const addTask = (task) => {
        setTasks([...tasks, task]);
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

        </div>
      );
    }
  
export default MainContent;