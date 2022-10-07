import React from "react";
import ListItem from './ListItem'
import { useSelector } from 'react-redux';


const ListsList = () => {
    const lists = useSelector(state => Object.values(state.lists.entities))
    console.log(lists)

    return (
        <div className='col-lg-3 col-md-12 px-4 px-md-2 mb-3'>
            <div className='bg-transparent bg-gradient rounded p-4'>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            {lists.map(list => <ListItem list={list} key={list.id}/>)}
                        </ul>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListsList