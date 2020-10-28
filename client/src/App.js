import React, {useContext} from 'react';
import './App.css';
import axios from 'axios'

import {
  Route, 
  Switch, 
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

import {useState, useEffect} from 'react'
import {UserContext} from './context/UserProvider'
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


function App(props) {

  const [comments, setComments] = useState([])
  const {token, logout} = useContext(UserContext)

  console.log(token);
  useEffect(() => {
    axios.get('/api/comment')
      .then(res => {
        setComments(() => [...res.data])
      })
      .catch(err => {
        console.log(err);
      })
  }, [comments])

  return (
    <main>
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
    </main>
  );
}

export default App;
