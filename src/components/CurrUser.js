import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { AuthContext } from '../pages/auth/Auth';

const CurrUser = () => {
    const { currentUser } = useContext(AuthContext);
    const currentUserEmail = currentUser ? currentUser.email : '';

    return <Typography variant='h6'>{`Welcome ${currentUserEmail}`}</Typography>
};

export default CurrUser;