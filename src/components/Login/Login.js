import React from "react";
import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Login = () => {
  const {googleSignIn} = UseAuth();
  return (
    <div>
      <h1>Please Log In</h1>
      <form onSubmit="">
        <div className="form">
          <input type="email" name="" id="" placeholder="Enter Your Email" />
          <br />
          <input type="password" name="" id="" />
          <br />
        </div>
        <input className="btn-regular" type="submit" value="Login" />
      </form>
      <br />
      <h3>
        Haven't create an account?
        <Link to="/register">Create account</Link>
      </h3>
      <h4>Or</h4>
      <button onClick={googleSignIn} className="btn-regular">Google Sign In</button>
    </div>
  );
};

export default Login;
