import React, { useState } from 'react'
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


const roles = ['admin', 'other']


function getUsers() {
    var el = document.getElementsByTagName('select')[0];
    console.log('el', el);
    console.log(getSelectValues(el));
}

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    console.log('select', select.options);
    var opt;
  
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
}

export default () => {
    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [selectState, setSelectState] = useState({})

    const filteredData = matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']})    
    
    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE;
    const currentPageData = filteredData
        .slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(filteredData.length / PER_PAGE);

    function handlePageClick({selected: selectedPage}) {
        setCurrentPage(selectedPage)
    }

    function handleChange(e) {
        const {name, value} = e.target
        setSelectState((prev) => {
            return {
                ...prev, 
                [name]: value
            }
        })
    }

    return (
        <div className="page-wrap">
            <div className="user-roles-flexlayout">
                <div className="select-user-select-role">
                    <p>Select one or more Users</p>
                    <select name="userrole" id="" multiple className="user-select">
                        {userRoles.map((i, index) => (<option key={index} value={i.username}>{i.username}</option>))}
                    </select>

                    <p>(Select multiple using the ctrl key)</p>

                    <hr/>
                    <p>Select the Role to assign</p>
                    
                    <select name="role" id="" multiple className="role-select" onChange={handleChange}>
                        {roles.map((i, index) => (<option key={index} value={i}>{i}</option>))}
                    </select>
                    
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
                                setCurrentPage(0)
                                setSearchInput(e.target.value)
                            }} />
                        </div>

                        <UserRoles userRoles={currentPageData} />

                        {!matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']}).length ? (<div className="nothing-to-show">Nothing to show</div>) : null}
                        
                        {matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']}).length ? (<div className="table-pagination-section">
                            {/* <div>Showing 1 to  of {matchSorter(userRoles, searchInput, {keys: ['username', 'email', 'role']}).length} entries</div> */}
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
        <div className="table-container">
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
        	</table>
        </div>)
}



