import React, { useState } from 'react'
import {
    useRouteMatch
} from 'react-router-dom'
import Downshift from 'downshift'
import { matchSorter } from 'match-sorter'
import ReactPaginate from 'react-paginate'


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
    {
        username: 'amren',
        email: 'amrenmiller@gmail.com',
        role: 'admin'
    },
    {
        username: 'bob',
        email: 'bobmiller@gmail.com',
        role: 'admin'
    },
    {
        username: 'bob',
        email: 'bobmiller@gmail.com',
        role: 'admin'
    },
    {
        username: 'bob',
        email: 'bobmiller@gmail.com',
        role: 'admin'
    },
    {
        username: 'bob',
        email: 'bobmiller@gmail.com',
        role: 'admin'
    },
    {
        username: 'bob',
        email: 'bobmiller@gmail.com',
        role: 'admin'
    },
]

export default () => {
    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    
    const filteredData = matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']})    
    
    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE;
    const currentPageData = filteredData
        .slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(userRoles.length / PER_PAGE);

    function handlePageClick({selected: selectedPage}) {
        setCurrentPage(selectedPage)
    }

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
                        <header className="table-header">
                            <h2>Your personnel</h2>
                            <p>All the users in your database</p>
                        </header>
                        <div className="table-data-and-input">
                            <span>Show <span><span className="show-number">10</span> </span>entries</span>
                            <input type="text" value={searchInput} onChange={(e) => {
                                setSearchInput(e.target.value)
                            }} />
                        </div>

                        <UserRoles userRoles={currentPageData} />

                        {!matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']}).length ? (<div className="nothing-to-show">Nothing to show</div>) : null}
                        
                        {matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']}).length ? (<div className="table-pagination-section">
                            <div>Showing 1 to 10 of {matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']}).length} entries</div>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active'}
                            />
                        </div>) : null}
                        
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
