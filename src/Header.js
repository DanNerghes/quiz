import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1>Quiz</h1>
            <NavLink className="btn btn-primary" to="/addquestion">
                Add new Question
            </NavLink>
        </div>
    );
}
