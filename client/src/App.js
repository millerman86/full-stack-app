import React from 'react';
import './App.css';
import {Route, Switch, Router as BrowserRouter} from 'react-router-dom'

function App() {
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
