import './App.css';
import React from 'react'
import { Route, Link } from 'react-router-dom'
import ProjectGalleryPage from './Components/ProjectGalleryPage';
import ProjectPage from './Components/ProjectPage';
import Form from './Components/Form';
import About from './Components/About';
import Login from './Components/Login';
import Home from './Components/Home'

function App() {

    const signUpInstructions = [<><h3>Sign up</h3><hr />Dolore nulla qui sint et consequat culpa irure elit nisi est pariatur tempor aute. Sit magna irure pariatur id enim et sint. Ipsum consectetur dolore enim anim adipisicing pariatur anim pariatur elit quis laborum do do. Mollit commodo nulla quis dolore consequat et commodo duis qui anim adipisicing mollit. Aliqua excepteur tempor officia pariatur Lorem consectetur qui. Amet non cillum duis duis commodo.<hr /></>]
    const loginInstructions = [<><h3>Login</h3><hr />Dolore nulla qui sint et consequat culpa irure elit nisi est pariatur tempor aute. Sit magna irure pariatur id enim et sint. Ipsum consectetur dolore enim anim adipisicing pariatur anim pariatur elit quis laborum do do. Mollit commodo nulla quis dolore consequat et commodo duis qui anim adipisicing mollit. Aliqua excepteur tempor officia pariatur Lorem consectetur qui. Amet non cillum duis duis commodo.<hr /></>]
    return (
        <div className="app-wrapper">
            <div class="header">
                <h2>Project Gallery</h2>
            </div>

            <div class="container">
                <nav>
                    <div class="dropdown">
                        <button class="dropbtn">≡</button>
                        <div class="dropdown-content">
                            <Link to="/"> Home </Link>
                            <Link to="/projects">Project Gallery</Link>
                            <Link to="/projects/update">Submit Project</Link>
                            <Link to="/about">About</Link>
                        </div>
                    </div>

                    <div class="nav-link">
                        <ul>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/projects">Project Gallery</Link></li>
                            <li><Link to="/update">Submit Project</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <div class="login">
                        {/* <form className="login-form" style={{ display: "inline-block" }} onSubmit={loginSubmit}> */}
                        <Link to="/signup">
                            <button class="loginbtn" id="sign-up">Sign Up</button></Link>
                        <Link to="/login">
                            <button class="loginbtn" id="login">Log In</button></Link>
                        {/* </form> */}
                    </div>
                </nav>

                {/* <Link to="/projects/update">Project Form</Link>
                <br />
                <Link to="/projects/details">Project Details</Link> */}

                <div class="main">
                    {/* <div class="card-wrapper"> */}

                    {/* -------------------- */}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Login instructions={signUpInstructions} /></Route>
                    <Route path="/login">
                        <Login instructions={loginInstructions} /></Route>
                    <Route path="/projects" exact render={() =>
                        <ProjectGalleryPage />} />

                    <Route path="/projects/:id" render={(routerProps) =>
                        <ProjectPage match={routerProps.match} />} />

                    <Route path="/update">
                        <Form />
                    </Route>
                    <Route path="/projects/details">
                        {/* <ProjectCard /> */}
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    {/* ------------------------------ */}

                    {/* </div> */}

                    {/* <article class="details">

                        <div class="proj-links">
                            <div>
                                <h3>Project links:</h3>
                                <p>Deployed App</p>
                                <p>Github Repository</p>
                            </div>
                        </div>
                        <div class="description">
                            <h3>Description</h3>Velit adipisicing quis id aliqua ex Lorem amet non ea veniam quis. Et velit mollit
                commodo
                occaecat labore pariatur ex exercitation non ullamco. Aute ut eu reprehenderit quis excepteur ad sit
                laborum. Occaecat exercitation elit et laborum aute voluptate ipsum non proident nulla magna ad. Irure
                voluptate do ad nostrud minim nulla ipsum dolore laboris sit officia ullamco.
            </div>
                    </article> */}
                </div>


            </div>

        </div>
    );
}

export default App;
