import React from "react";
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {
  return (
    <div >
        <h1>Please Register</h1>
      <form onSubmit="">
       <div className="form">
       <input type="email" name="" id="" placeholder="Enter Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Enter Your Password"/>
        <br />
        <input type="password" name="" id="" placeholder="Re-enter Password" />
       </div>
        <input className='btn-regular' type="submit" value="Register" />
      </form>
      <br />
      <h3>
        Already created an account?
        <Link to="/login">Login</Link>
      </h3>
      <h4>Or</h4>
      <button className="btn-regular">Google Sign In</button>
    </div>
  );
};

export default Register;
