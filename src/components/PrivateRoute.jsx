import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user, token } = useSelector((state) => state.auth);
    if (!user || !token) {
        return navigate("/login")
    }
    return children;
};

export default PrivateRoute;