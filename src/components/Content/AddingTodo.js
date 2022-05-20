import axios from "axios";
import React from "react";

const AddingTodo = ({body, todo, todos, setTodos}) =>{
    //Events: Complete, delete todo,...
    const completeHandler = () => {
        setTodos(todos => todos.map(item => {
            if(item.id === todo.id){
                return {...item, checked: !todo.checked};
            }
            return item;
        }));
    }

    const deleteHandler = () => {
        const removeData = (async() => {
            const data = await axios.delete('http://localhost:8080/task/' + todo.id
            )
            .then(response => {
                console.log(response);
                })
        })
        removeData();
        setTodos(todos => todos.filter((item) => item.id !== todo.id));
    }
    return(
        <div className="todo">
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <li className={`todo-item ${todo.checked ? "checked" : ""}`}>{body}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default AddingTodo;