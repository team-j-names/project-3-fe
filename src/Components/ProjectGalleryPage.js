import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGalleryPage = () => {

// We will return a map of all the projects from the GET and asign them each a ProjectCard
    return (
        <div>
            {/* The whole ProjectCard will link to that project's ProjectPage */}
            <Link to={`/projects${project.id}`}>
                <ProjectCard/>
            </Link>
        </div>
    );
};

export default ProjectGalleryPage;