import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function Greeting() {
    return (
        <div className="greeting">
            <h1>Welcome to DailyDash!</h1>
            <Link to="/authenticate">
                <Button inverted id="greeting-button">Login</Button>
            </Link>
            <Link to="/authenticate">
                <Button inverted id="greeting-button">Signup</Button>
            </Link>
        </div>
    )
}

export default Greeting;