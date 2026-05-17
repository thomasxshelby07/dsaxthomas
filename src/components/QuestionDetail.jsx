import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme for Prism
import 'prismjs/components/prism-python';
import './QuestionDetail.css';

const QuestionDetail = ({ question, onBack }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top
    Prism.highlightAll();
  }, [question, activeTab]);

  if (!question) return null;

  // Helper to parse simple markdown bold **text**
  const parseMarkdown = (text) => {
    if (!text) return "";
    return text.split('**').map((part, idx) => 
      idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
    );
  };

  // Handle both old single-solution and new multi-solution structures
  const solutions = question.solutions || (question.code ? [{
    type: "Solution",
    concept: question.concept,
    code: question.code,
    dryRun: question.dryRun,
    complexity: question.importantNotes // fallback
  }] : []);

  const currentSolution = solutions[activeTab];

  return (
    <div className="question-detail-container">
      <div className="qd-nav">
        <button className="back-btn" onClick={onBack}>
          <span className="icon">←</span> Back to Pattern
        </button>
      </div>

      <header className="qd-header">
        <div className="qd-badges">
          <span className={`badge-sm badge-${question.difficulty.toLowerCase()}`}>
            [{question.difficulty}]
          </span>
          {question.companies && question.companies.map((c, i) => (
            <span key={i} className="company-tag">{c}</span>
          ))}
        </div>
        <h1 className="qd-title">{question.name}</h1>
        {question.link && (
          <a href={question.link} target="_blank" rel="noreferrer" className="leetcode-link">
            Solve on LeetCode ↗
          </a>
        )}
      </header>

      {question.problemStatement && (
        <section className="qd-section problem-section">
          <h2 className="section-title">Problem Statement</h2>
          <div className="problem-text">
            {question.problemStatement.split('\n').map((line, i) => (
              <p key={i}>{parseMarkdown(line)}</p>
            ))}
          </div>
        </section>
      )}

      {question.testCases && question.testCases.length > 0 && (
        <section className="qd-section testcases-section">
          <h2 className="section-title">Example Test Cases</h2>
          <div className="testcases-grid">
            {question.testCases.map((tc, i) => (
              <div key={i} className="testcase-box">
                <div className="tc-header">Example {i + 1}</div>
                <div className="tc-content">
                  <div className="tc-row"><strong>Input:</strong> <code>{tc.input}</code></div>
                  <div className="tc-row"><strong>Output:</strong> <code>{tc.output}</code></div>
                  {tc.explanation && (
                    <div className="tc-row"><strong>Explanation:</strong> {parseMarkdown(tc.explanation)}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {solutions.length > 1 && (
        <div className="solution-tabs">
          {solutions.map((sol, idx) => (
            <button 
              key={idx} 
              className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {sol.type}
            </button>
          ))}
        </div>
      )}

      {currentSolution && (
        <div className="solution-content">
          {currentSolution.concept && (
            <section className="qd-section concept-section">
              <h2 className="section-title">{currentSolution.type} Logic</h2>
              <div className="concept-text">
                 {currentSolution.concept.split('\n').map((line, i) => (
                   <p key={i}>{parseMarkdown(line)}</p>
                 ))}
              </div>
            </section>
          )}

          {currentSolution.dryRun && currentSolution.dryRun.length > 0 && (
            <section className="qd-section dryrun-section">
              <h2 className="section-title">Step-by-Step Dry Run</h2>
              <div className="dryrun-steps">
                {currentSolution.dryRun.map((step, i) => {
                  // New logic: Split by <br> to handle multi-line dry run steps
                  const lines = step.split('<br>');
                  const title = lines[0]; // Usually "**Step X: ...**"
                  const details = lines.slice(1); // The rest

                  return (
                    <div key={i} className="dryrun-step">
                      <div className="dryrun-step-num">{i + 1}</div>
                      <div className="dryrun-step-header">
                        {parseMarkdown(title)}
                      </div>
                      <div className="dryrun-content">
                        {details.map((line, idx) => {
                          const cleanLine = line.trim().replace(/^•\s*/, '');
                          const isKeyValuePair = cleanLine.includes(':');
                          
                          if (isKeyValuePair) {
                            const [rawKey, ...valParts] = cleanLine.split(':');
                            const key = rawKey.replace(/\*\*/g, '').trim(); // Remove asterisks from key
                            const val = valParts.join(':').trim();
                            const isArray = val.trim().startsWith('[') && val.trim().endsWith(']');
                            
                            // Visual array rendering
                            const renderVal = (v) => {
                              if (isArray) {
                                try {
                                  // Remove brackets and split by comma
                                  const items = v.replace(/[\[\]]/g, '').split(',');
                                  return (
                                    <div className="visual-array">
                                      {items.map((item, idx) => (
                                        <div key={idx} className="array-box">
                                          {item.trim().replace(/['"]/g, '')}
                                        </div>
                                      ))}
                                    </div>
                                  );
                                } catch(e) { return parseMarkdown(v); }
                              }
                              return parseMarkdown(v);
                            };

                            return (
                              <div key={idx} className={`dr-state-row ${isArray ? 'dr-array-row' : ''}`}>
                                <span className="dr-key">
                                  {isArray ? '📊 ' : '📍 '}{key}:
                                </span>
                                <span className="dr-val">{renderVal(val)}</span>
                              </div>
                            );
                          }
                          
                          return (
                            <div key={idx} className="dr-line">
                               <span className="dr-bullet">💡</span> {parseMarkdown(cleanLine)}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {currentSolution.code && (
            <section className="qd-section code-section">
              <h2 className="section-title">{currentSolution.type} Python Code</h2>
              <div className="code-wrapper">
                <pre>
                  <code className="language-python">
                    {currentSolution.code}
                  </code>
                </pre>
              </div>
            </section>
          )}

          {currentSolution.complexity && (
            <div className="complexity-info">
               <strong>Complexity:</strong> {parseMarkdown(currentSolution.complexity)}
            </div>
          )}
        </div>
      )}



      {question.importantNotes && (
        <section className="qd-section notes-section">
          <h2 className="section-title">Important Notes / Learnings</h2>
          <div className="notes-box">
             {question.importantNotes.split('\n').map((line, i) => (
               <p key={i}>{parseMarkdown(line)}</p>
             ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default QuestionDetail;
