import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'

const ProjectPage = ({ match }) => {

    const [project, setProject] = useState()

    useEffect(() => {
        const url = `http://localhost:3000/${match.params.id}`;
        console.log(match.params.id)

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProject(res)
                console.log(res)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])


    if (!project) {
        return <div class="loader"></div>
    }

    return (
        <div>
            <h3>{project.title}</h3>
            <h3>{project.author}</h3>
            <p>{project.description}</p>
            <a href={project.Github}>GitHub</a>
        </div>
    );
};

export default ProjectPage;