import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Task from './Task';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])

    return (
        <div>
            <div className='flex justify-center items-center mt-10 lg:mt-20 mb-10'>
                <div class="card lg:max-w-2xl w-full bg-base-100">
                    <h2 class="text-center text-2xl font-bold mb-5">To-Do List</h2>
                    <div className='grid grid-cols-1 gap-5'>
                        {
                            tasks.map(task => <Task key={task._id} task={task} />)
                        }
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <label for="add-task-modal" class="btn btn-outline btn-primary">Add Task</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="add-task-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="add-task-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-xl mb-5 text-center">Add Task</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                        <input
                            type='text'
                            placeholder='Task Name'
                            className='input input-bordered w-full max-w-md mb-5'
                            {...register("name", { required: true, maxLength: 20 })} />
                        <textarea
                            type='textarea'
                            className='textarea input-bordered w-full max-w-md mb-5'
                            placeholder='Task Description' {...register("description")} />
                        <input
                            type='submit'
                            value='ADD TASK'
                            className='btn'
                        />
                    </form>
                </div>
            </div >
        </div >
    );
};

export default ToDoList;