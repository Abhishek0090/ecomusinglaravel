import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar bg="dark" variant= 'dark' > 
       <Navbar.Brand to="/">Ecommerce</Navbar.Brand>
        <Nav className="me-auto navbar-wrapper"> 
          <Link to="/add">Add Product</Link> 
          <Link to="/update">UpdateProduct</Link> 
          <Link to="/register">Register</Link> 
          <Link to="/login">Login</Link> 
        </Nav>  
  </Navbar>
  )
}

export default Header