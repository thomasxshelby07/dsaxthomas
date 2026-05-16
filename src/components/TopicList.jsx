import React from 'react';
import './TopicList.css';

const TopicList = ({ items, onSelect, domain }) => {
  return (
    <div className="topic-list-container">
      <h2 className="topic-list-title">Select a {domain === 'DSA' ? 'Pattern' : 'Topic'} to Begin</h2>
      <div className="topic-grid">
        {items.map((item) => {
          const isGenerated = domain === 'PYTHON' || item.id === '01' || item.id === '02' || item.id === '03';
          
          return (
            <button 
              key={item.id} 
              className={`topic-card-btn ${!isGenerated ? 'locked' : ''}`}
              onClick={() => isGenerated && onSelect(item.id)}
              disabled={!isGenerated}
            >
              <div className="topic-card-header">
                <span className="topic-id">{item.id}</span>
                {!isGenerated && <span className="topic-lock">🔒 Locked</span>}
              </div>
              <h3 className="topic-name">{item.name}</h3>
              {domain === 'PYTHON' && item.sections && (
                <p className="topic-meta">{item.sections.length} Lessons</p>
              )}
              {domain === 'DSA' && item.questions && (
                <p className="topic-meta">{item.questions.length} Questions</p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TopicList;
