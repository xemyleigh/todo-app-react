import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actions as activeListActions} from "../slices/activeListSlice";
import cn from 'classnames';



const ListItem = ({list}) => {
    const dispatch = useDispatch()

    // const checkboxHandler = (e) => {
    //     dispatch(tasksActions.toggleComplete({ list }))
    // }



    const listHandler = (name) => () => {
        dispatch(activeListActions.updateActiveList(name))
    }

    const activeList = useSelector(state => state.activeList.value)

    const classes = cn('btn mb-2', {
        'btn-outline-info': (list.listName !== activeList),
        'btn-info': (list.listName === activeList)
    })
    return (
        // <li className='list-group-item d-flex justify-content-between align-items-center'>
        //     {list.listName}
        //     <div className="d-flex gap-3">
                <button className={classes} onClick={listHandler(list.listName)}>{list.listName}</button>
                // <button className="btn btn-danger" onClick={deleteTaskHandler(list.id)}>Delete</button>

        //     </div>

        // </li>
    )
}

export default ListItem