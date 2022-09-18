import React, {useState} from 'react';
import './App.css';
import {Incrementor} from "./components/Incrementor/Incrementor";
import IncrementSetter from "./components/IncrementorSetter/IncrementSetter";

function App() {

    const [reset, setReset] = useState(false)

    const incrementSetterHandler = () => {
        setReset(true)
    }

    return (
        <div className="App">
            <IncrementSetter
                callback={incrementSetterHandler}
            />
            <Incrementor
                init={3}
                limit={7}
                reset={reset}
                setReset={setReset}
            />
        </div>
    );
}

export default App;
