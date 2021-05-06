import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className="logout_div">
                <button onClick={logout} className="logout_button">Log Out</button>
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="buttons">Log In</NavLink>
                <NavLink to="/signup" className="buttons">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className="navbar_component">
            <div>
                <h2 className="navbar_title">PawPad</h2>
            </div>
            <div>
                <div className="auth_buttons">
                    <NavLink exact to="/" className="buttons">Home</NavLink>
                    {isLoaded && sessionLinks}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
