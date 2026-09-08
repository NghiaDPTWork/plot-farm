import React from 'react';
import { LayoutGrid, Droplets, Radio, Users, ListTodo, LineChart } from 'lucide-react';
import './CoreFeatures.css';

export const CoreFeatures: React.FC = () => {
  return (
    <section className="core-features" id="features">
      <div className="core-container">
        <div className="section-header center">
          <h2>Core Features</h2>
          <p>Built specifically for modern farm managers and enterprises.</p>
        </div>
        
        <div className="core-grid">
          <div className="core-item">
            <div className="core-icon"><LayoutGrid size={20} /></div>
            <div className="core-text">
              <h4>Plot Management</h4>
              <p>Spatial mapping and health monitoring.</p>
            </div>
          </div>
          
          <div className="core-item">
            <div className="core-icon"><Users size={20} /></div>
            <div className="core-text">
              <h4>Worker Management</h4>
              <p>Shifts, roles, and permissions.</p>
            </div>
          </div>
          
          <div className="core-item">
            <div className="core-icon"><Droplets size={20} /></div>
            <div className="core-text">
              <h4>Smart Irrigation</h4>
              <p>Automated drip and moisture triggers.</p>
            </div>
          </div>
          
          <div className="core-item">
            <div className="core-icon"><Radio size={20} /></div>
            <div className="core-text">
              <h4>IoT Monitoring</h4>
              <p>Real-time soil, temp, and pH streams.</p>
            </div>
          </div>
          
          <div className="core-item">
            <div className="core-icon"><ListTodo size={20} /></div>
            <div className="core-text">
              <h4>Task Management</h4>
              <p>Daily field operations and logs.</p>
            </div>
          </div>
          
          <div className="core-item">
            <div className="core-icon"><LineChart size={20} /></div>
            <div className="core-text">
              <h4>Farm Analytics</h4>
              <p>Historical yield and trend insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
