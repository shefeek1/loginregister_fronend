import React, { useEffect } from 'react'
import  {useState} from 'react'

import { useNavigate } from 'react-router-dom';

function Login() {


    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('') 

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //    console.log(email, password)

    // }
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email, password)

        fetch("http://localhost:5000/login",{
          method:"POST",
          crossDomain: true,
          headers: {
         "Content-Type": "application/json",
          Accept: "application/json",
         "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
          
          email,
          password
          
      })
      }).then((res)=> res.json())
      .then((data) =>{
        console.log(data, "userLogin")
        if(data.status == "ok"){
          alert("Login SuccessFul")
          window.localStorage.setItem("token",data.data)
          window.localStorage.setItem("loggedIn",true)
         /// window.location.href = "/userDetails";
         navigate('/userDetails');
        }
        if(data.error=="User not Found")
        {
                alert(data.error)
        }
     
      })
    }

  return (
    <form  onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
        value={password}
        onChange = {(e)=>setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  )
}

export default Login
