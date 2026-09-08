import React from 'react';
import './DashboardCTA.css';

export const DashboardCTA: React.FC = () => {
  return (
    <section className="dashboard-cta">
      <div className="section-header center">
        <h2>From Your Fields to Your Dashboard</h2>
        <p>Seamlessly connect real-time sensor streams to enterprise-grade analytics.</p>
      </div>
      
      <div className="dashboard-image-wrapper">
        <img src="/images/futuristic_dashboard.png" alt="Futuristic Dashboard" className="dashboard-img" />
        <div className="overlay-gradient"></div>
      </div>
    </section>
  );
};

export default DashboardCTA;
