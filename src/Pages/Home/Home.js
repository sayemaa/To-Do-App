import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleToDoApp = () => {
        navigate('/todoapp');
    }

    return (
        <div className='flex justify-center mt-20'>
            <button onClick={handleToDoApp} className="btn btn-primary">Proceed to To-Do App</button>
        </div>
    );
};

export default Home;