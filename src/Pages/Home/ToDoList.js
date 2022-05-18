import React, { useEffect, useState } from 'react';
import Task from './Task';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])

    return (
        <div className='flex justify-center items-center mt-20'>
            <div class="card lg:max-w-2xl w-full bg-base-100">
                <h2 class="text-center text-2xl font-bold mb-10">To-Do List</h2>
                <div className='mb-5'>
                    {
                        tasks.map(task => <Task key={task.id} task={task} />)
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <button class="btn btn-outline btn-primary">Add Task</button>
                </div>
            </div>

        </div>
    );
};

export default ToDoList;