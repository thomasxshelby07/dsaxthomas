import React from 'react';
import './Sidebar.css';

const Sidebar = ({ patterns, selectedId, onSelect, onClose }) => {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">DSA<span className="logo-highlight">PATTERNS</span></h2>
        <button className="sidebar-close-btn mobile-only" onClick={onClose}>×</button>
        <div className="sidebar-badge">17 Patterns</div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="pattern-list">
          {patterns.map((p) => {
            const isGenerated = p.id === '01' || p.id === '02' || p.id === '03';
            return (
              <li key={p.id}>
                <button 
                  className={`pattern-btn ${selectedId === p.id ? 'active' : ''} ${!isGenerated ? 'is-locked' : ''}`}
                  onClick={() => isGenerated && onSelect(p.id)}
                  title={!isGenerated ? "Coming Soon" : ""}
                >
                  <span className="pattern-num">{p.id}</span>
                  <span className="pattern-name">{p.name}</span>
                  {!isGenerated && <span className="lock-badge">🔒 Locked</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <p>by Thomas Shelby</p>
      </div>
    </aside>
  );
};

export default Sidebar;
