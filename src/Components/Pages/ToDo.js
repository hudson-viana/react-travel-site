import React, { useState } from "react";

function ToDo() {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                <select className="" onChange={handleStatusChange}>
                    <option value='pending' >Pending</option>
                    <option value='completed' >Completed</option>
                </select>
                <button
                    type="submit"
                    className=""
                >Add</button>
            </form>
            <ToDo title={title} status={status} />
        </div>

    )
}

export default ToDo;