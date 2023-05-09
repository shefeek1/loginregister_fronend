import React from 'react'
import { useState , useEffect} from 'react'; 

function Test()
 {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const [userData, setUserData] =useState("")
        const getUserData = async () => {
        const response = await fetch(url);
        console.log(response)
        const jsonData = await response.json();
        console.log(jsonData)
        setUserData(jsonData);
        }
        useEffect(() => {
          
          getUserData()
        }, [])
        
       
       
  return (
    <div>test</div>
  )
}


export default Test