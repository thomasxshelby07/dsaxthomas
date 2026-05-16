import React from 'react';
import './DomainSelection.css';

const DomainSelection = ({ onSelectDomain }) => {
  return (
    <div className="domain-selection-container">
      <div className="domain-selection-content">
        <h1 className="ds-title">Who's studying?</h1>
        <p className="ds-subtitle">Select a subject to dive in</p>
        
        <div className="ds-profiles-wrapper">
          {/* DSA Profile */}
          <div className="ds-profile" onClick={() => onSelectDomain('DSA')}>
            <div className="ds-avatar dsa-avatar">
              <span className="icon-text">{`</>`}</span>
            </div>
            <h2 className="ds-profile-name">DSA Mastery</h2>
          </div>

          {/* Python Profile */}
          <div className="ds-profile" onClick={() => onSelectDomain('PYTHON')}>
            <div className="ds-avatar python-avatar">
              <span className="icon-text">🐍</span>
            </div>
            <h2 className="ds-profile-name">Python</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;
