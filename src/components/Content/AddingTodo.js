import React, {useState} from "react";

const AddingTodo = ({text, todo, todos, setTodos}) =>{
    //Events: Complete, delete todo,...
    const completeHandler = () => {
        setTodos(todos => todos.map(item => {
            if(item.id === todo.id){
                return {...item, completed: !todo.completed};
            }
            return item;
        }));
    }

    const deleteHandler = () => {
        setTodos(todos => todos.filter((item) => item.id !== todo.id));
    }
    return(
        <div className="todo">
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default AddingTodo;