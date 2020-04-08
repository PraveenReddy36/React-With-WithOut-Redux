import React from 'react';
import './App.css';
import Tile from './Tile';

function App() {

  var tilesArray = [];

  for(var i=0; i<150; i++) {
    tilesArray.push(<Tile key={i}></Tile>);
  }

  return (
    <div className="App">
      {tilesArray}
    </div>
  );
}

export default App;
