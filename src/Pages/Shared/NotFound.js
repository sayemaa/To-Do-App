import React from 'react';
import sad from '../../assets/sad.png';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img className='w-24 lg:w-32 mb-5' src={sad} alt="" />
            <h2 className='text-3xl lg:text-4xl font-bold'>404 Page Not Found</h2>
        </div>
    );
};

export default NotFound;