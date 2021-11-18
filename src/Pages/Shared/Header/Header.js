import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo/logo.svg';
import './Header.css'

//header for all pages
const Header = () => {
  const { allAuthInfo } = useAuth();
  const { logOut, user } = allAuthInfo;
  const { photoURL, email, displayName } = user;
  return (
    <>
      <Navbar variant="light" sticky="top" collapseOnSelect expand="lg" className='navBar'>
        <Container>
          <Navbar.Brand as={NavLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link className="item" as={NavLink} to="/home" >
                Home
              </Nav.Link>
              <Nav.Link className="item" as={NavLink} to="/about" >
                About
              </Nav.Link>
              <Nav.Link className="item" as={NavLink} to="/contact" >
                Contact
              </Nav.Link>
              <Nav.Link className="item" as={NavLink} to="/blog" >
                Blogs
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link
                    className="item mb-lg-0 mb-3 login"
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Nav.Link>

                  <Nav.Link
                    className="item register"
                    as={Link}
                    to="/signup"
                  >
                    Register
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="item" as={HashLink} to="/myorders" >
                    My Orders
                  </Nav.Link>
                  <Nav.Link
                    as={HashLink}
                    to="/manageorders"
                    className="item"
                  >
                    Manage All Orders
                  </Nav.Link>

                  <Nav.Link
                    as={HashLink}
                    to="/AddService"
                    className="item"
                  >
                    Add A Service
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center">
                      <h6>{displayName}</h6>
                      <p className="m-0 mb-2">{email}</p>
                      <button onClick={logOut} className="btn btn-primary">
                        Sign Out
                      </button>
                    </div>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

