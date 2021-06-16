import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import ProjectGalleryPage from './Components/ProjectGalleryPage';
import ProjectPage from './Components/ProjectPage';
import Form from './Components/Form';
import About from './Components/About';
import Login from './Components/Login';
import Home from './Components/Home'
import Signup from './Components/Signup';
import UpdateForm from './Components/UpdateForm';
import DeleteModal from './Components/DeleteModal';
import LoginButtons from './Components/LoginButtons';

function App() {

    const [project, setProject] = useState()
    useEffect(() => {
        console.log('TEST')
    }, [LoginButtons])
    
    const signUpInstructions = [<><h2>Sign up</h2><hr />Dolore nulla qui sint et consequat culpa irure elit nisi est pariatur tempor aute. Sit magna irure pariatur id enim et sint. Ipsum consectetur dolore enim anim adipisicing pariatur anim pariatur elit quis laborum do do. Mollit commodo nulla quis dolore consequat et commodo duis qui anim adipisicing mollit. Aliqua excepteur tempor officia pariatur Lorem consectetur qui. Amet non cillum duis duis commodo.<hr /></>]
    const loginInstructions = [<><h2>Login</h2><hr />Enter your username and password to sign in. You can then edit your project or submit a new project. If you are not registered, please <Link to="/signup"><strong>sign up.</strong></Link><hr /></>]
    return (
        <div className="app-wrapper">
            <div className="header">
                <h2>Progallery</h2>
            </div>

            <div className="container">
                <nav>
                    <div className="dropdown">
                        <button className="dropbtn">≡</button>
                        <div className="dropdown-content">
                            <Link to="/"> Home </Link>
                            <Link to="/projects">Project Gallery</Link>
                            <Link to="/projects/update">Submit Project</Link>
                            <Link to="/about">About</Link>
                        </div>
                    </div>

                    <div className="nav-link">
                        <ul>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/projects">Project Gallery</Link></li>
                            <li><Link to="/update">Submit Project</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <LoginButtons/>
                </nav>

                <div className="main">

                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Signup instructions={signUpInstructions} /></Route>
                    <Route path="/login">
                        <Login instructions={loginInstructions} /></Route>
                    <Route path="/projects" exact render={() =>
                        <ProjectGalleryPage />} />

                    <Route path="/projects/:id" render={(routerProps) =>
                        <ProjectPage match={routerProps.match} project={project} setProject={setProject}/>} />

                    <Route path="/update">
                        <Form />
                    </Route>

                    <Route path="/projects/:id/edit">
                        <UpdateForm project={project} setProject={setProject}/>
                    </Route>

                    <Route path="/projects/:id/delete">
                        <DeleteModal project={project}/>
                    </Route>

                    <Route path="/projects/details">
                        {/* <ProjectCard /> */}
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>

                </div>


            </div>

        </div>
    );
}

export default App;
