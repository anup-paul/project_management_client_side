import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


const TaskList = (props) => {


    const handleBack = props.handleBack;
    const newTaskData = props.newTaskData;
    // const currentProject = props.currentProject;
    // // const taskData = newTaskData.filter(data => )

    return (
        <div>
            <div className=" d-flex justify-content-center" >
                <table class="table w-75 border">
                    <thead>
                        <tr>

                            <th scope="col">Project Name</th>
                            <th scope="col">Assign To</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        newTaskData.map(data =>
                            <tr>
                                <td>{data.task_name}</td>
                                <td>{data.task_assign_to}</td>
                                <td>{data.task_start_date}</td>
                                <td>{data.task_end_date}</td>
                                <td ><FontAwesomeIcon
                                    style={{color:"blue"}}
                                    icon={faEdit }
                                    // onClick={()=>handleEditProject(data)}
                                    />
                                </td>
                                <td > <FontAwesomeIcon  
                                    style={{color:"red"}}  
                                    icon={faTrashAlt}
                                    // onClick={()=>handleDeleteProject(data)}
                                    />
                                </td>
                            </tr>
                        )
                    }


                </tbody>
                </table>


            </div>
            <div className="text-center" >
                <button className="btn" onClick={(e)=>handleBack(e)} > <FontAwesomeIcon style={{color:"blue"}}  icon={faArrowAltCircleLeft} /> <b>Projects</b></button>
            </div>
        </div>
    );
};

export default TaskList;