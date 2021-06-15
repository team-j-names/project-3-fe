import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { API_URL } from '../config'

const UpdateForm = ({ project }) => {

    const formFields = {
        title: project.title,
        author: project.author,
        technologies: project.technologies,
        githubUrl: project.githubUrl,
        deployedUrl: project.deployedUrl,
        additionalUrl: project.additionalUrl,
        description: project.description,
        imageUrl: project.imageUrl
    }
    const [formData, setFormData] = useState(formFields)


    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value})
    }

    function handleSubmit(event) {
        // event.preventDefault();
        const url = `${API_URL}/projects/${project._id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
            'Content-Type': 'application/json'}
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    if (!project) {
        return <div className="loader"></div>
    }

    return (
        <div className="formWrapper">

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Project Title</label>
                <input id="title" type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder=""/>
                
                <label htmlFor="author">Author</label>
                <input id="author" type="text"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder=""/>
                
                <label htmlFor="technologies">Technologies Used</label>
                <input id="technologies" type="text"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder=""/>
                
                <label htmlFor="githubUrl">GitHub Repo Link</label>
                <input id="githubUrl" type="text"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    placeholder=""/>
                
                <label htmlFor="deployedUrl">Deployed Link</label>
                <input id="deployedUrl" type="text"
                    value={formData.deployedUrl}
                    onChange={handleChange}
                    placeholder=""/>
                
                <label htmlFor="additionalUrl">Additional Url</label>
                <input id="additionalUrl" type="text"
                    value={formData.additionalUrl}
                    onChange={handleChange}
                    placeholder=""/>
                
                <label htmlFor="description">Project Description</label>
                <textarea id="description"
                    rows={4}
                    cols={50}
                    value={formData.description}
                    onChange={handleChange}>
                </textarea>
                
                <br />
                {/* <label htmlFor="image">Select an Image</label>
                <br></br> */}
                {/* <input type="text"
                    value={formData.image}
                    onChange={event => updateField(2, event.target.value)}
                    placeholder=""/>
                 */}
                {/* <label class="file-upload" htmlFor="file">Choose File</label> */}
                {/* <input type="file" name="image" /> */}
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default UpdateForm;