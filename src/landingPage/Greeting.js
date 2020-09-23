import React from 'react';
import { Link } from 'react-router-dom';

function Greeting() {
    return (
        <div className="greeting">
            <h1>Welcome to DailyDash!</h1>
            <Link to="/authenticate">
                <a className="greeting-button" target="_blank" rel="noopener noreferrer">Login</a>
            </Link>
            <Link to="/authenticate">
                <a className="greeting-button" rel="noopener noreferrer">Signup</a>
            </Link>
        </div>
    )
}

export default Greeting;