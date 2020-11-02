import React from 'react'




let personnel = [
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
        description: 'this is a project', 
    }
]

let tickets = [
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
        description: 'this is a project', 
    }
]

export default () => {
    return (
    <div className="page-wrap">
        <div className="white">
            <div className="details-for-project">
                <header className="table-header">
                    <h1>Details for Project #1</h1>
                    <a href="back-to-list">Back to List</a> | <a href="Edit">Edit</a>
                </header>
                <div className="name-and-description-flex">
                    <div>
                        <h3>Project Name</h3>
                        <h1>Demo Project 1</h1>
                    </div>
                    <div>
                        <h3>Project Description</h3> 
                        <h1>This is a project number 1</h1>
                    </div>
                </div>
            </div>
            <div className="assignedpersonnel-and-ticket-details">
                <div className="assigned-personnel">
                    <header className="table-header">
                        <h1>Assigned Personnel</h1>
                        <p>Current Users on this Project</p>
                    </header>
                    <div className="table-data-and-input">
                        <span>Show {10} Entries</span> 
                        <input type="text"/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>E-mail</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>test</td>
                                <td>test</td>
                                <td>test</td>
                            </tr>
                        </tbody>
                    </table>
                    {!personnel.length ? <div>Nothing to show</div> : null}
                    <div className="table-pagination-section">
                        <div><span>Showing 1 to 4 of 4 entries</span></div>
                        <div><span>Previous</span><span>1</span><span>Next</span></div>
                    </div>
                </div>
                <div className="tickets-for-this-project">
                    <header className="table-header">
                        <h1>Tickets for this Project</h1>
                        <p>Condensed Ticket Details</p>
                    </header>
                    <div className="table-data-and-input">
                        <span>Show {10} Entries</span>
                        <input type="text"/>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Submitter</th>
                                <th>Developer</th>
                                <th>Status</th>
                                <th>Created</th>
                                <th>empty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aesthetics Please</td>
                                <td>Amren Miller</td>
                                <td>DemoD Dev</td>
                                <td>Open</td>
                                <td>Today(11/2/2020)</td>
                                <td>
                                    <a href="">More Details</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {!tickets.length ? <div>Nothing to show</div> : null}
                    <div className="table-pagination-section">
                        <div><span>Showing 1 to 4 of 4 entries</span></div>
                        <div><span>Previous</span><span>1</span><span>Next</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}