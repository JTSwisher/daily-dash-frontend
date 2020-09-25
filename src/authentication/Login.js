import React from 'react';
import AuthForm from './AuthForm'
import './Auth.css'

const submitUser = user => { //temp will be handled by redux dispatch
    fetch("http://localhost:3001/api/v1/login", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({user: user})
    })
    .then(res => res.json())
    .then(user => console.log(user))
}

export default function Login() {
    return(
        <AuthForm type={'login'} handleLoginCallback={submitUser}/>
    )
}