import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
    const [signupInfo, setSignupInfo] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({
            ...signupInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(signupInfo.username, JSON.stringify(signupInfo));
        alert('Registration successful!');
        setSignupInfo({
            username: '',
            password: '',
        });
    };

    return (
        <div className='SignUp-Container'>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={signupInfo.username}
                    onChange={handleChange}
                    required
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={signupInfo.password}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                />
                <button type="submit">SignUp</button>
                <Link to="/login">Log In</Link>
            </form>
        </div>
    );
}

export default SignUp;
