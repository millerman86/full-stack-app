import React from 'react'

export default function () {
    return (
    <div>
        <div>
            <header></header>
            <div className="title-and-description-flex">
                <div className="title-column">

                    <h2>Title</h2>
                    <div className="title-text">Great Work</div>

                    <hr/>

                    <h3>PROJECT</h3>
                    <select name="select-project-name" id=""></select>

                    <h3>Ticket Priority</h3>
                    <select name="select-ticket-priority" id=""></select>

                    <h3>Ticket Type</h3>
                    <select name="select-ticket-type" id=""></select>
                </div>
                <div className="description-column">
                    
                    <h2>Description</h2>
                    <div className="description-text">Keep on Pluggin in the code, you're getting there</div>

                    <hr/>

                    <h3>Assigned Description</h3>
                    <select name="select-developer" id=""></select>

                    <h3>Ticket Status</h3>
                    <select name="select-ticket-status" id=""></select>
                </div>
            </div>
        </div>
    </div>)
}