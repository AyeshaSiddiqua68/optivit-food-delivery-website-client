import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Zoom from "react-reveal/Zoom";
import useAuth from "../../../hooks/useAuth";

//reset password
const ResetPassword = () => {
    const { allAuthInfo } = useAuth();
    const history = useHistory();
    const { email, getEmail,error , setError, passwordReset } = allAuthInfo; 
    return (
        <>
      <div
        className="w-100"
      >
        <Zoom>
          <div
            style={{ marginTop: "60px", paddingBottom: "40px" }}
            className="text-center  mt-5 mx-auto pt-5"
          >
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                passwordReset()
                  .then(() => {
                    history.push("./login");
                    alert(`Email for reset has been sent to ${email}`);
                  })
                  .catch((err) => {
                    setError(err.message);
                  });
              }}
            >
              <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                <Form.Label className="fw-bold">
                  Enter Your Email Address {" "}
                </Form.Label>
                <p className="text-danger">{error}</p>
                <Form.Control
                  onBlur={getEmail}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Button className="py-2 px-4" variant="primary" type="submit">
                send
              </Button>
            </Form>
          </div>
        </Zoom>
      </div>
    </>
    );
};

export default ResetPassword;