import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddQuestion from "./AddQuestion";
import "bootstrap/dist/css/bootstrap.css";

import firebase from "firebase/app";
import "firebase/firestore";
import Home from "./Home";
import Attempting from "./Attempting.js";

const firebaseConfig = {
    apiKey: "AIzaSyBX9GhJuiOJGT2dM-PnwfGRDdB2WRLL-LQ",
    authDomain: "flashquizzzzz.firebaseapp.com",
    databaseURL: "https://flashquizzzzz.firebaseio.com",
    projectId: "flashquizzzzz",
    storageBucket: "flashquizzzzz.appspot.com",
    messagingSenderId: "929588219825",
    appId: "1:929588219825:web:ff15f6c6d2aa4b746cf790",
};
firebase.initializeApp(firebaseConfig);

function App() {
    return (
        <>
            <Router>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/attempting"} component={Attempting} />
                <Route exact path={"/addquestion"} component={AddQuestion} />
            </Router>
        </>
    );
}

export default App;
