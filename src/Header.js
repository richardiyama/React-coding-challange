import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() { 
  
    return (
      <header className="header gradient-blue shadow">
        <div className="wrapper">
          <Link to="/" className="logo">
            DEMO Streaming
          </Link>
          <nav className="nav-header">
            <span className="nav-header-item">
              <a href="#">Login</a>
            </span>
            <span className="nav-header-item trial">
              <a href="#" className="button gradient-grey">
                Start your free trial
              </a>
            </span>
          </nav>
        </div>
      </header>
    );
  }
export default Header