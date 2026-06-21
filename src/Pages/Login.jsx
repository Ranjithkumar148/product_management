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
    


   const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("https://heartfelt-wisdom-production-d9eb.up.railway.app/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    username: user,
                    password: password
                })
            })
            const result = await res.json()
            if (result) {
                
                dispatch(loginUser(result));

                dispatch(loginUser(result))
                navigate("/Home")



            } else {
                alert("Login Invalid")

            }


        } catch (err) {
            console.log(err)
        }


    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login </h1>

               <form onSubmit={handleLogin} className="login-form">
<<<<<<< HEAD
            
=======
                <label htmlFor="fname">Name :</label>
                <input type="text" id='fname' placeholder='Enter Your Name' onChange={(e)=>(setUserName(e.target.value))}/><br /><br />
>>>>>>> 812958322ef69aa527e19a32a31f2e5991da87ce
                 <label htmlFor="uName">User Name :</label>
                <input type="text" id='uName' autoComplete="current-UserName" onChange={(e) => setUser(e.target.value)} /> <br /><br />
                <label htmlFor="pass">Password :</label>
                <input type="password"  id='pass' autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                <button type="submit" className="login-button">Login</button>
               </form>
<<<<<<< HEAD
                <button onClick={() => navigate("/Register")} className="register-button">Register</button>
=======
>>>>>>> 812958322ef69aa527e19a32a31f2e5991da87ce
            </div>
        </div>
    )
}

export default Login