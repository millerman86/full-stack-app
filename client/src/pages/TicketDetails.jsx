import React from 'react'

export default () => {
    return (
    <div>

        <div className="ticket-details-and-comments-flex">
            <div className="left-column"> 
                <header>
                    <h1>Details for Ticket {'ticket number'}</h1>
                    <a href="" className="back-to-list">Back to List</a> | <a href="" className="edit-ticket">Edit Ticket</a>
                </header>
                <div>
                    <div>
                        <h3 className="ticket-title">TICKET TITLE</h3>
                        <p className="ticket-title-text">Great Work</p>
                    </div>
                    <div>
                        <h3 className="ticket-description">TICKET DESCRIPTION</h3>
                        <p className="ticket-description-text">Keep on plugging in the code, you're getting there</p>
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
            <div className="right-column">
                <p className="add-a-comment">Add a Comment?</p>
                <div>
                    <input type="text"/><button>Add</button>
                </div>
                <div>
                    <header></header>
                    <span>Show {10} entries</span> 
    
                    <input type="text"/>
                    <table>
                        <tr>
                            <th className="commenter">Commenter</th>
                            <th className="message">Message</th>
                            <th className="created">Created</th>
                        </tr>
                        <tr>
                            <td className="commenter-data"></td>
                            <td className="message-data"></td>
                            <td className="created-data"></td>
                        </tr>
                    </table>
                    <div>
                        <div>Showing 0 to 0 of 0 entries</div>
                        <div><span>Previous</span><span>Next</span></div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="ticket-history-and-attachment-flex">
            <div>
                <header></header>
                <span>Show {10} entries</span> 
                <input type="text"/>
    
                <table>
                    <tr>
                        <th className="property">Property</th>
                        <th className="old-value">Old Value</th>
                        <th className="new-value">New Value</th>
                        <th className="date-changed">Date Changed</th>
                    </tr>
                    <tr>
                        <td className="property-data"></td>
                        <td className="old-value-data"></td>
                        <td className="new-value-data"></td>
                        <td className="date-changed-data"></td>
                    </tr>
                </table>
    
                <div className="show-entries">
                    <div>Showing 1 to 3 of 3 entries</div>
                    <div><span>Previous</span><span>1</span><span>Next</span></div>
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <th className="file">File</th>
                        <th className="uploader">Uploader</th>
                        <th className="notes">Notes</th>
                        <th className="created">Created</th>
                    </tr>
                    <tr>
                        <td className="file-data"></td>
                        <td className="uploader-data"></td>
                        <td className="notes-data"></td>
                        <td className="created-data"></td>
                    </tr>
                </table>
            </div>
        </div>
       
    </div>)
}