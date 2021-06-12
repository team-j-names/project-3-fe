import React from 'react';

// CONSTRAINTS
// only authenticated user can edit/ submit a project
// user can only edit/delete the projects attached to their user name
// limit characters in form fields...?
//
// FORM
// for submissions, user fills form and submits (http: POST )
// proj details page will have edit buttons, which will include options to update or delete project.  
// for updates, form is pre-populated  (useState) with fetched data (useEffect?), user edits and submits (http: POST.. or PATCH)
// for delete, prompt if sure, then send (http:DELETE) request with _id. 
// images will be uploaded to AWS, url link will be stored in db with proj data

// DO
// fetch a project's details using its ID
// map fetched details onto details page
// create formfields
// labels
// buttons
// prevent default

const Form = () => {

    const [formData, setFormData] = useState()

    return (
        <div>

        </div>
    );
};

export default Form;