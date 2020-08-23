import React, { Component } from 'react';
import './App.css';
import StatefulCC from './sample/StatefulCC';
import StatelessCC from './sample/StatelessCC';
import StatefulFC from './sample/StatefulFC';
import StatelessFC from './sample/StatelessFC';
// import axios from 'axios';

class App extends Component {

  // state = {
  //   data: null
  // }

  // getData = async () => await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3');

  // componentDidMount() {
  //   this.getData()
  //   .then(data => this.setState({data}));
  // }

  render() {
    return (
      <div className="App">
        <StatefulCC/>
        <StatelessCC
          title='StatelessCC'
        />
        <StatefulFC/>
        <StatelessFC
          title='StatelessFC'
        />

        {/* {this.state.data !== null && this.state.data.data.results
        .map(item => 
          item.name
        )} */}

      </div>
    );
  }
}

export default App;
