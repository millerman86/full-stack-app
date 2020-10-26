import React from 'react'


export default () => {
    useRouteMatch('/df')
    return (
    <div>
        <div>
            <header className="details-for-project">
                <h1>Details for Project #1</h1>
                <a href="back-to-list">Back to List</a> | <a href="Edit">Edit</a>
            </header>
            <div>
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
        <div>
            <div className="assigned-personnel">
                <header></header>
                Show {10} Entries 

                <input type="text"/>
                <table>
                    <tr>
                        <th>User Name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>February</td>
                        <td>$100</td>
                        <td>$80</td>
                    </tr>
                </table>
                <div>
                    <div>Showing 1 to 4 of 4 entries</div>
                    <div><span>Previous</span><span>1</span><span>Next</span></div>
                </div>
            </div>
            <div className="tickets-for-this-project">
                <header></header>
                Show {10} Entries

                <input type="text"/>
                <table>
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>February</td>
                        <td>$80</td>
                    </tr>
                </table>
                <div>
                    <div>Showing 1 to 4 of 4 entries</div>
                    <div><span>Previous</span><span>1</span><span>Next</span></div>
                </div>
            </div>
        </div>
    </div>)
}