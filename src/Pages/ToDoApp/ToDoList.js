import React, { useEffect, useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [tasks])


    return (
        <div>
            <div className='flex justify-center items-center mt-10 lg:mt-20 mb-10'>
                <div class="card lg:max-w-2xl w-full bg-base-100">
                    <h2 class="text-center text-2xl font-bold mb-5">To-Do List</h2>
                    <div className='grid grid-cols-1 gap-5'>
                        {
                            tasks.map((task) => <Task key={task._id} task={task} setTasks={setTasks} tasks={tasks} />)
                        }
                    </div>
                    <AddTask />
                </div>
            </div>

        </div >
    );
};

export default ToDoList;