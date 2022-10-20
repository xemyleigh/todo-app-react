
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import React from 'react';
import MainPage from './components/MainPage';
import Layout from './components/Layout'
import { useSelector } from 'react-redux';
import Heading from './components/Heading';
import { Routes, Route } from 'react-router-dom'
import {
    BrowserRouter as Router
  } from 'react-router-dom';
import Info from './components/Info';


const App = () => {
    const tasks = useSelector(state => Object.values(state.tasks.entities))
    console.log(tasks)

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<MainPage />} />
                <Route path='info' element={<Info />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
