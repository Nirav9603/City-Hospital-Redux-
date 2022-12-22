import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute(props) {

    const Login = localStorage.getItem('Dlogin')

    if (!Login) {
        return <Navigate to="/auth" />
    }

    return (props.children)

}

export default PrivateRoute;