import React from 'react';
import './App.css';
import {Incrementor} from "./components/incrementor";

function App() {
  return (
    <div className="App">
        <Incrementor limit={10}/>
    </div>
  );
}

export default App;
