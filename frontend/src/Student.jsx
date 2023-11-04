import React from "react";
import { Link } from "react-router-dom";
import './Student.css'; // Import a CSS file for styling

const Student = () => {
    return (
        <div className="main-con">
            <div className="road-map">
            <div className="card-container">
                <div className="card">
                    <h1>Topic 1</h1>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <h1>Topic 2</h1>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <h1>Topic 3</h1>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Student;
