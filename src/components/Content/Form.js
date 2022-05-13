import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import MainContent from './MainContent';
import './Content.css'

const Form = () => {
    const [title, setTitle] = useState();

    return(
        <form>
            <input type="text" className="todo-input" />
                <button className="todo-button" type="submit">
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
