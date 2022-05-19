import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
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
                <label htmlFor="add-task-modal" className="btn btn-outline btn-primary">Add Task</label>
            </div>
            <input type="checkbox" id="add-task-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-task-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl mb-5 text-center">Add Task</h3>
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