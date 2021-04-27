import React, { useState, useEffect } from 'react';
import { getActivePet, removeTodo, removeNote } from '../../store/pet';
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

    const todoRemove = (todoId) => async () => {
        await dispatch(removeTodo(todoId));
    };

    const noteRemove = (noteId) => async () => {
        await dispatch(removeNote(noteId));
    };

    return (
        <div>
            <h1>Your Pet's Page:</h1>
            <div className="card_page">
                <h2>To-Do List:</h2>
                {pet.active && pet.active.ToDos.map(todo => (
                    <div key={todo.id} className="card">
                        <p>{todo.item}</p>
                        <form onSubmit={todoRemove(todo.id)}>
                            <button type="submit">X</button>
                        </form>
                    </div>
                ))
                }
                <div className="buttons">
                    <NavLink to={`/pets/${petId}/todos/new`} exact={true} className="button_text">New Item +</NavLink>
                </div>
                <h2>Pet Notes:</h2>
                {pet.active && pet.active.Notes.map(note => (
                    <div key={note.id} className="card">
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <form onSubmit={noteRemove(note.id)}>
                            <button type="submit">Remove</button>
                        </form>
                    </div>
                ))
                }
                <div className="buttons">
                    <NavLink to={`/pets/${petId}/notes/new`} exact={true} className="button_text">New Note +</NavLink>
                </div>
            </div>
        </div >
    )
}

export default PetPage;
