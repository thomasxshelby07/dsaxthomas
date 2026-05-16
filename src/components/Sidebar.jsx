import React from 'react';
import './Sidebar.css';

const Sidebar = ({ patterns, selectedId, onSelect, onClose, domain, onDomainChange, completedPythonLessons }) => {
  const scrollToLesson = (lessonId) => {
    const el = document.getElementById(lessonId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 1024) onClose();
    }
  };

  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <h2 
          className="sidebar-logo" 
          onClick={() => onDomainChange(null)}
          style={{ cursor: 'pointer' }}
          title="Back to Home"
        >
          {domain === 'DSA' ? (
            <>DSA<span className="logo-highlight">PATTERNS</span></>
          ) : (
            <>PYTHON<span className="logo-highlight">NOTES</span></>
          )}
        </h2>
        <button className="sidebar-close-btn mobile-only" onClick={onClose}>×</button>
        <div className="sidebar-badge">{patterns.length} {domain === 'DSA' ? 'Patterns' : 'Topics'}</div>
      </div>
      
      <div className="domain-toggle-container">
        <div className="domain-toggle">
          <button 
            className={`toggle-btn ${domain === 'DSA' ? 'active' : ''}`}
            onClick={() => onDomainChange('DSA')}
          >
            DSA
          </button>
          <button 
            className={`toggle-btn ${domain === 'PYTHON' ? 'active' : ''}`}
            onClick={() => onDomainChange('PYTHON')}
          >
            Python
          </button>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="pattern-list">
          {patterns.map((p) => {
            const isGenerated = domain === 'PYTHON' || p.id === '01' || p.id === '02' || p.id === '03';
            const isActive = selectedId === p.id;

            return (
              <li key={p.id} className="sidebar-list-item">
                <button 
                  className={`pattern-btn ${isActive ? 'active' : ''} ${!isGenerated ? 'is-locked' : ''}`}
                  onClick={() => isGenerated && onSelect(p.id)}
                  title={!isGenerated ? "Coming Soon" : ""}
                >
                  <span className="pattern-num">{p.id}</span>
                  <span className="pattern-name">{p.name}</span>
                  {!isGenerated && <span className="lock-badge">🔒 Locked</span>}
                </button>
                
                {domain === 'PYTHON' && isActive && p.sections && (
                  <ul className="nested-lessons">
                    {p.sections.map((section, idx) => {
                      const lessonId = `${p.id}-lesson-${idx}`;
                      const isCompleted = completedPythonLessons?.includes(lessonId);
                      return (
                        <li key={idx}>
                          <button 
                            className={`nested-lesson-btn ${isCompleted ? 'completed' : ''}`}
                            onClick={() => scrollToLesson(lessonId)}
                          >
                            <span className="lesson-indicator"></span>
                            <span className="lesson-title">
                              {section.title.includes(':') ? section.title.split(':')[1].trim() : section.title}
                            </span>
                            {isCompleted && <span className="check-icon">✓</span>}
                          </button>
                        </li>
                      );
                    })}
                    {p.conceptQuestions && p.conceptQuestions.length > 0 && (
                      <li>
                        <button 
                          className="nested-lesson-btn"
                          onClick={() => scrollToLesson(`${p.id}-concept`)}
                        >
                          <span className="lesson-indicator" style={{background: '#ff7e07'}}></span>
                          <span className="lesson-title" style={{color: '#ff7e07', fontWeight: 'bold'}}>Concept Quiz</span>
                        </button>
                      </li>
                    )}
                    {p.codingQuestions && p.codingQuestions.length > 0 && (
                      <li>
                        <button 
                          className="nested-lesson-btn"
                          onClick={() => scrollToLesson(`${p.id}-coding`)}
                        >
                          <span className="lesson-indicator" style={{background: 'var(--green)'}}></span>
                          <span className="lesson-title" style={{color: 'var(--green)', fontWeight: 'bold'}}>Coding Challenges</span>
                        </button>
                      </li>
                    )}
                    {p.interviewQuestions && p.interviewQuestions.length > 0 && (
                      <li>
                        <button 
                          className="nested-lesson-btn"
                          onClick={() => scrollToLesson(`${p.id}-interview`)}
                        >
                          <span className="lesson-indicator" style={{background: 'var(--purple)'}}></span>
                          <span className="lesson-title" style={{color: 'var(--purple)', fontWeight: 'bold'}}>Interview Questions</span>
                        </button>
                      </li>
                    )}
                  </ul>
                )}
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
