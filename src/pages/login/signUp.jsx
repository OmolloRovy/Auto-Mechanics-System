import React from 'react'
import './login.css'

const signUp = () => {
  return (
    <div>
      <div class="box">
        <span class="borderLine"></span>
        <form action="">
            <h2>Sign up</h2>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div class="inputBox">
                <input type="email" required="required"/>
                <span>Email</span>
                <i></i>
            </div>

            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
                <i></i>
            </div>

            <div class="inputBox">
                <input type="password" required="required"/>
                <span> Confirm Password</span>
                <i></i>
            </div>
       
            <input type="submit" value="login"/>
        </form>
    </div>
    </div>
  )
}

export default signUp
