import React from "react";
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';


const TodoList = () => {
    const tasks = useSelector(state => Object.values(state.tasks.entities))
    const activeList = useSelector(state => state.activeList.value)
    const filteredTasks = (activeList === 'General') ? tasks : tasks.filter(task => task.list === activeList)

    if (filteredTasks.length > 0) {
        return (
            <div className='col-9 px-2'>
                <div className='bg-transparent bg-gradient rounded p-4 mt-3'>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                {filteredTasks.map(task => <TodoItem task={task} key={task.id} />)}
                            </ul>                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default TodoList