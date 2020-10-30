import React from 'react'

export default function () {
    return (
    <div className="page-wrap">
        <div className="edit-ticket-background">
            <header className="table-header">
                <h1>Edit Ticket</h1>
                <a href="" className="back-to-list">Change Ticket properties</a> 
            </header>
            <div className="title-and-description-grid">
    

                <div>
                    <h4>Title</h4>
                    <p className="title-text">Great Work</p>
                    <hr/>
                </div>

                <div>
                    <h4>Description</h4>
                    <p className="description-text">Keep on Pluggin in the code, you're getting there</p>
                    <hr/>
                </div>

                <div>
                    <h4>PROJECT</h4>
                    <select className="select-project-name" id=""></select>
                </div>

                <div>
                    <h4>Assigned Developer</h4>
                    <select className="select-developer" id=""></select>
                </div>

                <div>
                    <h4>Ticket Priority</h4>
                    <select className="select-ticket-priority" id=""></select>
                </div>

                <div>
                    <h4>Ticket Status</h4>
                    <select className="select-ticket-status" id=""></select>
                </div>

                <div>
                    <h4>Ticket Type</h4>
                    <select className="select-ticket-type" id=""></select>
                </div>


            </div>
            <div className="backtolist-updateticket">
                <span><a href="back-to-list">Back to List</a></span>
                <span><button>Update Ticket</button></span>
            </div>
        </div>
    </div>
    )
}