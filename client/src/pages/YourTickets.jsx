import React from 'react'
import { useRouteMatch } from 'react-router-dom'


export default () => {
    return (
        <div>
            <header></header>
            Showing {10} entries 
            <input type="text"/>
            <table>
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
                <tr>
                    <td className="title-data"></td>
                    <td className="project-name-data"></td>
                    <td className="developer-assigned-data"></td>
                    <td className="ticket-priority-data"></td>
                    <td className="ticket-status-data"></td>
                    <td className="ticket-type-data"></td>
                    <td className="created-data"></td>
                    <td className="editorassign-and-details">
                        <ul>
                            <li className="edit-or-assign">Edit/assign</li>
                            <li className="details">Details</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}