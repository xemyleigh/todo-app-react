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
        <div className="col-lg-7 col-md-12 px-4 px-md-2 mb-3">
            <div className='bg-info shadow bg-gradient rounded p-4'>
                <h1><b>Tasks</b></h1>
                <form className="my-3 form-inline" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <div class="form-floating mb-3">
                                    <input type="" id='task' required onChange={taskHandler} value={data.task} className="form-control mb-2"  aria-describedby="emailHelp" placeholder="Type your task here" />
                                    <label for="floatingInput">Task</label>
                                </div>
                                <div class="form-floating">
                                    <input type="" id='taskDescription' onChange={descriptionHandler} value={data.description} className="form-control" aria-describedby="emailHelp" placeholder="Task description" />
                                    <label for="floatingInput">Task description</label>
                                </div>


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