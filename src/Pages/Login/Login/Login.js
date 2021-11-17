import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import google from '../../../images/logo/google.png';
import useAuth from "../../../hooks/useAuth";


const Login = () => {
  const { allAuthInfo } = useAuth();
  const {
    signInWithGoogle,signInWithEmail,getEmail,getPassword,  error,setError,setUser,   
  } = allAuthInfo;

  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  return (
    <>
      {/* <NormalHeader /> */}
      <div
        className="text-center mt-lg-5 pt-5 mb-0"
      >
        <Zoom>
          <div>
            <h1 className="text-primary fw-bold">Please Login</h1>
            <p className=" mt-2">Login with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="mx-auto w-25 form-container ">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  signInWithEmail()
                    .then((result) => {
                      setUser(result.user);
                      history.push(redirect);
                    })
                    .catch((err) => {
                      setError(err.message);
                    });
                }}
              >
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="email" visuallyHidden>
                      Your Email Address
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        onBlur={getEmail}
                        type="email"
                        autoComplete="current-email"
                        id="email"
                        placeholder="Enter your email address"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="text-start">
                    <Form.Label htmlFor="password" visuallyHidden>
                      Your Password
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        onBlur={getPassword}
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </InputGroup>
                  </Col>
                </Row>

                <button
                  type="submit"
                  className="btn btn-primary text-white mt-2 w-100"
                >
                  Login
                </button>
              </Form>
            </div>
            <p className="mt-3">
              <p className="mb-0">
                Don't have an Account?
                <NavLink className="text-decoration-none" to="/signup">
                  {" "}
                  Please Sign Up!
                </NavLink>
              </p>
              <p>
                Forget your password?
                <NavLink className="text-decoration-none" to="/reset">
                  {" "}
                  Please Reset Password!
                </NavLink>
              </p>
            </p>
            <p className="mt-2 mt-lg-3">........Or........</p>
            <p className='mb-0'> Login with</p>
            <div className="pb-3  pt-lg-4">
              <button
                onClick={() => {
                  signInWithGoogle()
                    .then((result) => {
                      setUser(result.user);
                      history.push(redirect);
                    })
                    .catch((err) => {
                      setError(err.message);
                    });
                }}
                className="btn"
              >
                <img src={google} width="46px" alt="google-icon" />
              </button>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Login;

























// import React from 'react';
// import useAuth from '../../../hooks/useAuth';
// import './Login.css'


// //added for redirect --------------
// import { useHistory, useLocation } from 'react-router-dom'



// //login page
// const Login = () => {
//     const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, toggleLogin, isLogin, handleResetPassword, handleNameChange } = useAuth();


//     //added for redirect----------------
//     const history = useHistory()
//     const location = useLocation()

//     const url = location.state?.from || "/home"


//     const handleGoogleLogin = () => {
//         signInUsingGoogle()
//             .then(result => {

//                 history.push(url)
//             })
//     }

//     return (
//         //  google sign in part 
        
//         <div className="mx-5 mt-5 login-form my-5">
//             <button onClick={handleGoogleLogin} className="search-btn my-5">Google Sign In</button>
//             <br />
//             <div><h4><strong>-----------OR----------</strong></h4></div>
//             <br />

//              {/* email & password sign in part */}
//             <form onSubmit={handleRegistration}>
//                 <h3 className="login-header text-center">Please {isLogin ? 'Login' : 'Register'} </h3>
//                 {!isLogin && <div className="row w-50 mx-auto mb-3">
//                     <label htmlFor="inputName" className="col-sm-2 col-form-label form-input">Name</label>
//                     <div className="col-sm-10">
//                         <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Enter Your Name" />
//                     </div>
//                 </div>}
//                 <div className="row w-50 mx-auto mb-3">
//                     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-input">Email</label>
//                     <div className="col-sm-10">
//                         <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter Valid Email" required />
//                     </div>
//                 </div>

//                 <div className="row w-50 mx-auto mb-3">
//                     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label form-input">Password</label>
//                     <div className="col-sm-10">
//                         <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Enter Your Password" required />
//                     </div>
//                 </div>

//                 <div className="row w-50 mx-auto mb-3">
//                     <div className="col-sm-10 offset-sm-2">
//                         <div className="form-check">
//                             <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />

//                             <label className="form-check-label" htmlFor="gridCheck1">
//                                 <strong>Already Have an Account?</strong>
//                             </label>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row mb-3 text-danger">{error}</div>
//                 <button type="submit" className="search-btn me-4">{isLogin ? 'Login' : 'Register'}</button>
//                 <button type="button" onClick={handleResetPassword} className="search-btn ">Reset Password</button>
//             </form>

//         </div>
//     );
// };

// export default Login;