import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name,setUserName]=useState("")
    const [user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const [repassword,setRePassword]=useState("")
    const navigate=useNavigate()

    const handleRegister=async(e)=>{
         e.preventDefault()
        if(password!==repassword){
            alert("Password do not match")
            return 
        }
        if(! user){
            alert("Enter the UserName")
            return 
        }
         
                try {
                    const res = await fetch("https://heartfelt-wisdom-production-d9eb.up.railway.app/users/register", {
                        method: "POST",
                    headers: {
                            "Content-Type": "application/json"
        
                        },
                        body: JSON.stringify({
                            username:user,
                            password:password,
                            name:name
                        })
                    })
                    const result = await res.text()
                    if (result === "Registration Success") {
        
                        alert("registration successfull")
                        navigate("/")
                        
        
        
        
                    } else {
                        alert(result)
        
                    }
        
        
                } catch (err) {
                    console.log(err)
                    alert("Connection error: " + err.message)
                }
    }


  return (
    <div className="login-container">
        <div className="login-card">
            <h1 className="login-title">Register</h1>
            <form onSubmit={handleRegister} className="login-form">
                <label htmlFor="fname">Name :</label>
                <input type="text" id='fname' placeholder='Enter Your Name' onChange={(e) => (setUserName(e.target.value))} /><br /><br />
                <label htmlFor="uName">User Name :</label>
                <input type="text" id='uName' autoComplete="current-UserName" onChange={(e) => setUser(e.target.value)} /> <br /><br />
                <label htmlFor="pass">Password :</label>
                <input type="password" id='pass' autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} /> <br /><br />
                <label htmlFor="pass">Re-Enter Password :</label>
                <input type="password" id='pass' autoComplete="current-password" onChange={(e) => setRePassword(e.target.value)} /> <br /><br />
                <button type='submit' className="login-button">Register</button>
            </form>
            <button onClick={()=>navigate("/")} className="register-button">Login</button>
        </div>
    </div>
  )
}

export default Register