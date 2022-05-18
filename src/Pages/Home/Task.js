import React from 'react';

const Task = ({ task }) => {
    const { name, description } = task;

    return (
        <ul class="bg-base-100 rounded-box text-xl py-3 mb-5 border px-5 flex">
            <div className='pr-8'>
                <li>{name}</li>
                <p><small>{description}</small></p>
            </div>
            <div className='flex items-center'>
                <button className='btn btn-outline btn-success mx-1'>Complete</button>
                <button className='btn btn-outline btn-error mx-1'>Delete</button>
            </div>
        </ul>
    );
};

export default Task;