import React, { component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Creatures from './components/Creatures'
import singleCreature from './components/SingleCreature'

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Creatures}/>
          <Route path="/:id" component={SingleCreature}/>
        </Switch>
      </div>
      </Router>
    )
  }
}


export default App