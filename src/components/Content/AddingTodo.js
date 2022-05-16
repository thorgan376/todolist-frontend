import React, {useState} from "react";

const AddingTodo = ({text, todo, todos, setTodos}) =>{
    //Events: Complete, delete-pu to trash,...
    const completeHandler = () => {
        setTodos(todos.map((item) => {}
        ));
    }
    const deleteHandler = (event) => {
        setTodos(todos.filter((item) => item.id !== todo.id));
    }
    return(
        <div className="todo">
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <li className="todo-item">{text}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default AddingTodo;