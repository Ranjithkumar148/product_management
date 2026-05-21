import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { loginUser } from '../redux/logSlice';


const Login = () => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const dispatch=useDispatch()
    const navigate=useNavigate()
    


    const handleLogin=(e)=>{
        e.preventDefault()
        if(user==="r" && password==="R"){
            const u="Ranjith"
            dispatch(loginUser(u))
            navigate("/Home")
            
            

        }else{
            alert("Login Invalid")

        }
    }

    return (
        <div>
            <h1>Login</h1>

           <form onSubmit={handleLogin}>
             <label htmlFor="uName">User Name :</label>
            <input type="text" autoComplete="current-UserName" onChange={(e) => setUser(e.target.value)} /> <br /><br />
            <label htmlFor="password">Password :</label>
            <input type="password"  autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
           </form>
        </div>
    )
}

export default Login