import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, Navigate, useParams } from "react-router-dom";
import auth from '../../firebase.init';

const PrivateRoute = ({ children }) => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <p className='text-3xl font-bold text-center mt-12 text-red-600'>Loading...</p>
    }
    if (!user) {
        return <Navigate to={`/invoice/${id}/signin`} state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;