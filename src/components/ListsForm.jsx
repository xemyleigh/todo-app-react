import React, { useRef, useState } from "react"
import { useDispatch } from 'react-redux';
import { actions as listsAction} from "../slices/listsSlice";
import uniqueId from 'lodash/uniqueId'

const TasksForm = () => {
    const [value, setValue] = useState('')

    const onChange = (e) => setValue(e.target.value)
    const dispatch = useDispatch()
    
    const input = useRef('')
    // input.current.focus()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('addddddddddddddddddddddddd')
        console.log(uniqueId())
        dispatch(listsAction.addList({id: uniqueId(), listName: value}))
        setValue('')
        input.current.focus()
    }

    return (
        <div className="row">
        <div className="col">
            <form className="my-3 form-inline" onSubmit={submitHandler}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <input type="" ref={input} onChange={onChange} value={value} className="form-control p-2" id="input" required placeholder="Type your list here" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary h-100">Add list</button>
                    </div>
                </div>
            </form>   
        </div>
    </div>

    )
}

export default TasksForm;