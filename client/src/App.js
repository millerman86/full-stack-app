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
  BrowserRouter as Router
} from 'react-router-dom'

import {
  useState, useEffect
} from 'react'

import ProtectedRoute from './components/ProtectedRoute'

import Auth from './pages/auth/Auth'

import DemoUserLogin from './pages/DemoUserLogin'
import CreateNewProject from './pages/CreateNewProject'
import DashboardSplash from './pages/DashboardSplash'
import EditTicket from './pages/EditTicket'
import ManageUserRoles from './pages/ManageUserRoles'
import ProjectDetails from './pages/ProjectDetails'
import TicketDetails from './pages/TicketDetails'
import TicketHistoryAndAttachment from './pages/TicketHistoryAndAttachment'
import YourTickets from './pages/YourTickets'
import { FaUser, FaBell, FaUsers, FaUserTag, FaLayerGroup, FaTicketAlt, FaHome } from 'react-icons/fa'


function App(props) {

  const {token, logout} = useContext(UserContext)

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
                  <p>Welcome</p>
                  <p>{'amren'}</p>
                </div>
            </div>
          </div>
          
          <div className="sidebar-navlink">
            <span><FaHome /></span>
            <span href="#">Dashboard Home</span>
          </div>
          <div className="sidebar-navlink">
            <span><FaUserTag /></span>
            <span href="#">Manage Role Assignment</span>
          </div>
          <div className="sidebar-navlink">
            <span><FaUsers /></span>
            <span href="#">Manage Project Users</span>
          </div>
          <div className="sidebar-navlink">
            <span><FaLayerGroup /></span>
            <span href="#">My Projects</span>
          </div>
          <div className="sidebar-navlink">
            <span><FaTicketAlt /></span>
            <span href="#">My Tickets</span>
          </div>
          <div className="sidebar-navlink">
            <span><FaUser /></span>
            <span href="#">My User Profile</span>
          </div>
          
      </div>
      
      
      <div className="main-content">

          <header className="app-header">
              <div>
                Logged in as: <span className="admin">Admin</span>
              </div>
              <div className="global-search">
                <input type="text" placeholder="Search" />
                <span><FaHome /></span>
                <span>NOTIFICATIONS <FaBell /></span>
                <span>USER ACTIONS <FaUser /></span>
              </div>
          </header>
          <div className="chart-content">

            <Router>
              <Switch>
                <Route 
                  exact path="/" 
                  render={() => (token ? <Redirect to="/dashboardsplash" /> : <Auth />)}
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
                  path="/dashboardsplash"
                  component={DashboardSplash}
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
              </Switch>
          </Router>
          
          </div>
     
      </div>
          
      
    </main>
  );
}

export default App;
