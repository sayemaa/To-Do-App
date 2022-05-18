import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const AddTask = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast("Task Added!");
            })
    }

    return (
        <div>
            <div className='flex justify-center items-center mt-10'>
                <label for="add-task-modal" class="btn btn-outline btn-primary">Add Task</label>
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
        </div>
    );
};

export default AddTask;