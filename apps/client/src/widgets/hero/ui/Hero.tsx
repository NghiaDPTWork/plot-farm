import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="badge">
          <Zap size={16} className="badge-icon" />
          <span>SMART FARM MANAGEMENT PLATFORM</span>
        </div>
        
        <h1 className="hero-title">
          Manage Your Farm.<br/>
          <span className="text-green">Smarter.</span>
        </h1>
        
        <p className="hero-subtitle">
          One connected platform for managing plots, workers, irrigation, IoT monitoring, tasks, and farm operations.
        </p>
        
        <div className="hero-buttons">
          <Link to="/signup" className="btn-primary btn-lg">
            Register <ArrowRight size={18} />
          </Link>
          <Link to="/login" className="btn-secondary btn-lg">
            Login
          </Link>
        </div>
        
        <p className="hero-note">Built for modern agricultural operations.</p>
      </div>

      <div className="hero-visual">
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-title-group">
              <h3>Farm Overview</h3>
              <span className="card-subtitle">248 ha · 36 Active Plots</span>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span> ACTIVE
            </div>
          </div>
          
          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-label">IoT Sensors</span>
              <span className="stat-value">124</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Workers</span>
              <span className="stat-value">48</span>
            </div>
          </div>
          
          <div className="map-container">
            <img src="/images/farm_field.png" alt="Farm Map" className="map-image" />
            <div className="map-overlay-grid"></div>
          </div>
          
          <div className="bottom-stats">
            <div className="b-stat">
              <span className="b-label">Soil Moisture</span>
              <span className="b-val">42.4%</span>
            </div>
            <div className="b-stat">
              <span className="b-label">Temperature</span>
              <span className="b-val">26.8°C</span>
            </div>
            <div className="b-stat">
              <span className="b-label">Crop Health</span>
              <span className="b-val">98.2</span>
            </div>
          </div>
        </div>
        
        <div className="glow-circle green"></div>
        <div className="glow-circle blue"></div>
      </div>
    </section>
  );
};

export default Hero;
