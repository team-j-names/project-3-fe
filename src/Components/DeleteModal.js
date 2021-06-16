import React, { useState } from 'react';
import { API_URL } from '../config'

const DeleteModal = ({ project, show, setShow }) => {

    const deleteProject = () => {
        const url = `${API_URL}/projects/${project._id}`
        fetch(url, {
            method: 'DELETE',
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
    }

    if (show === false) {
        return <div></div>
    }

    if (!project) {
        return <div className="loader"></div>
    }

    return (
    <div id="delete-modal">
        <h3>{`Are you sure you want to delete '${project.title}'?`}</h3>
        <button onClick={() => {deleteProject()}}>YES</button>
        <button onClick={() => {setShow(false)}}>NO</button>
    </div>
    );
};

export default DeleteModal;