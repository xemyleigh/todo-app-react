
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TasksForm from './components/TasksForm';
import TodoList from './components/TodoList'
import ListsForm from './components/ListsForm'
import ListsList from './components/ListsList';
import Header from './components/Header'
import { useSelector } from 'react-redux';


function App() {
    const tasks = useSelector(state => Object.values(state.tasks.entities))
    console.log(tasks)

  return (
    <div className="container text-white mt-5">
        <Header />
        <div className="row">
            <div className="col-lg-5 col-md-12 px-4 px-md-2 mb-3">
                <div className='bg-info bg-gradient rounded p-4'>
                    <h1>Lists</h1>
                    <ListsForm />
                </div>
            </div>
            <div className="col-lg-7 col-md-12 px-4 px-md-2 mb-3">
                <div className='bg-info bg-gradient rounded p-4'>
                    <h1>Tasks</h1>
                    <TasksForm />
                </div>
            </div>  
        </div>
        <div className="row">
            <ListsList />
            <TodoList />
        </div>
    </div>
  );
}

export default App;
