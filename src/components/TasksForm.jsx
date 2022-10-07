import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { actions as tasksActions} from "../slices/tasksSlice";
import uniqueId from 'lodash/uniqueId'

const TasksForm = () => {
    const [value, setValue] = useState('')

    const onChange = (e) => setValue(e.target.value)
    const dispatch = useDispatch()
    const activeList = useSelector(state => state.activeList.value)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(tasksActions.addTask({ name: value, id: uniqueId(), completed: false, list: activeList}))
        setValue('')

    }

    return (
        <div className="row">
        <div className="col">
            <form className="my-3 form-inline" onSubmit={submitHandler}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <input type="" required onChange={onChange} value={value} className="form-control p-2" id="input" aria-describedby="emailHelp" placeholder="Type your task here" />
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