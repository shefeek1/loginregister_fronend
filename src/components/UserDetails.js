import React, {componentDidMount, useState, useEffect} from 'react'

function UserDetails() {
  const [userData, setUserData] = useState({});

  // componentDidMount(
    
  // )
  useEffect( ()=>{
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res)=>res.json())
    .then(data=>{
      
          setUserData(data.data)

          console.log(data,"UserpageData")
          if (data.data == "token expired") {
         
            window.localStorage.clear();
            alert("Token expired login again");
            window.location.href = "./sign-in";
            
          }
    })
  },[])
  const logout = () =>{
   window.localStorage.clear()
   window.location.href = "/sign-in"
  };
  return (
    <div >
      <h3>userDetails</h3>
      <h3>{userData.fname}&nbsp;{userData.lname}</h3>
      <h3>{userData.email}</h3>
      <button onClick={logout} className="btn btn-primary">LogOut</button>
    </div>
  )
}

export default UserDetails