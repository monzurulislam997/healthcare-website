import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const loginEmail = (e) => {
    setEmail(e.target.value);
  };
  const logInPassword = (e) => {
    setPassword(e.target.value);
  };

  //Destructure from Cntext API
  const { user, googleSignIn, userSignInWithEmailPass, error,setError } =
    useAuth();
    
  
  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      history.push(redirect_uri);
      
    });
  };
  //login with email password
  const submitForLogin = (event) => {
    event.preventDefault();
    userSignInWithEmailPass(email, password)
    .then(() => {
      history.push(redirect_uri);
      
    });
      
  };
  //remove Error
  const removeError=()=>{
    setError("")
  }

  return (
    <div className="row">
      <div className="col-md-6 col-sm-12 col-12 login-section">
        <div>
          <h1>Please Login</h1>
          <form action="" onSubmit={submitForLogin}>
            <input
              onBlur={loginEmail}
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <br />

            <input
              onBlur={logInPassword}
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            <br />
            <p className="text-danger">{error}</p>
            <input
              className="btn btn-warning"
              type="submit"
              className="input-field"
            />
            <br />
          </form>
          <p>{user?.displayName}</p>
          <button onClick={handleGoogleSignIn} className="btn btn-success">
            Sign in with google
          </button>
          <br />
          
          <h5 className="mt-4">New in medic-Nucleus? Click Below </h5>
          <Link to="/newUser/register">
            <h3 className="common-toggle" onClick={removeError}>Please Register Now</h3>
          </Link>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 col-12">
        <img class="img-fluid" src="https://i.ibb.co/hdrCZKM/side.png" alt="" />
      </div>
    </div>
  );
};

export default Login;


