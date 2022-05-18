import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className='flex justify-center items-center mt-20'>
                <div className="card w-96 bg-base-100">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                    <div className="card-body">
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;