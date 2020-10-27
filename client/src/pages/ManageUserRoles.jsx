import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import tablestyles from './tablestyles.css'

const userRoles = [
    {
        username: 'amren', 
        email: 'amrenmiller@gmail.com', 
        role: 'admin'
    }, 
    {
        username: 'amren', 
        email: 'amrenmiller@gmail.com', 
        role: 'admin'
    }, 
    {
        username: 'amren', 
        email: 'amrenmiller@gmail.com', 
        role: 'admin'
    }, 
]


export default () => {
    const match = useRouteMatch('')

    return (
    <div>
        <div className="user-roles-flexlayout">
            <div>
                <p>Select 1 or more Users</p> 
                <select className="user-selection">

                </select>
                <hr/>
                <p>Select the Role to assign</p>
                <select className="user-selection">

                </select>
            </div>
            <div>
                <header>f</header>
                Show {10} entries  
                <input type="text"/>
                <table style={{width: "100%"}}>
                    <tr>
                        <th className="username">UserName</th>
                        <th className="email">Email</th>
                        <th className="role">Role</th>
                    </tr>
                    {userRoles.map((user) => {
                        return (
                            <tr>
                                <td className="username-data">{user.username}</td>
                                <td className="email-data">{user.email}</td>
                                <td className="role-data">{user.role}</td>
                            </tr>
                        )
                    })}
                </table>
                {!userRoles.length ? (<div>Nothing to show</div>) : null}
                <div>
                    <div>Showing 1 to 10 of 13 entries</div>
                    <div><span>Previous</span><span>1</span><span>2</span><span>Next</span></div>
                </div>
            </div>
        </div>
    </div>)
}