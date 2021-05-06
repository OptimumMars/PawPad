import React, { useState, useEffect } from 'react';
import { newPet } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useParams, useHistory } from 'react-router-dom';
import "./NewPetForm.css"

const PetForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const userId = useSelector(state => state.session.user.id)

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        await newPet(name, type, userId)
        history.push('/');
    };

    const updateName = (e) => {
        setName(e.target.value)
    };

    const updateType = (e) => {
        setType(e.target.value)
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Pet's Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={updateName}
                        value={name}></input>
                </div>
                <div>
                    <label>Pet Type:</label>
                    <input
                        type="text"
                        name="type"
                        onChange={updateType}
                        value={type}></input>
                </div>
                <button type="submit">Add Pet</button>
            </form>

        </div>
    )
}

export default PetForm;
