import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'

const ProjectPage = ({ match }) => {

    const [project, setProject] = useState()

    useEffect(() => {
        const url = `https://team-j-name-project-be.herokuapp.com/projects/${match.params.id}`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProject(res)
            })
            .catch(err => {
                // do something with the error
                console.error(err);
            });
    }, [])



    if (!project) {
        return <div class="loader"></div>
    }

    return (
        <div class="project-details-page">
            <h2>{project.title}</h2>
            <h3>by {project.author}</h3>
            <div style={{ backgroundColor: "#EAC45D", height: "100px", width: "100%" }}>
                {/* image to display */}
                {/* <img src={project.imgUrl} alt={project.title} height="" /> */}
            </div>
            <p>{project.description}</p>
            <a href={project.Github}>GitHub</a>
        </div>
    );
};

export default ProjectPage;