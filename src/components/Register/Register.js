import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h1>Register: Create Account</h1>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" password="Your Password" />
          <br />
          <input type="password" name="" id="" password="Re-enter Password" />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
        <div>---------or---------</div>
        <br />
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
