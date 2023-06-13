import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import Forbidden from './Forbidden';

const ProtectedRoute = (props) => {
    const { user } = "recruiter";

    if (user) {
        if (user.role == props.role) {
            return <Outlet />
        }
        return <Forbidden />
    }
    return <Navigate to="login" />
}

export default ProtectedRoute;
