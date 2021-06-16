import React, { useState } from 'react';
import { API_URL } from '../config'

const Login = (props) => {

    const usernameMaxLength = 15
    const pwdMaxLength = 15

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const userData = {
            "email": userName,
            "password": password
        }
        console.log(event)
        console.log(userName)
        console.log(password)
        const url = `${API_URL}/api/signin`

        fetch(url, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}
        , body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.localStorage.setItem('token', data.token)
                window.localStorage.setItem('userId', data.foundUser._id)
            })
            // .then(setTimeout(() => {window.location.reload(true)}, 500))
            .catch(data => {

            })
    }
    return (<>
        <div style={{ width: "90%", padding: "0 0 20px 0 " }}>{props.instructions}</div>

        <div style={{ padding: "30px", border: "1px solid #90E0EF", borderRadius: "10px" }}>

            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="username">Username</label>
                <input type="text"
                    value={userName}
                    maxLength={usernameMaxLength}
                    onChange={e => setUserName(e.target.value)}
                    placeholder="" />

                <label className="label" htmlFor="password">Password</label>
                <input type="password"

                    onChange={e => setPassword(e.target.value)}
                    maxLength={pwdMaxLength}
                    placeholder="" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    </>
    );
};

export default Login;