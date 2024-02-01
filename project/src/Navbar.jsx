import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import './App.css'

const Header = ({ cartItemCount }) => {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Edgecut</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto"> {/* Apply mx-auto class for horizontal center alignment */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/furniture">Furnitures</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="shopcart">
                <CiShoppingCart size="30px" />
                {cartItemCount > 0 && <span className="cart-notification">{cartItemCount}</span>}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login" className="login">LOGIN <i className="fa-solid fa-user"></i></Nav.Link>
              <Nav.Link><IoIosSearch className="searchicon" size="20px" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default Header;
