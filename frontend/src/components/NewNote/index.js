import React, { useState, useEffect } from 'react';
import { newNote } from '../../store/pet';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useParams, useHistory } from 'react-router-dom';
import "./NewNote.css"

const NewNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const history = useHistory();

    let { petId } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        await newNote(title, content, petId)
        history.push(`/pets/${petId}`);
    }

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    const updateContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <div>
            <h1>New Note:</h1>
            <div className="form-container">
                <form onSubmit={onSubmit} className="form">
                    <div className="form-field">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            onChange={updateTitle}
                            value={title}></input>
                    </div>
                    <div className="form-field">
                        <label>Content:</label>
                        <input
                            type="textbox"
                            name="content"
                            onChange={updateContent}
                            value={content}></input>
                    </div>
                    <button type="submit" className="form-button">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default NewNote;
