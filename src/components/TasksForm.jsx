import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { actions as tasksActions} from "../slices/tasksSlice";
import uniqueId from 'lodash/uniqueId'

const TasksForm = () => {
    const [data, setValue] = useState({
        task: '',
        description: ''
    })

    const taskHandler = (e) => setValue({...data, task: e.target.value})
    const descriptionHandler = (e) => setValue({...data, description: e.target.value})
    const dispatch = useDispatch()
    const activeList = useSelector(state => state.activeList.value)
    console.log(data)
    const submitHandler = (e) => {
        console.log(data)
        e.preventDefault()
        dispatch(tasksActions.addTask({ name: data.task, description: data.description, id: uniqueId(), completed: false, list: activeList}))
        setValue({
            task: '',
            description: ''
        })
        console.log(data)

    }

    return (
        <div className="row">
        <div className="col">
            <form className="my-3 form-inline" onSubmit={submitHandler}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            {/* <label htmlFor="task" className="invisible">Task</label> */}
                            <input type="" id='task' required onChange={taskHandler} value={data.task} className="form-control p-2 mb-2"  aria-describedby="emailHelp" placeholder="Type your task here" />
                            {/* <label htmlFor="taskDescription" className="invisible">Task</label> */}
                            <input type="" id='taskDescription'  onChange={descriptionHandler} value={data.description} className="form-control p-2" aria-describedby="emailHelp" placeholder="Task description" />

                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary h-100">Add task</button>
                    </div>
                </div>
            </form>   
        </div>
    </div>

    )
}

export default TasksForm;