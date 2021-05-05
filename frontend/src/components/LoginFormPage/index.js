import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    const demoLogin = async (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="form-field">
                    <label>
                        Username or Email
        <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="form-field">
                    <label>
                        Password
        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit" className="form-button">Log In</button>
            </form>
            <form onSubmit={demoLogin} className="demo-button">
                <button type="submit">Demo User</button>
            </form>
        </div>
    );
}

export default LoginFormPage;
