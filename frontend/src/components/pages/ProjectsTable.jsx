import React from 'react';
import Projects from '../../API/Projects';
import PageTable from '../PageTable';

const ProjectsTable = () => {
    const headers = ["name", "repository_link", "all_user"];

    async function getProjects() {
        let projects = await Projects.getAll();
        for (let project in projects.data.results) {
            let all_user = [];
            for (let user in projects.data.results[project].users) {
                all_user.push(projects.data.results[project].users[user]["username"]);
            };
            projects.data.results[project].all_user = all_user.join(',');
            projects.data.results[project].id = project
        }
        return projects;
    }

    return (
        <PageTable headers={headers} fetchData={getProjects}/>
    )
}

export default ProjectsTable;