import React from 'react'

export default () => {
    return (
    <div>
        <div className="dashboard-graphs">
            <div className="tickets-by-priority">
                Graph goes here (bar chart)
                <h1>Tickets by Priority</h1>
            </div>
            <div className="tickets-by-type">
                Graph goes here (pie chart)
                <h1>Tickets by Type</h1>
            </div>
            <div className="tickets-by-status">
                Graph goes here (bar chart)
                <h1>Tickets by Status</h1>
            </div>
            <div className="tickets-by-developer">
                Graph goes here (pie chart)
                <h1>Tickets by Developer</h1>
            </div>
        </div>
    </div>)
}
