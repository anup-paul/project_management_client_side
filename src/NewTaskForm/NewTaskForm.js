import React from 'react';

const NewTaskForm = (props) => {

    const handleNewTaskData = props.handleNewTaskData;
    const handleNewTaskSubmit = props.handleNewTaskSubmit;
    const newProjectData = props.newProjectData;

    const projectData = props.projectData;
    

    return (
        <div>
            <div className="mt-5 " >
                <h2 className="text-center mb-4" >Add Your New Task Data </h2>
                <div className=" d-flex justify-content-center " >

                    <form className="w-50 border border-success border-4 p-5" >
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Task Name</label>
                            <input type="text" onBlur={handleNewTaskData} name="task_name" className="form-control" id="Task_Name101" placeholder="Task Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Task Description</label>
                            <textarea rows="5" type="text" onBlur={handleNewTaskData} name="task_description" className="form-control" id="Task_Description102" placeholder="Task Description" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Task Assign To</label>
                            <input type="text" onBlur={handleNewTaskData} name="task_assign_to" className="form-control" id="Task_Assign_To103" placeholder="Task Assign To" />
                        </div>
                        <div>
                            <label for="exampleFormControlInput1" class="form-label">Select Project</label>
                            <select onChange={handleNewTaskData} name="project_id" class="form-select" aria-label="Default select example">
                                <option selected>Select Project</option>
                                {
                                    projectData.map(project => <option value={project.id} >{project.project_name}</option>)
                                }

                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Task Start Date</label>
                            <input type="date" onBlur={handleNewTaskData} name="task_start_date" className="form-control" id="Task_Start_Date104" placeholder="Task Start Date" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Task End date</label>
                            <input type="date" onBlur={handleNewTaskData} name="task_end_date" className="form-control" id="Task_End_date105" placeholder="Task End date" />
                        </div>
                        <div className="d-flex justify-content-end" >
                            <button onClick={(e) => handleNewTaskSubmit(e)} type="submit" className="btn btn-outline-success">Add task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewTaskForm;