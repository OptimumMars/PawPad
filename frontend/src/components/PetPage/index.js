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
            await dispatch(getActivePet(petId));
        };
        fetchActivePet()
    }, [dispatch, petId])

    return (
        <div>
            <h1>this is the specific pet page</h1>
            <>pet id is {petId}</>
        </div>
    )
}

export default PetPage;
