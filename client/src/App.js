import React from 'react';
import './App.css';
import {Route, Switch, Router as BrowserRouter} from 'react-router-dom'
import axios from 'axios'


function App() {

  const comments = axios.get('/api/comment')
    .then(res => {
      console.log('here is your data', res.data);
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })

  return (
    <div>
      <Switch>
        <Route
          exact path="/" 
          render={() => <div>amren miller is a programmer</div>}
          />
        </Switch>
    </div>
  );
}

export default App;
