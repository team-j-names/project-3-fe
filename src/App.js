import './App.css';
import React from 'react'
import { Route, Link } from 'react-router-dom'
import ProjectGalleryPage from './Components/ProjectGalleryPage';
import ProjectPage from './Components/ProjectPage';
import Form from './Components/Form';


function App() {
    return (
        <div>



            <div class="t1">
                <h2>Project Gallery</h2>
            </div>

            <div class="container">


                <nav>
                    {/* <div class="drop-nav"></div>
                    <ul>
                        <li>A Menu Item</li>
                        <li>A Menu Item</li>
                        <li>A Menu Item</li>
                        <li>A Menu Item</li>
                    </ul> */}




                    <div class="dropdown">
                        <button class="dropbtn">≡</button>
                        <div class="dropdown-content">
                            <a href="#">Home</a>
                            <a href="#">Gallery</a>
                            <a href="#">About</a>
                        </div>
                    </div>

                    <div class="nav-link">
                        <ul>
                            <li><Link to="/projects"> Home </Link></li>
                            <li><Link to="/projects">Project Gallery</Link></li>
                            <li><Link to="">Submit Project</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <div class="login">
                        <button class="loginbtn" id="sign-up">Sign Up</button>
                        <button class="loginbtn" id="login">Log In</button>
                    </div>

                </nav>

                {/* <Link to="/projects/update">Project Form</Link>
                <br />
                <Link to="/projects/details">Project Details</Link> */}

                <div class="main">
                    {/* <div class="card-wrapper"> */}

                    {/* -------------------- */}

                    <Route path="/projects" exact render={() =>
                        <ProjectGalleryPage />} />

                    <Route path="/projects/:id" render={(routerProps) =>
                        <ProjectPage match={routerProps.match} />} />

                    <Route path="/projects/update">
                        <Form />
                    </Route>
                    <Route path="/projects/details">
                        {/* <ProjectCard /> */}
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
