import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


import ScreenHome from '../src/components/ScreenHome';
import ScreenAccueil from '../src/components/ScreenAccueil';


function App() {
  return (

    <Router>
      <Switch>
        <Route component={ScreenAccueil} path="/" exact />
        <Route component={ScreenHome} path="/ScreenHome" exact />
      </Switch>
    </Router>

  );
}

export default App;
