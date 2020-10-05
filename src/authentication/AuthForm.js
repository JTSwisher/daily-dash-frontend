import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthForm extends Component {

    state = {
        username: '',
        name: '',
        password: ''
    }

    handleFormChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.props.handleLoginCallback(this.state)
        this.setState({
            username: '',
            name: '',
            password: ''
        })
    }

    render() {
        let nameInput;
        if (this.props.type === "signup") {
            nameInput = <input type="text" id="auth-input" placeholder="Name" value={this.state.name} name="name" onChange={e => this.handleFormChange(e)} required/>
        }

        return (
            <div className="wrapper">
                <div className="container">
                    <form className="form" onSubmit={ e => this.handleFormSubmit(e)}>
                        { nameInput }
                        <input type="text" id="auth-input" placeholder="Username" value={this.state.username} name="username" onChange={e => this.handleFormChange(e)} required/>
                        <input type="password" id="auth-input" placeholder="Password" value={this.state.password} name="password" onChange={e => this.handleFormChange(e)} required/>
                        <button type="submit" id="login-button">Submit</button>
                        <Link to="/">
                            <button type="cancel" id="cancel-button">Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default AuthForm;