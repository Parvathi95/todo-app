import React from 'react'
import '../styles/signup.css'

const SignUp = () => {
  return (
    <section id="signup" className='page'>
      <div className='cover'>
        <h2>SignUp</h2>
        <div className='input-box'>
        <input type="text" placeholder='Enter Your email'/><br></br>
        <input type="password" placeholder='Create a password'/><br></br>
        <input type="password" placeholder='Confirm Your password'/></div>
        <button className='btn-signup'>Signup</button>
        <label>Already have an account?<a href="#">Login</a></label>
      </div>
      </section>
  )
}

export default SignUp