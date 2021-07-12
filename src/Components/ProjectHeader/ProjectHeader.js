import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import NewProjectForm from '../NewProjectForm/NewProjectForm';
import ProjectList from '../ProjectList/ProjectList';
import EditProjectForm from '../EditProject/EditProjectForm';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../../NewTaskForm/NewTaskForm';
import EditTaskForm from '../EditTaskForm/EditTaskForm';

const ProjectHeader = () => {

    const [newProject, setNewProject] = useState(false);
    const handleNewProject = (e) => {
        e.preventDefault();
        setNewProject(true);
        //console.log("Clicked");
    }



    const [newProjectData, setNewProjectData] = useState([]);
    const [tempProjectData, setTempProjectData] = useState({});
    const handleNewProjectData = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setTempProjectData({ ...tempProjectData, [name]: value });

    }

    //  console.log(newProjectData);


    const handleNewProjectSubmit = (e) => {
        e.preventDefault();
        const projectData = newProjectData;
        projectData.push({ ...tempProjectData, id: projectData.length + 1 });
        setNewProjectData(projectData);
        setNewProject(false);
    }


    const [editProject, setEditProject] = useState(false);
    const handleEditProject = (data) => {

        setEditProject(true);
        setTempProjectData(data);

    }



    const handleSubmitEditProject = (e, id) => {
        e.preventDefault();
        const projectData = newProjectData;
        projectData[id - 1] = tempProjectData;
        setNewProjectData(projectData);
        setEditProject(false);

    }


    const handleDeleteProject = (data) => {
       
        const deleteProject = newProjectData.filter(deleteData => deleteData.id !== data.id);
        setNewProjectData(deleteProject);
    }


    const [singleProject, setSingleProject] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    
    const handleSingleProject = (e, data) => {
        e.preventDefault();
        setSingleProject(true);
        setCurrentProject(data);
        
        // console.log("clicked: ", data);
    }


    const handleBack = (e) => {
        e.preventDefault();
        setSingleProject(false);
        console.log("check Back");
    }


    const [newTask, setNewTask] = useState(false);
    const handleNewTask = (e) => {
        e.preventDefault(e);
        setNewTask(true);
        // console.log('Check Add Task')
    }


    const [newTaskData, setNewTaskData] = useState([]);
    const [tempTaskData, setTempTaskData] = useState({})
    const handleNewTaskData = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        if(name == 'projectId') {
            const newValue = parseInt(value);
            setTempTaskData({ ...tempTaskData, [name]: newValue });
        }
        else {
            setTempTaskData({ ...tempTaskData, [name]: value });
        }
        // setTempTaskData({ ...tempTaskData, [name]: value });
    }
    console.log(tempTaskData);
    // console.log("checked:", newTaskData);


    // const [singleProjectTaskData, setSingleProjectTaskData] = useState([]);
    const handleNewTaskSubmit = (e) => {
        e.preventDefault();
        console.log(tempTaskData);
        const addTaskData = newTaskData
        addTaskData.push({ ...tempTaskData, id: addTaskData.length + 1 });
        setNewTaskData(addTaskData);
        // const taskData = newTaskData.filter(data => data.projectId === currentProject.id);
        // setSingleProjectTaskData(taskData);
        setNewTask(false);
    }

   

    


    const [editTask, setEditTask] = useState(false);
    const handleEditTask = (e,data) => {
        e.preventDefault();
        setTempTaskData(data);
        setEditTask(true);
        //console.log("clicked");
    }


    const handelEditTaskSubmit = (e, id) => {
        e.preventDefault();
        console.log("clicked");
        let taskDataN = newTaskData;
        taskDataN[id - 1] = tempTaskData;
        setNewTaskData(taskDataN);
        setEditTask(false);
    }

    const handleDeleteTask = (e, data) => {
        const deleteTaskData = newTaskData.filter(deleteTaka => deleteTaka.id !== data.id);
        setNewTaskData(deleteTaskData); 
    }





    return (
        <div>
            <div >
                <h1 className="text-center mt-5"> <span style={{borderBottom:"3px solid black"}} > Project Management System </span>  </h1>
            </div>

            {
                singleProject ?
                    (
                        <>
                            {
                                newTask ?
                                    (
                                        <NewTaskForm
                                            handleNewTaskData={handleNewTaskData}
                                            handleNewTaskSubmit={handleNewTaskSubmit}
                                            newProjectData={newProjectData}
                                        ></NewTaskForm>
                                    )
                                    :
                                    (
                                        <>
                                            {
                                                editTask ?
                                                    (
                                                        <EditTaskForm
                                                            tempTaskData={tempTaskData}
                                                            handleNewTaskData={handleNewTaskData}
                                                            handelEditTaskSubmit={handelEditTaskSubmit}
                                                            newProjectData={newProjectData}
                                                        ></EditTaskForm>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            <div className="d-flex justify-content-center" >
                                                                <div className="w-75" >
                                                                   
                                                                    <TaskList
                                                                        handleBack={handleBack}
                                                                        newTaskData={newTaskData}
                                                                        currentProject={currentProject}
                                                                        // singleProjectTaskData={singleProjectTaskData}
                                                                        handleEditTask={handleEditTask}
                                                                        handleDeleteTask={handleDeleteTask}
                                                                        handleNewTask={handleNewTask}
                                                                    >

                                                                    </TaskList>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                            }
                                        </>
                                    )
                            }
                        </>
                    )

                    :
                    (
                        <>

                            {
                                newProject ?
                                    (
                                        <NewProjectForm
                                            handleNewProjectData={handleNewProjectData}
                                            handleNewProjectSubmit={handleNewProjectSubmit}

                                        ></NewProjectForm>
                                    )
                                    :
                                    (
                                        <>
                                            {
                                                editProject ?
                                                    (
                                                        <EditProjectForm
                                                            tempProjectData={tempProjectData}
                                                            handleNewProjectData={handleNewProjectData}
                                                            handleSubmitEditProject={handleSubmitEditProject}
                                                        >

                                                        </EditProjectForm>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            <div className="d-flex justify-content-center" >
                                                                <div className="w-75">

                                                                    <h2 className="text-center mt-3" >Project List(<span style={{ color: "red" }} >{newProjectData.length}</span>)  </h2>
                                                                    <div className=" d-flex justify-content-end " >
                                                                        <button className="btn btn-outline-primary  mb-2" onClick={(e) => handleNewProject(e)} >  <FontAwesomeIcon icon={faPlus} /> <b>New Project</b></button>
                                                                    </div>
                                                                    <ProjectList
                                                                        newProjectData={newProjectData}
                                                                        handleEditProject={handleEditProject}
                                                                        handleDeleteProject={handleDeleteProject}
                                                                        handleSingleProject={handleSingleProject}
                                                                        newTaskData={newTaskData}
                                                                    >

                                                                    </ProjectList>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                            }
                                        </>
                                    )
                            }

                        </>
                    )
            }
        </div>
    );
};

export default ProjectHeader;