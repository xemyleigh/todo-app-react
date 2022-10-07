import React from "react";
import { useDispatch } from 'react-redux';
import { actions as tasksActions} from "../slices/tasksSlice";



const TodoItem = ({task}) => {
    const dispatch = useDispatch()

    const checkboxHandler = (e) => {
        console.log(task)
        dispatch(tasksActions.toggleComplete({ task }))
    }

    const deleteTaskHandler = (id) => () => {
        dispatch(tasksActions.removeTask(id))
    }

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed && 'list-group-item-success'}`}>
            <div className="d-flex align-items-center gap-3">
                <div className="form-check form-switch p-0">
                    <input className="m-3 form-check-input" type="checkbox" checked={task.completed} onChange={checkboxHandler}/>
                </div>

                {task.name}
            </div>
            <button className="btn btn-danger" onClick={deleteTaskHandler(task.id)}>Delete</button>
        </li>
    )
}

export default TodoItem