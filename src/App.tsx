import React from 'react';
import './App.css';
import {IncrementerContainer} from "./components/Incrementer.container";
import {createTheme, ThemeProvider} from "@mui/material";
import {lightBlue} from "@mui/material/colors";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: lightBlue[100],
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <IncrementerContainer/>
            </div>
        </ThemeProvider>
    );
}

export default App;
