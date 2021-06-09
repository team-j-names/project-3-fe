import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import ProjectGalleryPage from './Components/ProjectGalleryPage';
import ProjectPage from './Components/ProjectPage';

function App() {
  return (
    <div>
      <Route path="/projects" exact render={() => 
        <ProjectGalleryPage/>}/>

      <Route path="/projects/:id" render={(routerProps) => 
        <ProjectPage match={routerProps.match}/>}/>
    </div>
  );
}

export default App;
