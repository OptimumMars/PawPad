import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { getPets } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        async function fetchPets() {
            if (user === null) {
                return null;
            };
            await dispatch(getPets(user.id));
        }
        fetchPets()
    }, [dispatch, user])

    return (
        <>
            <h2>Your Pets:</h2>

        </>
    )
}

export default HomePage;
