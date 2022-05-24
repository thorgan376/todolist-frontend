import axios from "axios";
import React from "react";

const AddingTodo = ({body, todo, todos, setTodos, setCheckedFilter}) =>{
    //Events: Complete, delete todo,...
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                setCheckedFilter(item.checked);
                return {...item, checked: !todo.checked};
            }
            return item;
        }));
        
        // const checkData = (async() => {
        //     const updatedata = await axios.put(`http://localhost:8080/task/${todo.id}`, {checked: !todo.checked})
        //     .then(response => {
        //         console.log(response);
        //     })
        //       .catch(error => {
        //         console.log(error);
        //     });
        // })
    }

    const editHandler = () => {
        // const editData =(async() => {
        //     const update = await axios.put(`http://localhost:8080/task/${todo.id}`, {title: inputTodo, body: inputTodo, checked: false})
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        // })
        
    }

    const deleteHandler = () => {
        const removeData = (async() => {
            const data = await axios.delete('http://localhost:8080/task/' + todo.id)
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
            <button className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default AddingTodo;