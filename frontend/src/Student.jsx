import React from "react";
import { Link } from "react-router-dom";
import './Student.css'; // Import a CSS file for styling

const Student = () => {
    return (
        <div className="student-roadmap">
            <div className="roadmap-card">
                <h2>Step 1</h2>
                <p>This is the first step in your roadmap.</p>
                <div className="arrow-down">
                  <a href="#step2">Step 2</a>
                </div>
            </div>
            <div className="roadmap-card">
                <h2 id="step2">Step 2</h2>
                <p>This is the second step in your roadmap.</p>
                <div className="arrow-down">
                  <a href="#step3">Step 3</a>
                </div>
            </div>
            <div className="roadmap-card">
                <h2 id="step3">Step 3</h2>
                <p>This is the third step in your roadmap.</p>
                <div className="arrow-down">
                  <a href="#step1">Step 1</a>
                </div>
            </div>
        </div>
    );
}

export default Student;
