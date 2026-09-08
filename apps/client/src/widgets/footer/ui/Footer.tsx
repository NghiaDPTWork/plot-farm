import React from 'react';
import { Leaf } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Leaf size={20} className="text-green" />
          <span>PlotFarm</span>
        </div>
        <p>© 2026 PlotFarm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
