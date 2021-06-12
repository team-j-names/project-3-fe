import React, { useEffect, useState } from 'react';

// CONSTRAINTS
// only authenticated user can edit/ submit a project
// user can only edit/delete the projects attached to their user name
// limit characters in form fields...?
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
        image: "",
        description: ""
    }


    const [formData, setFormData] = useState(formFields)

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
                newForm.image = value
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
        event.preventDefault();
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Project Title</label>
                <input type="text"
                    value={formData.title}
                    onChange={e => updateField(0, e.target.value)}
                    placeholder="">
                </input>
                <label htmlFor="author">Author</label>
                <input type="text"
                    value={formData.author}
                    onChange={e => updateField(1, e.target.value)}
                    placeholder="">
                </input>
                <label htmlFor="image">Image </label>
                <input type="text"
                    value={formData.image}
                    onChange={e => updateField(2, e.target.value)}
                    placeholder="">
                </input>
                <label htmlFor="desription">Description</label>
                <input type="text"
                    value={formData.description}
                    onChange={e => updateField(3, e.target.value)}
                    placeholder="">
                </input>
                <input type="submit" value="submit" />
            </form>

        </div>
    );
};

export default Form;