import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../../App';
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const TaskList = (props) => {


    const handleBack = props.handleBack;

    const newTaskData = props.newTaskData;
    const currentProject = props.currentProject;
    // const singleProjectTaskData = newTaskData.filter(data => data.projectId === currentProject.id);
    
    const handleEditTask = props.handleEditTask;
    const handleDeleteTask = props.handleDeleteTask;
    const handleNewTask = props.handleNewTask;

    const taskData = props.taskData;
    const singleProjectTaskData = taskData.filter(data => data.project_id === currentProject.id);

    return (
        <div>
            <h2 className="text-center mt-3" >{currentProject.project_name}(<span style={{ color: "red" }} >{singleProjectTaskData.length}</span>)  </h2>
            <div className=" d-flex justify-content-end" >
                <button className="btn btn-outline-primary mb-3" onClick={(e) => handleNewTask(e)}  >  <FontAwesomeIcon icon={faPlus} /> <b>New Task</b></button>
            </div>
            <div>
                <table class="table  border">
                    <thead>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Task Name</th>
                            <th scope="col">Assign To</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            singleProjectTaskData.map((data, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.task_name}</td>
                                    <td>{data.task_assign_to}</td>
                                    <td>{data.task_start_date}</td>
                                    <td>{data.task_end_date}</td>
                                    <td ><FontAwesomeIcon
                                        style={{ color: "blue" }}
                                        icon={faEdit}
                                        onClick={(e) => handleEditTask(e, data)}
                                    />
                                    </td>
                                    <td > <FontAwesomeIcon
                                        style={{ color: "red" }}
                                        icon={faTrashAlt}
                                        onClick={(e) =>{
                                            if (window.confirm('Are you sure you want to delete this offer?')) {
                                                handleDeleteTask(e, data)
                                            }
                                        } }
                                    />
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>

            </div>
            <div className="d-flex justify-content-end mt-5" >
                <button className="btn btn-outline-primary" onClick={(e) => handleBack(e)} > <FontAwesomeIcon icon={faArrowAltCircleLeft} /> <b>Projects</b></button>
            </div>
        </div>
    );
};

export default TaskList;