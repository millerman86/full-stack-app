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
            {/* Render Table */}
            <table style={{width: "100%"}}>
                <tr>
                    <th className="project-name">Name</th>
                    <th className="project-description">Description</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
        </div>

    </div>)
}