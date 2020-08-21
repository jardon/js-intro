import React from 'react';
import './App.css';
import StatefulCC from './sample/StatefulCC';
import StatelessCC from './sample/StatelessCC';
import StatefulFC from './sample/StatefulFC';
import StatelessFC from './sample/StatelessFC';

function App() {
  return (
    <div className="App">
      <StatefulCC/>
      <br></br>
      <StatelessCC
        title='StatelessCC'
      />
      <br></br>
      <StatefulFC/>
      <br></br>
      <StatelessFC
        title='StatelessFC'
      />

    </div>
  );
}

export default App;
