import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom'; // Fixed import
import './App.css';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

function App() {
  return (
    <div>
      <header>
        <h1>VIdhya</h1>
        <nav>
          <ul className='navlinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/furniture">Furnitures</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> {/* Corrected spelling */}
            <li>
              <Link to="/cart" className='shopcart'><CiShoppingCart  size="30px" /></Link>
            </li>
          </ul>
        </nav>
        {/* Moved inside the nav element */}
        <ul className='navlinks'>
          <li className='login'><Link to='/login'>LOGIN</Link></li> 
          <li><IoIosSearch  className='searchicon' size="20px" /></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
