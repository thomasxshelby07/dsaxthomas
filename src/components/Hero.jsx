import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-container">
      <div className="hero-content">
        <div className="hero-badge">Redesigned & Expanded Edition</div>
        <h1 className="hero-title">
          DSA PATTERN <span className="highlight">IDENTIFICATION</span>
        </h1>
        <p className="hero-subtitle">
          Complete Cheat Sheet — 17 Patterns | String & Math Included
        </p>
        <p className="hero-author">by Thomas Shelby</p>

        <div className="hero-stats">
          <div className="stat-box glow-blue">
            <span className="stat-value">17</span>
            <span className="stat-label">Patterns</span>
          </div>
          <div className="stat-box glow-green">
            <span className="stat-value">290+</span>
            <span className="stat-label">Questions</span>
          </div>
          <div className="stat-box glow-orange">
            <span className="stat-value">40+</span>
            <span className="stat-label">Sub-Patterns</span>
          </div>
        </div>

        <div className="hero-meta">
          <div className="difficulty-legend">
            <span className="meta-title">DIFFICULTY LEGEND</span>
            <div className="legend-items">
              <span className="badge badge-easy">[E] Easy</span>
              <span className="badge badge-medium">[M] Medium</span>
              <span className="badge badge-hard">[H] Hard</span>
            </div>
          </div>
          
          <div className="company-tags">
            <span className="meta-title">Company Tags</span>
            <div className="tags-marquee">
              <span>Google</span> • <span>Amazon</span> • <span>Microsoft</span> • <span>Meta</span> • <span>Apple</span> • <span>Netflix</span> • <span>Adobe</span> • <span>Bloomberg</span> • <span>Flipkart</span> • <span>Goldman</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
