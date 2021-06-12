import './App.css';
import React from 'react'
import { Route, Link } from 'react-router-dom'
import ProjectGalleryPage from './Components/ProjectGalleryPage';
import ProjectPage from './Components/ProjectPage';
import Form from './Components/Form';

function App() {
  return (
    <div>
      {/* testing form */}
      <Form />
      {/* end testing form */}
      <Link to="/projects">
        <h1>HOMEPAGE</h1>
      </Link>

      <Route path="/projects" exact render={() =>
        <ProjectGalleryPage />} />

      <Route path="/projects/:id" render={(routerProps) =>
        <ProjectPage match={routerProps.match} />} />
    </div>
  );
}

export default App;
