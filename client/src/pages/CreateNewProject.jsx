import React from 'react'


let projects = [
    {
        name: 'myproject', 
        description: 'this is a project', 
    }, 
    {
        name: 'myproject', 
        description: 'this is a project', 
    },
    {
        name: 'myproject', 
        description: 'this is a project'
    }
]

export default () => {
    return (
    <div className="page-wrap">
        <div className="create-new-project-button-wrap">
            <button>Create New Project</button>
        </div>
        <div className="your-projects">
            <header className="table-header">
                <h1>Project Header</h1>
            </header>

            <div className="table-data-and-input">
                <span>Show <span><span className="show-number">10</span> </span>entries</span>  
                <input type="text"/>
            </div>
            <YourProjects projects={projects} />

            {!projects.length ? (<div className="nothing-to-show">Nothing to show</div>) : null}
            <div className="table-pagination-section">
                <div><span>Showing 1 to 5 of 5 entries</span></div>
                <div><span>Previous</span><span>1</span><span>2</span><span>Next</span></div>
            </div>
        </div>
    </div>)
}


function YourProjects(props) {
    const {projects} = props
    return (
    <table>
        <thead>
            <tr>
                <th className="project-name">Project Name</th>
                <th className="project-description">Description</th>
                <th className="manage-and-details-links">Manage Details</th>
            </tr>
        </thead>
        <tbody>
            {projects.map((project, i) => {
                return (
                    <tr key={i}>
                        <td className="project-name-data">{project.name}</td>
                        <td className="project-description-data">{project.description}</td>
                        <td className="manage-and-details-links">
                            <ul>
                                <li>
                                    <a href="">Manage Users</a>
                                </li>
                                <li>
                                    <a href="">Details</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}