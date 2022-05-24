import React from "react";
import './Content.css';
import AddingTodo from "./AddingTodo";
const TodoList = ({todos, setTodos, filteredTodos, setCheckedFilter}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <AddingTodo 
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    body={todo.body} 
                    key={todo.id}
                    setCheckedFilter={setCheckedFilter}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;