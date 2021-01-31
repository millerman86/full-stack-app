import React, { useState } from 'react'
import { matchSorter } from 'match-sorter'
import ReactPaginate from 'react-paginate'


let projects = [
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    }, 
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    }, 
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    }, 
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    },
    {
        title: 'blah',
        project: 'blah',
        developerAssigned: 'blah',
        ticketPriority: 'blah',
        ticketStatus: 'blah',
        ticketType: 'blah',
        created: 'blah'
    }, 
]


export default () => {
    const [searchInput, setSearchInput] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    const filteredData = matchSorter(projects, searchInput, {keys: ['title', 'project', 'developerAssigned', 'ticketPriority', 'ticketStatus', 'ticketType', 'created']})    
    
    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE;
    const currentPageData = filteredData
        .slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(filteredData.length / PER_PAGE);

    function handlePageClick({selected: selectedPage}) {
        setCurrentPage(selectedPage)
    }


    return (
        <div className="page-wrap">
            <div className="your-tickets">
                <header className="table-header">
                    <h2>Your Projects</h2>
                    <p>All the projects in the database</p>
                </header>
                <div className="table-data-and-input">
                    <span>Showing <span>{10}</span> entries </span>
                    <input type="text" value={searchInput} onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}/>
                </div>

                <YourTickets projects={currentPageData} />
                
                {!matchSorter(projects, searchInput, {keys: ['title', 'project', 'developerAssigned', 'ticketPriority', 'ticketStatus', 'ticketType', 'created']}).length ? <div className="nothing-to-show">Nothing to Show</div> : null}
                
                {matchSorter(projects, searchInput, {keys: ['title', 'project', 'developerAssigned', 'ticketPriority', 'ticketStatus', 'ticketType', 'created']}).length ? (<div className="table-pagination-section">
                    {/* <div>Showing 1 to 10 of {matchSorter(projects, searchInput, {keys: ['title', 'project', 'developerAssigned', 'ticketPriority', 'ticketStatus', 'ticketType', 'created']}).length} entries</div> */}
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
    )
}


function YourTickets(props) {
    const {projects} = props

    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th className="title">Title</th>
                    <th className="project-name">Project Name</th>
                    <th className="developer-assigned">Developer Assigned</th>
                    <th className="project-priority">Project Priority</th>
                    <th className="project-status">Project Status</th>
                    <th className="project-type">Project Type</th>
                    <th className="created">Created</th>
                    <th className="editorassign-and-details"></th>
                </tr>
                </thead>
                <tbody>
    
                {projects.map((project, i) => {
                    return (
                        <tr key={i}>
                            <td className="title-data">blah</td>
                            <td className="project-name-data">blah</td>
                            <td className="developer-assigned-data">blah</td>
                            <td className="project-priority-data">blah</td>
                            <td className="project-status-data">blah</td>
                            <td className="project-type-data">blah</td>
                            <td className="created-data">blah</td>
                            <td className="editorassign-and-details">
                                <ul>
                                    <li className="edit-or-assign"><a href="">Edit/assign</a></li>
                                    <li className="details"><a href="">Details</a></li>
                                </ul>
                            </td>
                        </tr>
                    )
                })}
    
                </tbody>
            </table>
        </div>
    )
}