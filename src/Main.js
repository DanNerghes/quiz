import React from "react";
import { NavLink } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <h1>Test Youre knowladge!</h1>
            <NavLink className="btn btn-primary" to="/attempting">
                Start
            </NavLink>
        </div>
    );
}
