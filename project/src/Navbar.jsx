import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

function Navbarexample() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navheading'>
      <span className='logo'>
            Edgecut
          </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <header>
          <Nav className="me-auto">
          <ul className='navlinks'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/furniture">Furnitures</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <Link to="/cart" className='shopcart'>
                <CiShoppingCart size="30px" />
              
              </Link>
            </ul>
            </Nav>
          <ul className='navlinks'>
            <li className='login'><Link to='/login'>LOGIN</Link>  <i className="fa-solid fa-user"></i></li>
            <li><IoIosSearch className='searchicon' size="20px" /></li>
          </ul>
        
         
          </header>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarexample
