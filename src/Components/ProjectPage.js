import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import { API_URL } from '../config'
import DeleteModal from './DeleteModal';

const ProjectPage = ({ match, project, setProject }) => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        const url = `${API_URL}/projects/${match.params.id}`
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
        return <div className="loader"></div>
    }

    if (project.owner === window.localStorage.getItem('userId')) {
        return (
            <div className="project-details-page">
                <Link to={`/projects/${project._id}/edit`}>
                <button>
                    EDIT
                </button>
                </Link>
                <button onClick={() => {setShow(true)}}>
                    DELETE
                </button>
                <DeleteModal show={show} setShow={setShow} project={project}/>
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
    }

    return (
        <div className="project-details-page">
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