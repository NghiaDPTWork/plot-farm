import React from 'react';
import { LayoutGrid, Droplets, Radio, CheckCircle2 } from 'lucide-react';
import './FeaturesOverview.css';

export const FeaturesOverview: React.FC = () => {
  return (
    <section className="features-overview" id="platform">
      <div className="section-header center">
        <h2>Everything Your Farm Needs, In One Platform.</h2>
        <p>Streamline your entire agricultural workflow with modular enterprise tools.</p>
      </div>
      
      <div className="cards-grid">
        <div className="feature-card">
          <div className="icon-box green">
            <LayoutGrid size={24} />
          </div>
          <h3>Plot Management</h3>
          <p>Map boundaries & track crop rotations.</p>
        </div>
        
        <div className="feature-card">
          <div className="icon-box blue">
            <Droplets size={24} />
          </div>
          <h3>Smart Irrigation</h3>
          <p>Automate water schedules by soil telemetry.</p>
        </div>
        
        <div className="feature-card">
          <div className="icon-box green">
            <Radio size={24} />
          </div>
          <h3>IoT Monitoring</h3>
          <p>Deploy wireless sensors with instant alerts.</p>
        </div>
        
        <div className="feature-card">
          <div className="icon-box teal">
            <CheckCircle2 size={24} />
          </div>
          <h3>Farm Operations</h3>
          <p>Coordinate tasks and labor seamlessly.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
