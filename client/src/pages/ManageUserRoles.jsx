import React from 'react'
import {useRouteMatch} from 'react-router-dom'

export default function () {
    const match = useRouteMatch('')
    return (
    <div>
        <div className="user-roles-flexlayout">
            <div>
                Select 1 or more Users 
                <select className="user-selection">

                </select>
                <hr/>
                Select the Role to assign
                <select className="user-selection">

                </select>
            </div>
            <div>
                <header></header>
                Show {10} entries  
                <input type="text"/>
                <table>
                    <tr>
                        <th className="username">UserName</th>
                        <th className="email">Email</th>
                        <th className="role">Role</th>
                    </tr>
                    <tr>
                        <td className="username-data"></td>
                        <td className="email-data"></td>
                        <td className="role-data"></td>
                    </tr>
                </table>
                <div>
                    <div>Showing 1 to 10 of 13 entries</div>
                    <div><span>Previous</span><span>1</span><span>2</span><span>Next</span></div>
                </div>
            </div>
        </div>
    </div>)
}