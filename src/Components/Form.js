import React, { useEffect, useState } from 'react';


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
        email: "",
        technologies: "",
        description: "",
        image: ""
    }
    const [formData, setFormData] = useState(formFields)

    // Select input field triggering the onChange and update it in state
    function updateField(field, value) {
        let newForm = Object.assign({}, formData)
        switch (field) {
            case 0:
                newForm.title = value
                break;
            case 1:
                newForm.author = value
                break;
            case 2:
                newForm.technologies = value
                break;
            case 3:
                newForm.description = value
                break;
            default:
                break;
        }
        setFormData(newForm)
    }

    function handleSubmit(event) {
        // UPDATE
        // ID will be needed...
        // get _id from displayed item when clicked
        // populate formData state with details from db
        // send back updated info via PATCH request to update db

        //DELETE
        // get the id
        // send DELETE request along with _id

        event.preventDefault();
        // Testing with local db
        const url = `http://localhost:3000/`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch()
    }

    return (
        <div className="formWrapper">

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Project Title</label>
                <input type="text"
                    value={formData.title}
                    onChange={event => updateField(0, event.target.value)}
                    placeholder="">
                </input>
                <label htmlFor="author">Author</label>
                <input type="text"
                    value={formData.author}
                    onChange={event => updateField(1, event.target.value)}
                    placeholder="">
                </input>

                <label htmlFor="technologies">Technologies Used</label>
                <input type="text"
                    value={formData.author}
                    onChange={event => updateField(2, event.target.value)}
                    placeholder="">
                </input>

                <label htmlFor="desription">Description</label>
                <input type="textarea"
                    rows={4}
                    cols={50}
                    value={formData.description}
                    onChange={event => updateField(3, event.target.value)}
                    placeholder="">
                </input>
                <br />
                <label htmlFor="image">Select an Image</label>
                {/* <input type="text"
                    value={formData.image}
                    onChange={event => updateField(2, event.target.value)}
                    placeholder="">
                </input> */}
                <input type="file" name="image" />
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Form;