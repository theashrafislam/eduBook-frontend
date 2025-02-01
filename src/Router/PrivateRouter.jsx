import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if(loading){
        return <div className='flex justify-center items-center mt-10'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/sign-in" state={location.pathname}/>
};

export default PrivateRouter;