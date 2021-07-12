import React from 'react';
import SingleProject from '../SingleProject/SingleProject';


const ProjectList = (props) => {

    const newProjectData = props.newProjectData;
    const handleEditProject = props.handleEditProject;
    const handleDeleteProject = props.handleDeleteProject;
    const handleSingleProject = props.handleSingleProject;

    const newTaskData = props.newTaskData;

    const projectData = props.projectData;

    const taskData = props.taskData;

    return (
        <div  >
            <table class="table border mt-3">
                <thead>
                    <tr>
                        <th scope="col">S/N</th>
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
                        projectData.map((data, index) =>
                            <SingleProject
                                data={data}
                                index={index}
                                handleSingleProject={handleSingleProject}
                                handleDeleteProject={handleDeleteProject}
                                handleEditProject={handleEditProject}
                                newTaskData={newTaskData}
                                taskData = {taskData}
                            />
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;