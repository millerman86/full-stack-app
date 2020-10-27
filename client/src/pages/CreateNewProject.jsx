import React from 'react'
import { useRouteMatch } from 'react-router-dom'


export default () => {
    useRouteMatch('/df')
    return (
    <div>
        <div>
            <button>Create New Project</button>
        </div>
        <div className="your-projects">
            <header>Project Header</header>
            <table style={{width: "100%"}}>
                <tr>
                    <th className="project-name">Project Name</th>
                    <th className="project-description">Description</th>
                    <th className="manage-and-details-links"></th>
                </tr>
                <tr>
                    <td className="project-name-data"></td>
                    <td className="project-description-data"></td>
                    <td className="manage-and-details-links"></td>
                </tr>
            </table>
            <div>
                <div><span>Showing 1 to 5 of 5 entries</span></div>
                <div><span>Previous</span><span>1</span><span>Next</span></div>
            </div>
        </div>
    </div>)
}