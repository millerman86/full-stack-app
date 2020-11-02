import React from 'react'
import { useRouteMatch } from 'react-router-dom'



let tickets = [
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
                    <h1>Your Tickets</h1>
                    <a href="" className="back-to-list">All the Tickets in the Database</a> 
                </header>
                <div className="table-data-and-input">
                    <span>Showing <span>{10}</span> entries </span>
                    <input type="text"/>
                </div>
                <YourTickets tickets={tickets} />
                {!tickets.length ? <div>Nothing to Show</div> : null}
            </div>
        </div>
    )
}


function YourTickets(props) {
    const {tickets} = props 

    return (
        <table>
            <thead>
                <tr>
                    <th className="title">Title</th>
                    <th className="project-name">Project Name</th>
                    <th className="developer-assigned">Developer Assigned</th>
                    <th className="ticket-priority">Ticket Priority</th>
                    <th className="ticket-status">Ticket Status</th>
                    <th className="ticket-type">Ticket Type</th>
                    <th className="created">Created</th>
                    <th className="editorassign-and-details"></th>
                </tr>
            </thead>
            <tbody>

                {tickets.map((ticket, i) => {
                    return (
                        <tr key={i}>
                            <td className="title-data">blah</td>
                            <td className="project-name-data">blah</td>
                            <td className="developer-assigned-data">blah</td>
                            <td className="ticket-priority-data">blah</td>
                            <td className="ticket-status-data">blah</td>
                            <td className="ticket-type-data">blah</td>
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