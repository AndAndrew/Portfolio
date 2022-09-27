import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {TypesOfEmployment} from "./TypesOfEmployment/TypesOfEmployment";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <TypesOfEmployment/>
        </div>
    );
}

export default App;
