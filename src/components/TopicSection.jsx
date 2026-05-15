import React from 'react';

const TopicSection = ({ data }) => {
  return (
    <section className="topic-section">
      <div className="topic-header">
        <div className="topic-title">
          <span className="topic-icon" role="img" aria-label="target">🎯</span>
          <h2>{data.title} Pattern</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3>Overview</h3>
            {data.overview.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          
          <div>
            <h3 style={{ color: 'var(--accent-success)' }}>When to use?</h3>
            <ul className="concept-list">
              {data.whenToUse.map((text, i) => (
                <li key={i} className="concept-item">{text}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: 'var(--accent-info)' }}>Types</h3>
            <ul className="concept-list">
              {data.types.map((text, i) => (
                <li key={i} className="concept-item">{text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
