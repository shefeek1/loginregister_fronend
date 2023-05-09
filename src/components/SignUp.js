import React, {useState} from 'react'

function SignUp() {
    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('') 
    const[fname,setFname]= useState('')
    const[lname,setLname]= useState('')
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(email, password, fname, lname)
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain: true,
            headers: {
           "Content-Type": "application/json",
            Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            fname,
            lname,
            email,
            password
            
        })
        }).then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            console.log( data.message)
            alert(data.message);
          }
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
           value={fname}
           onChange= {(e)=>setFname(e.target.value)}
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input 
        value={lname}
        onChange = {(e)=>setLname(e.target.value)}
        type="text" className="form-control" placeholder="Last name" />
      </div>

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

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  )
}

export default SignUp