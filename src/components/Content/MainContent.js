import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import axios from 'axios';
import Edit from './Edit';

function MainContent() {
    const [tasks, setTasks] = useState(0);
    const [selectedTask, setSelectedTask] = useState(0);

    useEffect(
        const resp = (async() => {
            const data = await axios.get('http://localhost:8080');
            console.log(data);
          })
          resp();
        },[]
    );
    const addTask = (task) => {
        setTask([...tasks, task]);
    }
    return (
        <div>
          
        </div>
      );
    }
export default MainContent;