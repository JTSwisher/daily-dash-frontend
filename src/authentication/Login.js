import React from 'react';
import AuthForm from './AuthForm'
import history from '../History'
import './Auth.css'

const submitUser = user => {
    fetch("http://localhost:3001/api/v1/login", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({user: user})
    })
    .then(res => res.json())
    .then(user =>{
        if (user.error) {
            window.alert(user.error)
        } else {
            localStorage.setItem('token', user.token)
            localStorage.setItem('userId', user.user.id )
            localStorage.setItem('name', user.user.name)
            history.push("/dash/home")
        }
    })
    .catch((error) => {
        console.log(error)
        localStorage.clear()
    })
    
}

export default function Login() {
    return(
        <AuthForm type={'login'} handleLoginCallback={submitUser}/>
    )
}