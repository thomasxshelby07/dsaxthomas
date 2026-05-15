import React from 'react';
import './QuestionList.css';

const QuestionList = ({ questions, onSelectQuestion }) => {
  if (!questions || questions.length === 0) return null;

  const masteryQuestions = questions.filter(q => q.isMastery);
  const regularQuestions = questions.filter(q => !q.isMastery);

  const renderTable = (qList, title, isMasterySection) => (
    <div className={`question-section ${isMasterySection ? 'mastery-section' : 'regular-section'}`}>
      <h3 className="section-heading">
        {isMasterySection ? <span className="mastery-badge">{title}</span> : title}
      </h3>
      <div className="table-responsive">
        <table className="question-table">
          <thead>
            <tr>
              <th className="th-diff">Diff</th>
              <th className="th-name">Question</th>
              <th className="th-companies">Companies</th>
            </tr>
          </thead>
          <tbody>
            {qList.map((q, idx) => (
              <tr key={idx} className="question-row">
                <td className="td-diff">
                  <span className={`badge-sm badge-${q.difficulty.toLowerCase()}`}>
                    [{q.difficulty}]
                  </span>
                </td>
                <td className="td-name">
                  {q.id ? (
                    <button 
                      className="question-link" 
                      onClick={() => onSelectQuestion(q)}
                    >
                      {q.name}
                    </button>
                  ) : (
                    <span className="question-link static">{q.name}</span>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="question-list-container">
      {masteryQuestions.length > 0 && renderTable(masteryQuestions, "Pattern Mastery (Confidence Boosters)", true)}
      {regularQuestions.length > 0 && renderTable(regularQuestions, "Practice Questions", false)}
    </div>
  );
};

export default QuestionList;
