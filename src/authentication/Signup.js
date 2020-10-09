import React from 'react';
import AuthForm from './AuthForm'
import history from '../History'
import './Auth.css'

const submitUser = user => { //temp will be handled by redux dispatch
    fetch("http://localhost:3001/api/v1/users", {
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
            console.log(user)
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

export default function Signup() {
    return(
        <AuthForm type={'signup'} handleLoginCallback={submitUser}/>
    )
}