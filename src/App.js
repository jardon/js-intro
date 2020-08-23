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
      <StatelessCC
        title='StatelessCC'
      />
      <StatefulFC/>
      <StatelessFC
        title='StatelessFC'
      />

    </div>
  );
}

export default App;
