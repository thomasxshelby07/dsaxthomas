import React from 'react';
import QuestionList from './QuestionList';
import './PatternCard.css';

const renderVisual = (id) => {
  if (id === '08') {
    return (
      <div className="pattern-visual">
        <div className="tv-node tv-root">1</div>
        <div className="tv-line tv-line-left"></div>
        <div className="tv-line tv-line-right"></div>
        <div className="tv-node tv-left">2</div>
        <div className="tv-node tv-right">3</div>
      </div>
    );
  }
  if (id === '09') {
    return (
      <div className="pattern-visual">
        <div className="gv-node gv-1">A</div>
        <div className="gv-node gv-2">B</div>
        <div className="gv-node gv-3">C</div>
        <div className="gv-line gv-line-1"></div>
        <div className="gv-line gv-line-2"></div>
        <div className="gv-line gv-line-3"></div>
      </div>
    );
  }
  return null;
};

const PatternCard = ({ pattern, onSelectQuestion, solvedQuestions, onToggleSolved }) => {
  const [filter, setFilter] = React.useState('all');

  const filteredQuestions = pattern.questions.filter(q => {
    const isSolved = solvedQuestions.includes(q.id || q.name);
    if (filter === 'solved') return isSolved;
    if (filter === 'unsolved') return !isSolved;
    return true;
  });

  return (
    <section className="pattern-section">
      <div className="pattern-header">
        <div className="pattern-title-row">
          <h2 className="pattern-title">
            <span className="pattern-id">PATTERN {pattern.id}</span>
            {pattern.name}
          </h2>
          {renderVisual(pattern.id)}
        </div>
        <div className="core-rule">
          <span className="rule-label">CORE RULE:</span> {pattern.coreRule}
        </div>
      </div>

      <div className="pattern-grid">
        {/* Left Column: Sub Patterns & Keywords */}
        <div className="grid-left">
          <div className="card-block sub-patterns-block">
            <h3 className="block-title">Sub-Patterns</h3>
            <div className="sub-pattern-list">
              {pattern.subPatterns.map((sp, idx) => (
                <div key={idx} className="sub-pattern-item">
                  <h4 className="sp-name">{sp.name}</h4>
                  <ul className="sp-points">
                    {sp.points.map((point, pIdx) => (
                      <li key={pIdx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card-block keywords-block">
            <h3 className="block-title">Keyword Triggers</h3>
            <div className="keyword-tags">
              {pattern.keywords.map((kw, idx) => (
                <span key={idx} className="kw-tag">
                  <span className="kw-icon">⚡</span> {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Confusion Zone */}
        <div className="grid-right">
          <div className="card-block confusion-block">
            <h3 className="block-title warning-title">Confusion Zone</h3>
            <p className="block-desc">Watch out for these tricky similar conditions:</p>
            <div className="confusion-table-wrapper">
              <table className="confusion-table">
                <thead>
                  <tr>
                    <th>Trigger / Keyword</th>
                    <th>Actual Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  {pattern.confusionZone.map((cz, idx) => (
                    <tr key={idx}>
                      <td className="cz-trigger">{cz.trigger}</td>
                      <td className="cz-pattern">{cz.pattern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="question-list-header">
        <div className="filter-group">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'unsolved' ? 'active' : ''}`} onClick={() => setFilter('unsolved')}>To-Do</button>
          <button className={`filter-btn ${filter === 'solved' ? 'active' : ''}`} onClick={() => setFilter('solved')}>Solved</button>
        </div>
      </div>

      <QuestionList 
        questions={filteredQuestions} 
        onSelectQuestion={onSelectQuestion} 
        solvedQuestions={solvedQuestions}
        onToggleSolved={onToggleSolved}
      />
    </section>
  );
};

export default PatternCard;
