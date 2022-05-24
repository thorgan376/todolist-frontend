import React, { useEffect } from "react";
import './Content.css';
import AddingTodo from "./AddingTodo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <AddingTodo
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                        body={todo.body}
                        key={todo.id} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;