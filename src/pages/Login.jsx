import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = ({setUser}) => {
    const navigate = useNavigate()
    const [loginData,setLoginData] = useState({
        username:"",
        password:""
    })

    const onHandleChange = (e) => {
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    const login = ()=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/login`,loginData).then(res=>{
            if(res.status=201){
                console.log(res)
                setUser(true)
                navigate("/dashboard")
                sessionStorage.setItem("token",res.data.data.token)
            }
        })
    }
    const register = ()=>{
        navigate("/register")
    }
  return (
    <div className='form'>
        <h2>Login</h2>
        <input type="text" placeholder='Please enter your name' name='username' onChange={onHandleChange} />
        <input type="password" placeholder='Please enter your password' name='password' onChange={onHandleChange} />
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login