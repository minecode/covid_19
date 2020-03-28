import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
          <Router basename="/covid19">
            <div>
              <main>
                  <Switch>
                      <Route exact path="/" component={Home}></Route>
                  </Switch>
              </main>
            </div>
          </Router>
        );
    }
}

export default App