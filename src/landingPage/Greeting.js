import React from 'react';
import { Link } from 'react-router-dom';

function Greeting() {
    return (
        <div className="greeting">
            <h1>HomeDash!</h1>
            <Link to="/login">
                <a href="/login" className="greeting-button" rel="noopener noreferrer">Login</a>
            </Link>
            <Link to="/signup">
                <a href="/signup" className="greeting-button" rel="noopener noreferrer">Signup</a>
            </Link>
        </div>
    )
}

export default Greeting;