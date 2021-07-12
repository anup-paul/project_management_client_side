import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

const SingleProject = (props) => {

    const data = props.data;
    const index = props.index;
    const handleEditProject = props.handleEditProject;
    const handleDeleteProject = props.handleDeleteProject;
    const handleSingleProject = props.handleSingleProject;
    const newTaskData = props.newTaskData;

    const taskData = props.taskData;

    const taskUnderThisProject = taskData.filter(dt => data.id == dt.project_id);
    // console.log('task', newTaskData);
    // console.log('data', data);

    return (
        <tr>
            <td>{index + 1}.</td>
            <td
                onClick={(e) => handleSingleProject(e, data)}
            >
                <b>{data.project_name} (<b style={{ color: "red" }} > {taskUnderThisProject.length} </b> ) <FontAwesomeIcon icon={faPlus} style={{ color: "red" }} /> </b>
            </td>
            <td>{data.assign_to}</td>
            <td>{data.start_date}</td>
            <td>{data.end_date}</td>
            <td ><FontAwesomeIcon
                style={{ color: "blue" }}
                icon={faEdit}
                onClick={() => handleEditProject(data)}
            />
            </td>
            <td > <FontAwesomeIcon
                style={{ color: "red" }}
                icon={faTrashAlt}
                onClick={() => {
                    if (window.confirm('Are you sure you want to delete this?')) {
                        handleDeleteProject(data)
                    }
                }}

            />

            </td>
        </tr>
    );
};

export default SingleProject;