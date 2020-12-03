import './App.css';
import axios from 'axios'

import React, {
  useContext
} from 'react';

import {
  UserContext
} from './context/UserProvider'

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  useHistory,
  useRouteMatch
} from 'react-router-dom'

import {
  useState, useEffect
} from 'react'

import ProtectedRoute from './components/ProtectedRoute'

import Auth from './components/auth/Auth'

import DemoUserLogin from './pages/DemoUserLogin'
import CreateNewProject from './pages/CreateNewProject'
import DashboardHome from './pages/DashboardHome'
import EditTicket from './pages/EditTicket'
import ManageUserRoles from './pages/ManageUserRoles'
import ProjectDetails from './pages/ProjectDetails'
import TicketDetails from './pages/TicketDetails'
import TicketHistoryAndAttachment from './pages/TicketHistoryAndAttachment'
import YourTickets from './pages/YourTickets'
import YourProjects from './pages/YourProjects'
import {
  FaUser,
  FaBell,
  FaUsers,
  FaUserTag,
  FaLayerGroup,
  FaTicketAlt,
  FaHome
} from 'react-icons/fa'


function Blah() {
  return (
    <div>
      
    </div>
  )
}

function App(props) {

  const {token, logout} = useContext(UserContext)

  const location = window.location.pathname
  return (
    <main>


      <div id="mySidebar" className="sidebar">

          <div className="sidebar-flex">
            <div>
              <FaUser className="fa-user">

              </FaUser>
            </div>
            <div className="welcome-user">
                <div>
                  <p>welcome</p>
                  <p>{'amren'}</p>
                </div>
            </div>
          </div>

          <a href="/dashboardhome">
            <div className={`sidebar-navlink ${location === '/dashboardhome' ? 'selected' : ''}`}>
                <span><FaHome /></span>
                <span href="#">Dashboard Home</span>
            </div>
          </a>
          <a href="/manageuserroles">
            <div className={`sidebar-navlink ${location === "/manageuserroles" ? 'selected' : ''}`}>
                <span><FaUserTag /></span>
                <span href="#">Manage Role Assignment</span>
            </div>
          </a>
          {/* DON'T NEED THIS FOR NOW */}
          {/* <div className={`sidebar-navlink ${location === '/manageuserroles' ? '' : ''}`}>
            <a href="/manageuserroles">
              <span><FaUsers /></span>
              <span href="#">Manage Project Users</span>
            </a>
          </div> */}
          <a href="/yourprojects">
            <div className={`sidebar-navlink ${location === '/yourprojects' ? 'selected' : ''}`}>
                <span><FaLayerGroup /></span>
                <span href="#">My Projects</span>
            </div>
          </a>
          {/* DON'T NEED THIS FOR NOW */}
          <a href="/yourtickets">
            <div className={`sidebar-navlink ${location === '/yourtickets' ? 'selected' : ''}`}>
                <span><FaTicketAlt /></span>
                <span href="#">My Tickets</span>
            </div>
          </a>
          {/* DON'T NEED THIS FOR NOW, I DON'T THINK */}
          {/* <div className="sidebar-navlink">
            <span><a href=""><FaUser /></a></span>
            <span href="#"><a href="">My User Profile</a></span>
          </div> */}

      </div>


      <div className="main-content">

          <header className="app-header">
              <div>
                Logged in as: <span className="admin">Admin</span>
              </div>
              <div className="global-search">
                <input type="text" placeholder="Search" />
                <span><a href="/dashboardhome"><FaHome /></a></span>
                <span>NOTIFICATIONS <FaBell /></span>
                <span>USER ACTIONS <FaUser /></span>
              </div>
          </header>
          <div className="chart-content">

            <Router>
              <Switch>
                <Route
                  exact path="/"
                  render={() => (token ? <Redirect to="/dashboardhome" /> : <Auth />)}
                />
                <ProtectedRoute
                  // THIS MIGHT BE '/'
                  path="/demouserlogin"
                  component={DemoUserLogin}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/createnewproject"
                  component={CreateNewProject}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/dashboardhome"
                  component={DashboardHome}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/editticket"
                  component={EditTicket}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/manageuserroles"
                  component={ManageUserRoles}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/projectdetails"
                  component={ProjectDetails}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/ticketdetails"
                  component={TicketDetails}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/tickethistoryandattachment"
                  component={TicketHistoryAndAttachment}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/yourtickets"
                  component={YourTickets}
                  redirectTo="/"
                  token={token}
                />
                <ProtectedRoute
                  path="/yourprojects"
                  component={YourProjects}
                  redirectTo="/"
                  token={token}
                />
              </Switch>
          </Router>

          </div>

      </div>


    </main>
  );
}

export default App;
