import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.author}</p>
        </div>
    );
};

export default ProjectCard;