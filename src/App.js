
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
    <div className="container text-dark mt-5">
        <Header />
        <div className="row">
            <div className="col-lg-5 col-md-12 px-4 px-md-2 mb-3">
                <div className='bg-light shadow bg-gradient rounded p-4'>
                    <h1><b>Lists</b></h1>
                    <ListsForm />
                </div>
            </div>
            <div className="col-lg-7 col-md-12 px-4 px-md-2 mb-3">
                <div className='bg-info shadow bg-gradient rounded p-4'>
                    <h1><b>Tasks</b></h1>
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
