import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { loginUser } from '../redux/logSlice';


const Login = () => {
    const [userName,setUserName]=useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const dispatch=useDispatch()
    const navigate=useNavigate()
    


    const handleLogin=(e)=>{
        e.preventDefault()
        if(user==="r" && password==="R"){
            
            dispatch(loginUser(userName))
            navigate("/Home")
            
            

        }else{
            alert("Login Invalid")

        }
    }

    return (
        <div>
            <h1>Login </h1>

           <form onSubmit={handleLogin}>
            <label htmlFor="fname">Name :</label>
            <input type="text" id='fname' placeholder='Enter Your Name' onChange={(e)=>(setUserName(e.target.value))}/><br /><br />
             <label htmlFor="uName">User Name :</label>
            <input type="text" id='uName' autoComplete="current-UserName" onChange={(e) => setUser(e.target.value)} /> <br /><br />
            <label htmlFor="pass">Password :</label>
            <input type="password"  id='pass' autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} /> <br /><br />
            <button type="submit">Login</button>
           </form>
        </div>
    )
}

export default Login