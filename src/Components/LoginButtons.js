import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Login from './Login';

const LoginButtons = ({ isLoggedIn, setIsLoggedIn }) => {

    if (isLoggedIn === false) {
        return (
            <div className="login">
            <Link to="/signup">
                <button className="loginbtn" id="sign-up">Sign Up</button></Link>
            <Link to="/login">
                <button className="loginbtn" id="login">Log In</button></Link>
        </div>
        );
    } else {
        return (
            <div className="logout">
                <button onClick={() => {
                    window.localStorage.clear()
                    window.location.reload()
                    }} className="loginbtn" id="log-out">
                    Log Out
                </button>
            </div>
        )
    }
};

export default LoginButtons;