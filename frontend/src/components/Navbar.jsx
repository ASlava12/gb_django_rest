import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <Link to="users">Пользователи </Link>
            <Link to="projects">Проекты </Link>
            <Link to="todos">Заметки </Link>
        </div>
    );
};

export default Navbar;