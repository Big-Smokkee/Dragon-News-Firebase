import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }
    // if user -- thake go to children
    if (user && user?.email)
        return children;


    //else go to login
    else
        return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;