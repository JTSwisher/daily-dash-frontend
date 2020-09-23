import React, { Component } from 'react';



class AuthForm extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome!</h1>
                    <form className="form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" id="login-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AuthForm;