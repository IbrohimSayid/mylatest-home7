import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

function Login() {
    let navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage dan foydalanuvchi ma'lumotini olish
        const storedInfo = localStorage.getItem(loginInfo.username);
        if (storedInfo) {
            const storedData = JSON.parse(storedInfo);
            if (loginInfo.password === storedData.password) {
                alert('Login successful!');
                navigate.push('/dashboard'); // Foydalanuvchini boshqa qismga yo'naltirish
            } else {
                alert('Incorrect password!');
            }
        } else {
            alert('User not found!');
        }
    };

    return (
        <div className='Containe-LogIn'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={loginInfo.username}
                    onChange={handleChange}
                    required
                    placeholder="Username"
                />
                <input
                    type="password"
                    name="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                    required
                    placeholder="Password"
                />
                <button type="submit">Login</button>
                <Link to="/signup">Sign Up</Link>
            </form>
        </div>
    );
}

export default Login;