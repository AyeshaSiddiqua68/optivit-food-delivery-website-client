import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import google from '../../../images/logo/google.png';
import useAuth from "../../../hooks/useAuth";

//all about login page
const Login = () => {
  const { allAuthInfo } = useAuth();
  const {
    signInWithGoogle, signInWithEmail, getEmail, getPassword, error, setError, setUser,
  } = allAuthInfo;

  const history = useHistory();
  const location = useLocation();
  const redirect = location?.state?.from || "/home";

  return (
    <>
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
