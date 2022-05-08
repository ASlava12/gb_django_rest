import React from 'react';
import ToDo from '../../API/ToDo';
import PageTable from '../PageTable';

const TodoTable = () => {
    const headers = ["id", "project_name", "user_name", "text", "create_at", "update_at"];

    async function getToDo() {
        let todos = await ToDo.getAll();
        for (let todo in todos.data.results) {
            const parseURL = todos.data.results[todo]["url"].split('/');
            todos.data.results[todo]["id"] = parseURL[parseURL.length - 2];
            todos.data.results[todo]["project_name"] = todos.data.results[todo].project.name
            todos.data.results[todo]["user_name"] = todos.data.results[todo].user.username
        }
        return todos;
    }

    return (
        <PageTable headers={headers} fetchData={getToDo}/>
    )
}

export default TodoTable;