import React, { useState } from 'react';

const SignUp = () => {

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
        <div style={{ width: "90%", padding: "0 0 20px 0 " }}><h3>Sign up</h3><hr />Dolore nulla qui sint et consequat culpa irure elit nisi est pariatur tempor aute. Sit magna irure pariatur id enim et sint. Ipsum consectetur dolore enim anim adipisicing pariatur anim pariatur elit quis laborum do do. Mollit commodo nulla quis dolore consequat et commodo duis qui anim adipisicing mollit. Aliqua excepteur tempor officia pariatur Lorem consectetur qui. Amet non cillum duis duis commodo.<hr /></div>

        <div style={{ padding: "20px", border: "1px solid #ccc" }}>

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