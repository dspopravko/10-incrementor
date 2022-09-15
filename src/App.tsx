import React, {useState} from 'react';
import './App.css';
import {Incrementor} from "./components/Incrementor/Incrementor";
import IncrementSetter from "./components/IncrementorSetter/IncrementSetter";

function App() {
    const [init, setInit] = useState(1)
    const [limit, setLimit] = useState(10)
    const [reset, setReset] = useState(false)

    const incrementSetterHandler = (initialCount: number, limit: number) => {
        setInit(initialCount)
        setLimit(limit)
        setReset(true)
    }


    return (
        <div className="App">
            <IncrementSetter callback={incrementSetterHandler}/>
            <Incrementor limit={limit}
                         init={init}
                         reset={reset}
                         setReset={setReset}
            />
        </div>
    );
}

export default App;
