import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">
            <Leaf size={24} />
          </div>
          <span className="logo-text">PlotFarm</span>
        </div>
        
        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="nav-link-login">Login</Link>
          <Link to="/signup" className="btn-primary">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
