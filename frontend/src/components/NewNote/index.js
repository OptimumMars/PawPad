import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import petReducer, { getActivePet } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import "./NewNote.css"

const NewNote = () => {
    const dispatch = useDispatch();

    let { petId } = useParams();

    return (
        <div>
            <h1>this is the page to add a new note</h1>
            <p>pet id is {petId}</p>
        </div>
    )
}

export default NewNote;
