import React from 'react';

const ProjectCard = ({ project }) => {
    // truncate description showed on card
    let shortDescr;
    if (project.description.length > 100) {
        shortDescr = project.description.slice(0, 100).concat("...")
    } else shortDescr = project.description;

    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.author}</p>
            {/* use image url */}
            <div className="card-image">{project.image}</div>
            <p>{project.technologies}</p>
            <p>{shortDescr}</p>
        </div>
    );
};

export default ProjectCard;