import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import signUp from './signUp'
const Login = () => {
  return (
    <div>
       <div class="box">
        <span class="borderLine"></span>
        <form action="">
            <h2>Sign in</h2>

            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
                <i></i>
            </div>

            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Password</span>
                <i></i>
            </div>

            <div class="links">
                <a href="#">Forgot Password</a>
              <Link path="./signUp"  element={<signUp/>}>Sign Up</Link>
            </div>
            <input type="submit" value="login"/>
        </form>
    </div>
    </div>
  )
}

export default Login
