import React from "react";
import './Content.css';
import AddingTodo from "./AddingTodo";
const TodoList = ({todos, setTodos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <AddingTodo 
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    text={todo.text} 
                    key={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;