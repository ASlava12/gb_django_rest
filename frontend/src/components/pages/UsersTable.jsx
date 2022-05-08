import React from 'react';
import Users from '../../API/Users';
import PageTable from '../PageTable';

const UsersTable = () => {
    const headers = ["username", "first_name", "last_name", "email"];
    return (
        <PageTable headers={headers} fetchData={Users.getAll}/>
    )
}

export default UsersTable;