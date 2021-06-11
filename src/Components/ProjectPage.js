import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'

const ProjectPage = ({ match }) => {

    const [project, setProject] = useState()

    useEffect(() => {
        const url = `http://localhost:3000/projects/${match.params.id}`;
    
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProject(res)
                console.log(project)
            })
            .catch(err => {
                console.error(err);
            });
        }, [])


    if (!project) {
        return <h1>LOADING...</h1>
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <h3>{project.author}</h3>
            <p>{project.description}</p>
            <a href={project.Github}>GitHub</a>
        </div>
    );
};

export default ProjectPage;