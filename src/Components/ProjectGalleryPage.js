import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import ProjectCard from './ProjectCard';

const ProjectGalleryPage = () => {

    const [projectList, setProjectList] = useState()

    useEffect(() => {
        // const url = `http://localhost:3000/`;
        const url = `https://team-j-name-project-be.herokuapp.com/projects`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProjectList(res)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])


    if (!projectList) {
        return <h1>LOADING...</h1>
    }
    // We will return a map of all the projects from the GET and asign them each a ProjectCard
    return (

        <>
            {/* The whole ProjectCard will link to that project's ProjectPage */}
            {
                projectList.map((project) => {

                    return (

                        <Link to={`projects/${project._id}`}>
                            <ProjectCard project={project} />
                        </Link>

                    )
                })
            }
        </>

    );
};

export default ProjectGalleryPage;