import React from 'react';
import './App.css';
import {Route, Switch, Router as BrowserRouter} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {

  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get('/api/comment')
      .then(res => {
        console.log('here is your data', res.data);
        setComments(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

 

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
