import React, { useState } from "react";

function ToDo() {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('pending');
    const [todos, setTodos] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {title, status};
        setTodos([...todos, newTodo]);
        setTitle('');
        setStatus('pending');
    }

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="">
                <input
                    value={title}
                    type="text"
                    onChange={handleTitleChange}
                    className=""
                    placeholder='Insert your text here'
                />
                <select className="" value={status} onChange={handleStatusChange}>
                    <option value='pending' >Pending</option>
                    <option value='completed' >Completed</option>
                </select>
                <button
                    type="submit"
                    className=""
                >Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo.title} - {todo.status}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;
