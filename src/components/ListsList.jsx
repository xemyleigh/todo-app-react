import React from "react";
import ListItem from './ListItem'
import { useSelector } from 'react-redux';


const ListsList = () => {
    const lists = useSelector(state => Object.values(state.lists.entities))
    console.log(lists)

    return (
        <div className='col-lg-3 col-md-12 px-4 px-md-2 mb-3'>
            <div className='bg-light bg-gradient shadow rounded p-4'>
                <div className="row">
                    <div className="col">
                        <ul className=" d-flex flex-wrap p-0 gap-2 m-0">
                            {lists.map(list => <ListItem list={list} key={list.id}/>)}
                        </ul>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListsList