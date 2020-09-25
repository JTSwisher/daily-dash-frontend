import React from 'react';
import AuthForm from './AuthForm'
import './Auth.css'

const submitUser = user => {
    fetch("http://localhost:3001/api/v1/users", {
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

export default function Signup() {
    return(
        <AuthForm type={'signup'} handleLoginCallback={submitUser}/>
    )
}