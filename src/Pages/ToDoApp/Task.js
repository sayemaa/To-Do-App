import React from 'react';

const Task = ({ task }) => {
    const { name, description } = task;

    return (
        <div class="card lg:mx-w-lg bg-base-100 shadow-xl py-8 px-5">
            <div class=" flex justify-between">
                <div className='px-3'>
                    <h2 class="card-title mb-3">{name}</h2>
                    <p>{description}</p>
                </div>
                <div class="lg:flex items-center justify-end text-right">
                    <button className='btn btn-outline btn-success m-1'>Complete</button>
                    <button className='btn btn-outline btn-error m-1'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;