import React, { useState, useEffect } from 'react';
import { newTodo } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useParams, useHistory } from 'react-router-dom';
import "./NewToDo.css"

const NewToDo = () => {
    const [item, setItem] = useState("");

    const history = useHistory();

    let { petId } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        await newTodo(item, petId);
        history.push(`/pets/${petId}`);
    };

    const updateItem = (e) => {
        setItem(e.target.value)
    }

    return (
        <div>
            <h1>New To-Do Item:</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Item:</label>
                    <input
                        type="text"
                        name="item"
                        onChange={updateItem}
                        value={item}></input>
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default NewToDo;
