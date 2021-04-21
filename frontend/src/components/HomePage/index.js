import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { getPets } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        async function fetchPets() {
            if (!user) {
                return null;
            }
            await dispatch(getPets(user.id));
        }
        fetchPets()
    }, [dispatch, user])

    const petState = useSelector(state => state.pet)

    return (
        <>
            <h2>Your Pets:</h2>
            { petState && petState.pets.pets.map(pet => (
                <div key={pet.id}>
                    <h3>
                        <NavLink to="/">{pet.name}</NavLink>
                    </h3>
                    <p>{pet.type}</p>
                </div>
            ))}
        </>
    )
}

export default HomePage;
