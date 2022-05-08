import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProjectsTable from './components/pages/ProjectsTable';
import TodoTable from './components/pages/TodoTable';
import UsersTable from './components/pages/UsersTable';


const App = () => {
    const menu = {
        "projects": () => <ProjectsTable/>,
        "todos": () => <TodoTable/>,
        "users": () => <UsersTable/>,
    };
    let menuLinks = [];
    for (let element in menu) {
      menuLinks.push(element);
    }

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {menuLinks.map(link =>
                    <Route path={link} element={menu[link]()}/>
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
