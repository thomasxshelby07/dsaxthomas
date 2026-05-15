import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';

const QuestionCard = ({ question }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [question.code]);

  return (
    <article className="question-card">
      <header className="qc-header">
        <div className="qc-title-wrap">
          <span className="qc-num">{question.num}</span>
          <h3 className="qc-title">{question.title}</h3>
        </div>
        <div className="qc-meta">
          <span className={`badge ${question.diff}`}>{question.diff}</span>
          <a href={question.lcLink} target="_blank" rel="noreferrer" className="lc-link">
            {question.lcNum} ↗
          </a>
        </div>
      </header>
      
      <div className="qc-body">
        <section>
          <h4 className="section-title">
            <span role="img" aria-label="clipboard">📋</span> Problem Statement
          </h4>
          <div className="problem-text">
            {question.problem.map((line, i) => (
              <p key={i} style={{ marginBottom: i !== question.problem.length - 1 ? '0.5rem' : '0' }}>{line}</p>
            ))}
          </div>
        </section>

        <section>
          <h4 className="section-title">
            <span role="img" aria-label="test tube">🧪</span> Test Cases
          </h4>
          <div className="test-cases">
            {question.testCases.map((tc, i) => (
              <div key={i} className="tc-item">
                <div className="tc-row">
                  <span className="tc-label">Input:</span>
                  <span>{tc.input}</span>
                </div>
                <div className="tc-row">
                  <span className="tc-label">Output:</span>
                  <span className="tc-val">{tc.output}</span>
                </div>
                {tc.note && <div className="tc-note">Note: {tc.note}</div>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="section-title">
            <span role="img" aria-label="magnifying glass">🔍</span> Dry Run
          </h4>
          <div className="dry-run-wrapper">
            <table className="dry-run-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Pointers / State</th>
                  <th>Action / Result</th>
                </tr>
              </thead>
              <tbody>
                {question.dryRun.map((row, i) => (
                  <tr key={i}>
                    <td>{row.step}</td>
                    <td>{row.state}</td>
                    <td>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h4 className="section-title">
            <span role="img" aria-label="snake">🐍</span> Python Code
          </h4>
          <div className="code-wrapper">
            <div className="code-header">
              <span className="code-lang">Python 3</span>
              <div className="complexity">
                <span>⏱ {question.timeComp}</span>
                <span>💾 {question.spaceComp}</span>
              </div>
            </div>
            <pre>
              <code className="language-python">{question.code}</code>
            </pre>
          </div>
        </section>

        {question.note && (
          <div className="important-note">
            <div className="note-icon">💡</div>
            <div className="note-content">
              <h4>Important Note</h4>
              <p>{question.note}</p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default QuestionCard;
