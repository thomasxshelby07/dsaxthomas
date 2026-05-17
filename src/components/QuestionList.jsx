import React from 'react';
import './QuestionList.css';

const QuestionList = ({ questions, onSelectQuestion, solvedQuestions, onToggleSolved }) => {
  if (!questions || questions.length === 0) return null;

  const masteryQuestions = questions.filter(q => q.isMastery);
  const regularQuestions = questions.filter(q => !q.isMastery);

  const renderTable = (qList, title, isMasterySection) => (
    <div className={`question-section ${isMasterySection ? 'mastery-section' : 'regular-section'}`}>
      <h3 className="section-heading">
        {isMasterySection ? <span className="mastery-badge">{title}</span> : title}
      </h3>
      
      {/* Desktop Table View */}
      <div className="table-responsive desktop-only">
        <table className="question-table">
          <thead>
            <tr>
              <th className="th-status">Status</th>
              <th className="th-diff">Diff</th>
              <th className="th-name">Question</th>
              <th className="th-companies">Companies</th>
            </tr>
          </thead>
          <tbody>
            {qList.map((q, idx) => {
              const qId = q.id || q.name;
              const isSolved = solvedQuestions.includes(qId);
              const isGenerated = !!q.id;
              return (
                <tr key={idx} className={`question-row ${isSolved ? 'row-solved' : ''} ${!isGenerated ? 'is-locked' : ''}`}>
                  <td className="td-status">
                    <button 
                      className={`status-btn ${isSolved ? 'solved' : 'todo'}`}
                      onClick={(e) => { e.stopPropagation(); isGenerated && onToggleSolved(qId); }}
                      title={!isGenerated ? "Locked" : isSolved ? "Mark as To-do" : "Mark as Solved"}
                      disabled={!isGenerated}
                    >
                      {!isGenerated ? "🔒" : isSolved ? "✅" : "⭕"}
                    </button>
                  </td>
                  <td className="td-diff">
                    <span className={`badge-sm badge-${q.difficulty.toLowerCase()}`}>
                      [{q.difficulty}]
                    </span>
                  </td>
                  <td className="td-name">
                    {isGenerated ? (
                      <button className="question-link" onClick={() => onSelectQuestion(q)}>
                        {q.name.match(/^Q\d+\./) ? q.name : `Q${idx + 1}. ${q.name}`}
                      </button>
                    ) : (
                      <span className="question-link static">
                        {q.name.match(/^Q\d+\./) ? q.name : `Q${idx + 1}. ${q.name}`} (Coming Soon)
                      </span>
                    )}
                  </td>
                  <td className="td-companies">
                    <div className="company-tags-list">
                      {q.companies && q.companies.map((company, cIdx) => (
                        <span key={cIdx} className="company-tag">{company}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="mobile-only question-cards">
        {qList.map((q, idx) => {
          const qId = q.id || q.name;
          const isSolved = solvedQuestions.includes(qId);
          const isGenerated = !!q.id;
          return (
            <div key={idx} className={`question-card-mobile ${isSolved ? 'solved' : ''} ${!isGenerated ? 'is-locked' : ''}`} onClick={() => isGenerated && onSelectQuestion(q)}>
              <div className="card-top">
                <span className={`difficulty-dot ${q.difficulty.toLowerCase()}`}></span>
                <span className="card-name">
                  {q.name.match(/^Q\d+\./) ? q.name : `Q${idx + 1}. ${q.name}`} {!isGenerated && "(Locked)"}
                </span>
                <button 
                  className="card-status-toggle"
                  onClick={(e) => { e.stopPropagation(); isGenerated && onToggleSolved(qId); }}
                  disabled={!isGenerated}
                >
                  {!isGenerated ? "🔒" : isSolved ? "✅" : "⭕"}
                </button>
              </div>
              <div className="card-bottom">
                <div className="card-companies">
                  {q.companies?.slice(0, 3).map((c, i) => (
                    <span key={i} className="c-tag">{c}</span>
                  ))}
                </div>
                {isGenerated && <span className="arrow">→</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="question-list-container">
      {masteryQuestions.length > 0 && renderTable(masteryQuestions, "Pattern Mastery (Confidence Boosters)", true)}
      {/* {regularQuestions.length > 0 && renderTable(regularQuestions, "Practice Questions", false)} */}
    </div>
  );
};

export default QuestionList;
