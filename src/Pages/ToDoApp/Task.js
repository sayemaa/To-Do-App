import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ task, tasks, setTasks }) => {
    const { name, description } = task;
    const [strike, setStrike] = useState("");

    const handleComplete = () => {
        setStrike("line-through");
        toast.success('Task Completed');
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://quiet-castle-58457.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                })
        }
    }

    return (
        <div className="card lg:mx-w-lg bg-base-100 shadow-xl py-8 px-5">
            <div className="flex justify-between">
                <div style={{ textDecoration: strike }} className='px-3'>
                    <h2 className="card-title mb-3">{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="w-48 lg:flex items-center justify-end text-right">
                    <button onClick={handleComplete} className='btn btn-outline btn-success m-1'>Complete</button>
                    <button onClick={() => handleDelete(task._id)} className='btn btn-outline btn-error m-1'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;