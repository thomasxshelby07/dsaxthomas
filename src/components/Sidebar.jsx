import React from 'react';
import './Sidebar.css';

const Sidebar = ({ patterns, selectedId, onSelect }) => {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-logo">DSA<span className="logo-highlight">PATTERNS</span></h2>
        <div className="sidebar-badge">17 Patterns</div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="pattern-list">
          {patterns.map((p) => (
            <li key={p.id}>
              <button 
                className={`pattern-btn ${selectedId === p.id ? 'active' : ''}`}
                onClick={() => onSelect(p.id)}
              >
                <span className="pattern-num">{p.id}</span>
                <span className="pattern-name">{p.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <p>by Thomas Shelby</p>
      </div>
    </aside>
  );
};

export default Sidebar;
