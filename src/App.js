import React, { Component } from 'react';
import './App.css';
// import StatefulCC from './sample/StatefulCC';
// import StatelessCC from './sample/StatelessCC';
// import StatefulFC from './sample/StatefulFC';
// import StatelessFC from './sample/StatelessFC';
// import axios from 'axios';
// import Entry from './components/entry'
import EntryList from './components/entryList';
import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  state={
    pokemon: [
      { number: 1, shiny: false, owned: false},
      { number: 4, shiny: true, owned: true},
      { number: 7, shiny: false},
    ]
  }

  render() {
    return (
      <div className="App">
        {/* <StatefulCC/>
        <StatelessCC
          title='StatelessCC'
        />
        <StatefulFC/>
        <StatelessFC
          title='StatelessFC'
        /> */}

        {/* {this.state.data !== null &&         
        this.state.data.data.name
        } */}

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/starters">Starters</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/starters">
                <EntryList
                    pokemon={this.state.pokemon}
                  />
              </Route>
              <Route path="/">
                <Paper style={{padding: 20, margin: 20}}>
                  HOME
                </Paper>
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
