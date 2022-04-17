import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import fkl from "../images/fkl.png"
import "../css/app.css";
import "../css/style.css";
import AppRoute from "./route/AppRoute";

function App() {
    return (

         <AppRoute/>
    );
}

export default App;
