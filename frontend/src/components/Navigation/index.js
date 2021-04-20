import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} className="buttons" />
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
