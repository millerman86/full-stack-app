import React from 'react';
import './App.css';
import axios from 'axios'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import CreateNewProject from './pages/CreateNewProject'
// import DashboardSplash from './pages/DashboardSplash'
// import DemoUserLogin from './pages/DemoUserLogin'
// import EditTicket from './pages/EditTicket'
// import ManageUserRoles from './pages/ManageUserRoles'
// import ProjectDetails from './pages/ProjectDetails'
// import TicketDetails from './pages/TicketDetails'
// import TicketHistoryAndAttachment from './pages/TicketHistoryAndAttachment'
import YourTickets from './pages/YourTickets'
import CreateNewProject from './pages/CreateNewProject';


function App() {

  const [comments, setComments] = useState([])

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
    <Router>
      <div>
        <Switch>
          <Route path="/yourtickets/:blah">
            <YourTickets />
          </Route>
          <Route path="/createnewproject">
            <CreateNewProject />
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
