import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { getPets, removePet } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import "./HomePage.css"

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

    const onRemove = (petId) => async () => {
        await dispatch(removePet(petId));
    };

    return (
        <div className="card_page">
            <h2 className="title">Your Pets:</h2>
            {petState.pets && petState.pets.map(pet => (
                <div key={pet.id} className="pet_card">
                    <NavLink exact to={`/pets/${pet.id}`} className="card_item">{pet.name}</NavLink>
                    <p className="card_item">{pet.type}</p>
                    <form onSubmit={onRemove(pet.id)}>
                        <button type="submit">Remove</button>
                    </form>
                </div>
            ))
            }
            <div>
                <NavLink to={`/${user.id}/pets/new`} exact={true}>Add a Pet</NavLink>
            </div>
        </div>
    )
}

export default HomePage;
