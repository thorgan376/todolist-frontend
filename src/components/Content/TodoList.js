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
                    body={todo.body} 
                    key={todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;