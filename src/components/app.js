import React, { Component } from 'react'
import '../styles/app.css'
import TodoRoutes from './todoRoutes'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}> 
          <div>    
            <Switch>
              <Route exact path="/" component={TodoRoutes} />
              <Route path="/:status" component={TodoRoutes} />      
            </Switch> 
          </div>      
        </Provider>
      </Router>
    )
  }
}

export default App;
