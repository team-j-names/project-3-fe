
import React from 'react';
const ProjectCard = ({ project }) => {
    // truncate description showed on card
    let shortDescr;
    if (project.description.length > 100) {
        shortDescr = project.description.slice(0, 100).concat("...")
    } else shortDescr = project.description;
    return (
        <div className="project-card" style={{ display: "flex", flexDirection: "column", maxHeight: "250" }}>
            <h3 style={{ marginTop: "5px", marginBottom: "10px" }} > {project.title}</h3>
            <p style={{ marginTop: "3x", marginBottom: "5px" }}>{project.author}</p>
            {/* use image url */}
            <div><img src="https://team-j-names-media.s3.us-east-2.amazonaws.com/projects_images2/student_proj_placeholder.png" alt="" width="300px%" /></div>
            <div className="card-image">{project.image}</div>
            {/* <p>{project.technologies}</p> */}
            <p>{shortDescr}</p>
        </div>
    );
};
export default ProjectCard;