import React, { useEffect, useState } from 'react';
import { API_URL } from '../config'


// CONSTRAINTS
// only authenticated user can edit/ submit a project
// user can only edit/delete the projects attached to their user name
// limit characters in form fields...?
// disallow duplicate project titles (hence duplicate project submissions)
//
// FORM
// for submissions, user fills form and submits (http: POST )
// proj details page will have edit buttons, which will include options to update or delete project.  
// for updates, form is populated (useState) with fetched data (useEffect?), user edits and submits (http: POST.. or PATCH)
// after edit submitted return to details page of proj
// for delete, prompt if sure, then send (http:DELETE) request with _id.
// after delete, return to homepage (view all projects)
// images will be uploaded to AWS, url link will be stored in db with proj data

// DO
// fetch a project's details using its ID
// map fetched details onto details page
// create formfields
// labels
// buttons
// prevent default

const Form = () => {

    const formFields = {
        title: "",
        author: "",
        technologies: "",
        githubUrl: "",
        deployedUrl: "",
        additionalUrl: "",
        description: "",
        imageUrl: ""
    }
    const [formData, setFormData] = useState(formFields)


    const handleChange = (event) => {
        setFormData({...formData, [event.target.id]: event.target.value})
    }

    // ----------------

    function handleSubmit(event) {
        event.preventDefault();
        const url = `${API_URL}/projects`
        fetch(url, {
            method: 'POST',
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

    // -------------------
    // function handleSubmit(event) {
    // UPDATE
    // ID will be needed...
    // get _id from displayed item when clicked -props need to be passed
    // populate formData state with details from db
    // send back updated info via PATCH request to update db

    //DELETE
    // get the id
    // send DELETE request along with _id

    //     event.preventDefault();
    //     const url = `https://team-j-name-project-be.herokuapp.com/projects`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             setFormData(data)
    //             console.log(data)
    //         })
    //         .catch((error) => {
    //             console.log('Error', error);
    //         })
    // }

    //--------------------------fetch for edit ---------------------------
    // if id is provided, useEffect to fetch() and populate form
    // if not, provide empty form for submitting new project


    //----------------------end of fetch for edit-------------------------

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

export default Form;