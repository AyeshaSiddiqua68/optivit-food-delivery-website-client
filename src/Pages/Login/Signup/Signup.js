import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,faLock,faUser,faLink,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import useAuth from "../../../hooks/useAuth";

//all about sign up page
const Signup = () => {
  const history = useHistory();
  const { allAuthInfo } = useAuth();
  const {
    getPhoto,setNameAndImage,
    emailVerification,getEmail,
    getPassword,
    error,setError,getName, singUp,logOut,  
  } = allAuthInfo;

  return (
    <>      
      <div       
        className="text-center  mt-lg-5 pt-5 mb-0"
      >
        <Zoom>
          <div>
            <h2 className="text-primary fw-bold">Please Register Here</h2>
            <p className="mt-2">Register with Email & Password</p>
            <p className="text-danger text-center">{error}</p>
            <div className="form-container w-50 mx-auto">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  singUp()
                    .then((result) => {
                      setNameAndImage();
                      emailVerification();
                      alert("Registration has been successful! Now Please Login");
                      logOut();
                      history.push("/login");
                    })
                    .catch((err) => {
                      setError(err.message);
                    });
                }}
              >
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="name" visuallyHidden>
                      Your Full Name
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getName}
                        type="text"
                        autoComplete="current-name"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </InputGroup>
                  </Col>
                </Row>
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
                        required
                        onBlur={getEmail}
                        type="email"
                        autoComplete="current-email"
                        id="email"
                        placeholder="Enter your email"
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
                        required
                        onBlur={getPassword}
                        type="password"
                        autoComplete="current-password"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-start">
                    <Form.Label htmlFor="name" visuallyHidden>
                      Your Profile Photo
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                      </InputGroup.Text>
                      <FormControl
                        required
                        onBlur={getPhoto}
                        type="text"
                        autoComplete="current-text"
                        id="photo"
                        placeholder="Enter valid picture"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <button
                  type="submit"
                  className="btn text-white btn-primary mt-2 w-100"
                >
                  Sign up
                </button>
              </Form>
            </div>
            <p className="mt-5 mb-0 pb-5 ">
              Already have an account?
              <NavLink className="text-decoration-none" to="/login">
                {" "}
                Please login!{" "}
              </NavLink>
            </p>
          </div>
        </Zoom>
      </div>
      
    </>
  );
};

export default Signup;