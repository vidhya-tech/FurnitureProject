import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { CiShoppingCart } from "react-icons/ci";


function App() {
  return (
    <div className="App">
       <Router>
      <div className="container-navbar">
        <span className='heading'>Edgecut</span>

        <nav className='navbar'>
          <ul className='navbarssection'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/furniture">Furnitures</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contactus</Link></li>
            <li>
              <Link to="/cart" className='shopcart'><CiShoppingCart  size="30px" /></Link>
            </li>
            <div className="quote_btn-container">
            <Link to="/Login">
              <span className='login'>Login</span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <form className="form-inline">
             
                <i className="fa fa-search" aria-hidden="true"></i>
              
            </form>
          </div>
          </ul>

          
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
        
        />
        <Route path="/furniture" />
        <Route path="/about"  />
        <Route path="/blog" 
        />
        <Route
          path="/contact"
        
        />
         <Route path="/cart"  />
         <Route path="/login" />
      </Routes>
      
     
    </Router>
    </div>
  );
}

export default App;
