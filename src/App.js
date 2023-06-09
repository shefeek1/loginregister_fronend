import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

//import Login from './components/login.component'
//import SignUp from './components/signup.component'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Test from './components/Test'
import UserDetails from './components/UserDetails'

function App() {
  const isLogged= window.localStorage.getItem("loggedIn") 
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={isLogged=="true"?<UserDetails/> : <Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route  path="/userDetails" element={<UserDetails />}/>
               <Route path="/sign-in" element={<Login />} />
               {/* <Route path="/test" element={<Test />}/> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
