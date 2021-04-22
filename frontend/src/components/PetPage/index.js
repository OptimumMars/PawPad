import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import petReducer, { getActivePet } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import "./PetPage.css"

const PetPage = () => {
    const dispatch = useDispatch();

    let { petId } = useParams()

    useEffect(() => {
        async function fetchActivePet() {
            if (!petId) {
                return null;
            }
            await dispatch(getActivePet(petId));
        };
        fetchActivePet()
    }, [dispatch, petId])

    const pet = useSelector(state => state.pet)

    // let activePet

    // if (pet.active) {
    //     activePet = pet.active
    // }

    // console.log(activePet)

    return (
        <div>
            <h1>Your Pet's Page:</h1>
            <div>
                <h2>To-Do List:</h2>
                {pet ?
                    pet.active && pet.active.ToDos.map(todo => (
                        <div key={todo.id}>
                            <p>{todo.item}</p>
                        </div>
                    ))
                    : <p>loading...</p>
                }
            </div>
        </div>
    )
}

export default PetPage;
