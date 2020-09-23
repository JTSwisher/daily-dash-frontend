import React, { Component } from 'react';

import { Button, Form } from 'semantic-ui-react'

class AuthForm extends Component {

    state = {
        username: '',
        password: ''
    }
    
    
    render() {
        return (
            <Form className="auth-form">
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
          
        )
    }
    
}

export default AuthForm;