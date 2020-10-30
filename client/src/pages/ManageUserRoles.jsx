import React from 'react'
import {
    useRouteMatch
} from 'react-router-dom'
import Downshift from 'downshift'
import './styles.css'

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
    return (
    <div className="page-wrap">
        <div className="manage-user-roles">
            <h1>Manage User Roles</h1>
        </div>
        <div className="user-roles-flexlayout">
            <div className="select-user-select-role">
                <p>Select 1 or more Users</p> 


                <Downshift>
                    {downshift => (
                        <div>
                            <div>amren</div>
                            <div>miller</div>
                        </div>
                    )}
                </Downshift>


                <hr/>
                <p>Select the Role to assign</p>
                <Downshift>
                    {downshift => (
                        <div>
                            <div>amren</div>
                            <div>miller</div>
                        </div>
                    )}
                </Downshift>
            </div>

            <div>
                <div className="personnel-section">
                    <header>
                        <h2>Your personnel</h2>
                        <p>All the users in your database</p>
                    </header>
                    <div className="table-data-and-input">
                        <span>Show <span><span className="show-number">10</span> </span>entries</span>  
                        <input type="text"/>
                    </div>
    
                    <UserRoles userRoles={userRoles} />
    
                    {!userRoles.length ? (<div className="nothing-to-show">Nothing to show</div>) : null}
                    <div className="table-pagination-section">
                        <div>Showing 1 to 10 of 13 entries</div>
                        <div><span>Previous</span><span>1</span><span>2</span><span>Next</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}


function UserRoles(props) {
    return ( 
    <table>
        <thead>
            <tr>
                <th className="username">User Name</th>
                <th className="email">Email</th>
                <th className="role">Role</th>
            </tr>
        </thead>
        <tbody>
            {props.userRoles.map((user, i) => {
                return (
                    <tr key={i}>
                        <td className="username-data">{user.username}</td>
                        <td className="email-data">{user.email}</td>
                        <td className="role-data">{user.role}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>)
}
