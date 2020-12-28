import React from 'react'


let ticketHistory = [
    {
        property: 'property',
        oldValue: 'old value',
        newValue: 'new value',
        dateChanged: 'date changed'
    },
    {
        property: 'property',
        oldValue: 'old value',
        newValue: 'new value',
        dateChanged: 'date changed'
    },
    {
        property: 'property',
        oldValue: 'old value',
        newValue: 'new value',
        dateChanged: 'date changed'
    },
]

let ticketComments = [
    {
        commenter: 'amren miller',
        message: 'this is a message',
        created: 'today'
    },
    {
        commenter: 'amren miller',
        message: 'this is a message',
        created: 'today'
    },
    {
        commenter: 'amren miller',
        message: 'this is a message',
        created: 'today'
    }
]


let ticketAttachments = [
    {
        file: 'file',
        uploader: 'uploader',
        notes: 'notes',
        created: 'created'
    },
    {
        file: 'file',
        uploader: 'uploader',
        notes: 'notes',
        created: 'created'
    },
    {
        file: 'file',
        uploader: 'uploader',
        notes: 'notes',
        created: 'created'
    },
]

export default () => {
    return (
        <div className="page-wrap">

            <div className="ticket-details-and-comments-flex">
                <div className="left-column">

                    <div className="details-for-ticket">
                        <header className="table-header">
                            <h1>Details for Ticket {'ticket number'}</h1>
                            <a href="" className="back-to-list">Back to List</a> | <a href="" className="edit-ticket">Edit
                            Ticket</a>
                        </header>

                        <div className="details-for-ticket-layout">
                            <div className="details-for-ticket-column1">
                                <div>
                                    <div>
                                        <h3 className="ticket-title">TICKET TITLE</h3>
                                        <p className="ticket-title-text">Great Work</p>
                                    </div>
                                    <div>
                                        <h3 className="ticket-description">TICKET DESCRIPTION</h3>
                                        <p className="ticket-description-text">Keep on plugging in the code, you're
                                            getting there</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="assigned-developer">ASSIGNED DEVELOPER</h3>
                                        <p className="assigned-developer-role">DemoD Dev</p>
                                    </div>
                                    <div>
                                        <h3 className="submitter">SUBMITTER</h3>
                                        <p className="submitter-role">DemoS Submit</p>
                                    </div>
                                </div>
                            </div>

                            <div className="details-for-ticket-column2">
                                <div>
                                    <div>
                                        <h3 className="project">PROJECT</h3>
                                        <p className="project-title">Demo Project 1</p>
                                    </div>
                                    <div>
                                        <h3 className="ticket-priority">TICKET PRIORITY</h3>
                                        <p className="ticket-priority-level">Medium</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="ticket-status">TICKET STATUS</h3>
                                        <p className="ticket-status-state">Open</p>
                                    </div>
                                    <div>
                                        <h3 className="ticket-type">TICKET TYPE</h3>
                                        <p className="ticket-type-description"></p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="created">CREATED</h3>
                                        <p className="created-date">11/18/2019 9:54:45AM</p>
                                    </div>
                                    <div>
                                        <h3 className="updated">UPDATED</h3>
                                        <p className="updated-lastupdated"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <p className="add-a-comment">Add a Comment?</p>
                    <div className="add-a-comment-input">
                        <input type="text"/>
                        <button>Add</button>
                    </div>
                    <div className="ticket-comments">
                        <header className="table-header">
                            <h1>Ticket Comments</h1>
                            <a href="">All Comments for this Project</a>
                        </header>
                        <div className="table-data-and-input">
                            <span>Show {10} entries</span>
                            <input type="text"/>
                        </div>


                        <TicketComments ticketComments={ticketComments}/>


                        {!ticketHistory.length ? <div>Nothing to show</div> : null}
                        <span>{}</span>
                        <div className="table-data-and-input">
                            <div>Showing 0 to 0 of 0 entries</div>
                            <div><span>Previous</span><span>Next</span></div>
                        </div>


                    </div>
                </div>
            </div>

            <hr/>

            <div className="ticket-history-and-attachment-flex">
                <div className="ticket-history-and-attachment">
                    <header className="table-header">
                        <h1>Ticket History</h1>
                        <a href="">All History Information for this Ticket</a>
                    </header>

                    <TicketHistory ticketHistory={ticketHistory}/>


                    {!ticketComments.length ? <div>Nothing to show</div> : null}

                    <div className="table-pagination-section">
                        <div>Showing 1 to 3 of 3 entries</div>
                        <div><span>Previous</span><span>1</span><span>Next</span></div>
                    </div>
                </div>

                <div className="ticket-history">
                    <header className="table-header">
                        <h1>Ticket Attachment</h1>
                        <a href="">All Files Attached to this Ticket</a>
                    </header>
                    <div className="table-data-and-input">
                        <span>Show {10} entries</span>
                        <input type="text"/>
                    </div>

                    <TicketAttachments ticketAttachments={ticketAttachments}/>

                    {!ticketHistory.length ? <div>Nothing to show</div> : null}

                    <div className="table-pagination-section">
                        <div>Showing 1 to 3 of 3 entries</div>
                        <div><span>Previous</span><span>1</span><span>Next</span></div>
                    </div>
                </div>
            </div>
        </div>)
}


function TicketComments(props) {
    let {ticketComments} = props
    return (
        <table>
            <thead>
            <tr>
                <th className="commenter">Commenter</th>
                <th className="message">Message</th>
                <th className="created">Created</th>
            </tr>
            </thead>
            <tbody>

            {ticketComments.map((ticket, i) => {
                return (
                    <tr key={i}>
                        <td className="commenter-data">{ticket.commenter}</td>
                        <td className="message-data">{ticket.message}</td>
                        <td className="created-data">{ticket.created}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}


function TicketAttachments(props) {
    let {ticketAttachments} = props
    return (
        <table>
            <thead>
            <tr>
                <th className="property">File</th>
                <th className="old-value">Uploader</th>
                <th className="new-value">Notes</th>
                <th className="date-changed">Created</th>
            </tr>
            </thead>
            <tbody>

            {ticketAttachments.map((ticket, i) => {
                return (
                    <tr key={i}>
                        <td className="property-data">{ticket.file}</td>
                        <td className="old-value-data">{ticket.uploader}</td>
                        <td className="new-value-data">{ticket.notes}</td>
                        <td className="date-changed-data">{ticket.created}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}


function TicketHistory(props) {
    let {ticketHistory} = props
    return (
        <table>
            <thead>
            <tr>
                <th className="file">Property</th>
                <th className="uploader">Old Value</th>
                <th className="notes">New Value</th>
                <th className="created">Date Changed</th>
            </tr>
            </thead>
            <tbody>

            {ticketHistory.map((ticket, i) => {
                return (
                    <tr key={i}>
                        <td className="file-data">{ticket.property}</td>
                        <td className="uploader-data">{ticket.oldValue}</td>
                        <td className="notes-data">{ticket.newValue}</td>
                        <td className="created-data">{ticket.dateChanged}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
    )
}