import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <h1>this is the home page</h1>
        </>
    )
}

export default HomePage;
