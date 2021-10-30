import React from 'react';
import './Header.css'
import logo from '../../../images/logo/logo.svg'
import {
    Link
} from "react-router-dom"
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar variant="light" sticky="top" collapseOnSelect expand="lg" className='menubar-container'>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className='item'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/about" className='item'>About</Nav.Link>
                        <Nav.Link as={HashLink} to="/services" className='item'>Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact" className='item'>Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/placeOrder" className='item'>Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/adminDashboard" className='item'>Admin</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">
                                Logout
                            </Button> :
                            <Nav.Link as={Link} to="/login" className='item'>Login</Nav.Link>
                        }
                        <Navbar.Text className='item'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;