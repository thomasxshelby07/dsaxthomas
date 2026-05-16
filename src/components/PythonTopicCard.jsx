import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import './PythonTopicCard.css';

const PythonTopicCard = ({ topic, completedLessons, onToggleLesson, onSelect, allTopics }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [topic]);

  return (
    <section className="python-section">
      <div className="python-header">
        <div className="python-title-row">
          <h2 className="python-title">
            <span className="python-id">CHAPTER {topic.id}</span>
            {topic.name}
          </h2>
        </div>
      </div>

      <div className="python-grid">
        {/* Objectives Section */}
        {topic.objectives && topic.objectives.length > 0 && (
          <div className="card-block objectives-block">
            <h3 className="block-title">🎯 Objectives</h3>
            <ul className="objectives-list">
              {topic.objectives.map((obj, idx) => (
                <li key={idx}><span className="obj-icon">✓</span> {obj}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Content Sections */}
        <div className="python-content">
          {topic.sections && topic.sections.map((sec, idx) => {
            const lessonId = `${topic.id}-lesson-${idx}`;
            const isCompleted = completedLessons?.includes(lessonId);

            return (
            <div key={idx} id={lessonId} className={`card-block content-section-block ${isCompleted ? 'lesson-completed-block' : ''}`}>
              <div className="section-header-row">
                <h3 className="section-title">{sec.title}</h3>
                <button 
                  className={`mark-done-btn ${isCompleted ? 'done' : ''}`}
                  onClick={() => onToggleLesson && onToggleLesson(lessonId)}
                >
                  {isCompleted ? '✓ Completed' : 'Mark as Done'}
                </button>
              </div>
              
              {sec.content && sec.content.map((para, pIdx) => (
                <p key={pIdx} className="section-para" dangerouslySetInnerHTML={{ __html: para }}></p>
              ))}

              {sec.exercises && (
                <div className="section-exercises">
                  {sec.exercises.map((ex, exIdx) => (
                    <div key={exIdx} className="exercise-box">
                      <div className="exercise-header">
                        <span className="exercise-badge">Exercise</span>
                        <span className="exercise-num">{ex.id}</span>
                      </div>
                      <div className="exercise-text" dangerouslySetInnerHTML={{ __html: ex.q }}></div>
                      
                      <details className="exercise-solution-details">
                        <summary className="view-solution-summary">View Solution</summary>
                        <div className="exercise-a coding-solution-area">
                          <div className="solution-terminal">
                            <div className="terminal-header">
                              <div className="terminal-buttons">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                              </div>
                              <span className="terminal-title">solution.py</span>
                            </div>
                            <pre className="code-pre">
                              <code className="language-python">{ex.a}</code>
                            </pre>
                          </div>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {sec.subSections && (
                <div className="sub-sections">
                  {sec.subSections.map((sub, sIdx) => (
                    <div key={sIdx} className="sub-section-item">
                      <h4 className="sub-section-title">{sub.title}</h4>
                      <ul className="sub-section-list">
                        {sub.content && sub.content.map((item, iIdx) => (
                          <li key={iIdx} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                      </ul>
                      {sub.codeSnippet && (
                        <div className="code-snippet-block">
                          <div className="code-header">
                            <span className="code-lang">{sub.codeSnippet.language}</span>
                            <span className="code-title">{sub.codeSnippet.title}</span>
                          </div>
                          <pre className="code-pre">
                            <code className={`language-${sub.codeSnippet.language}`}>
                              {sub.codeSnippet.code}
                            </code>
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            );
          })}
        </div>

        {/* Key Takeaways */}
        {topic.keyTakeaways && topic.keyTakeaways.length > 0 && (
          <div className="card-block takeaways-block">
            <h3 className="block-title takeaway-title">💡 Key Takeaways</h3>
            <ul className="takeaways-list">
              {topic.keyTakeaways.map((takeaway, idx) => (
                <li key={idx}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Concept Questions */}
        {topic.conceptQuestions && topic.conceptQuestions.length > 0 && (
          <div id={`${topic.id}-concept`} className="card-block concept-block">
            <h3 className="block-title concept-title">🧠 Concept Questions</h3>
            <div className="exercise-list">
              {topic.conceptQuestions.map((cq, idx) => (
                <details key={idx} className="exercise-item concept-item">
                  <summary className="exercise-q">
                    {idx + 1}. <span dangerouslySetInnerHTML={{ __html: cq.q }} />
                  </summary>
                  <div className="exercise-a" dangerouslySetInnerHTML={{ __html: cq.a }} />
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Coding Questions */}
        {topic.codingQuestions && topic.codingQuestions.length > 0 && (
          <div id={`${topic.id}-coding`} className="card-block coding-block">
            <h3 className="block-title coding-title">💻 Coding Challenges</h3>
            <div className="exercise-list">
              {topic.codingQuestions.map((cq, idx) => (
                <details key={idx} className="exercise-item coding-item">
                  <summary className="exercise-q">
                    {idx + 1}. <span dangerouslySetInnerHTML={{ __html: cq.q }} />
                  </summary>
                  <div className="exercise-a coding-solution-area">
                    <div className="solution-terminal">
                      <div className="terminal-header">
                        <div className="terminal-buttons">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                        </div>
                        <span className="terminal-title">solution.py</span>
                      </div>
                      <pre className="code-pre">
                        <code className="language-python">{cq.a}</code>
                      </pre>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Interview Questions (Backward Compatibility) */}
        {topic.interviewQuestions && topic.interviewQuestions.length > 0 && (
          <div id={`${topic.id}-interview`} className="card-block interview-block">
            <h3 className="block-title interview-title">💼 Top Interview Questions</h3>
            <div className="interview-list">
              {topic.interviewQuestions.map((iq, idx) => (
                <details key={idx} className="interview-item">
                  <summary className="interview-q" dangerouslySetInnerHTML={{ __html: iq.q }} />
                  <div className="interview-a" dangerouslySetInnerHTML={{ __html: iq.a }} />
                </details>
              ))}
            </div>
          </div>
        )}
        {/* Next Chapter Navigation */}
        <div className="next-chapter-container">
          {(() => {
            const currentIndex = allTopics?.findIndex(t => t.id === topic.id);
            const nextTopic = allTopics?.[currentIndex + 1];
            if (nextTopic) {
              return (
                <button 
                  className="next-chapter-btn" 
                  onClick={() => {
                    onSelect(nextTopic.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="next-btn-content">
                    <span className="next-label">Coming Up Next</span>
                    <span className="next-title">{nextTopic.id}. {nextTopic.name}</span>
                  </div>
                  <div className="next-arrow-circle">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              );
            }
            return (
              <div className="course-completed-msg">
                🎉 You've reached the end of the current curriculum!
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default PythonTopicCard;
