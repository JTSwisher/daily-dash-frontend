import React, { Component } from 'react';



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
        e.preventDefault()
        this.props.handleLoginCallback(this.state)
        this.setState({
            username: '',
            name: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <form className="form" onSubmit={ e => this.handleFormSubmit(e)}>
                        <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={e => this.handleFormChange(e)} />
                        <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={e => this.handleFormChange(e)} />
                        <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={e => this.handleFormChange(e)} />
                        <button type="submit" id="login-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AuthForm;