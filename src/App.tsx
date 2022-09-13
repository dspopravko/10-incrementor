import React, {useState} from 'react';
import './App.css';
import {Incrementor} from "./components/Incrementor/Incrementor";
import IncrementSetter from "./components/IncrementorSetter/IncrementSetter";

function App() {
    const [initialCount, setInitialCount] = useState(5)
    const [incLimit, setIncLimit] = useState(10)
console.log(initialCount)
    return (
        <div className="App">
            <IncrementSetter setInitialCount={setInitialCount} setIncLimit={setIncLimit}/>
            <Incrementor limit={incLimit} initialCount={initialCount}/>
        </div>
    );
}

export default App;
