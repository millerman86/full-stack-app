import React from 'react'


let projects = [
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    }
]


export default () => {
    return (
        <div className="page-wrap">
            <div className="your-tickets">
                <header className="table-header">
                    <h1>Your Projects</h1>
                    <a href="" className="back-to-list">All the Projects in the Database</a>
                </header>
                <div className="table-data-and-input">
                    <span>Showing <span>{10}</span> entries </span>
                    <input type="text"/>
                </div>
                <YourTickets projects={projects}/>
                {!projects.length ? <div>Nothing to Show</div> : null}
            </div>
        </div>
    )
}


function YourTickets(props) {
    const {projects} = props

    return (
        <table>
            <thead>
            <tr>
                <th className="title">Title</th>
                <th className="project-name">Project Name</th>
                <th className="developer-assigned">Developer Assigned</th>
                <th className="project-priority">Project Priority</th>
                <th className="project-status">Project Status</th>
                <th className="project-type">Project Type</th>
                <th className="created">Created</th>
                <th className="editorassign-and-details"></th>
            </tr>
            </thead>
            <tbody>

            {projects.map((project, i) => {
                return (
                    <tr key={i}>
                        <td className="title-data">blah</td>
                        <td className="project-name-data">blah</td>
                        <td className="developer-assigned-data">blah</td>
                        <td className="project-priority-data">blah</td>
                        <td className="project-status-data">blah</td>
                        <td className="project-type-data">blah</td>
                        <td className="created-data">blah</td>
                        <td className="editorassign-and-details">
                            <ul>
                                <li className="edit-or-assign"><a href="">Edit/assign</a></li>
                                <li className="details"><a href="">Details</a></li>
                            </ul>
                        </td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}