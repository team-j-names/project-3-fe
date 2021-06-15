import React, { useState } from 'react';

const SignUp = (props) => {

    const usernameMaxLength = 15
    const pwdMaxLength = 15

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const url = ``

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const vinData = data.Results.map((element) => {
                    if (element.Value) {

                        return (<tr><td><strong>{element.Variable}</strong></td> <td>{element.Value}</td></tr>)
                    }

                })
                return (<tr>{vinData}</tr>)
            })
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

export default SignUp;