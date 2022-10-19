import React from "react";
import { useDispatch } from 'react-redux';
import { actions as tasksActions} from "../slices/tasksSlice";



const TaskItem = ({task}) => {
    const dispatch = useDispatch()

    const checkboxHandler = (e) => {
        console.log(task)
        dispatch(tasksActions.toggleComplete({ task }))
    }

    const deleteTaskHandler = (id) => () => {
        dispatch(tasksActions.removeTask(id))
    }

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center gap-3 ${task.completed && 'list-group-item-success'}`}>
            <div className="d-flex align-items-center gap-3">
                <div className="form-check form-switch p-0">
                    <input className="m-3 form-check-input" type="checkbox" checked={task.completed} onChange={checkboxHandler}/>
                </div>
                <div className="row flex-wrap">
                    <p className="text-break m-0">{task.name}</p>
                    {(task.description !== '') ? <small className="text-muted mt-1">{task.description}</small> : null}
                </div>
            </div>
            <button className="btn btn-danger d-block" onClick={deleteTaskHandler(task.id)}>Delete</button>

        </li>
    )
}

export default TaskItem