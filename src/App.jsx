import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import PatternCard from './components/PatternCard';
import QuestionDetail from './components/QuestionDetail';
import { patternsData } from './data/patterns';
import './App.css';

function App() {
  const [selectedPatternId, setSelectedPatternId] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [solvedQuestions, setSolvedQuestions] = useState(() => {
    const saved = localStorage.getItem('dsa_solved_questions');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('dsa_solved_questions', JSON.stringify(solvedQuestions));
  }, [solvedQuestions]);

  const toggleSolved = (id) => {
    setSolvedQuestions(prev => 
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    );
  };

  const selectedPattern = patternsData.find(p => p.id === selectedPatternId);

  // When changing pattern, clear any selected question
  const handlePatternSelect = (id) => {
    setSelectedPatternId(id);
    setSelectedQuestion(null);
    setIsSidebarOpen(false); // Close sidebar on selection
  };

  return (
    <div className={`app-layout ${selectedPattern ? 'pattern-active' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="mobile-header">
        <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
          <span className="icon">☰</span>
        </button>
        <h1 className="mobile-logo">DSA Mastery</h1>
      </div>

      <Sidebar 
        patterns={patternsData} 
        selectedId={selectedPatternId} 
        onSelect={handlePatternSelect}
        onClose={() => setIsSidebarOpen(false)}
      />

      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      
      <div className="main-content">
        {selectedPattern && !selectedQuestion && (
          <div className="mobile-nav">
            <button className="back-btn" onClick={() => setSelectedPatternId(null)}>
              <span className="icon">←</span> Back to Patterns
            </button>
          </div>
        )}

        {selectedQuestion ? (
          <main className="question-detail-view">
            <QuestionDetail 
              question={selectedQuestion} 
              onBack={() => setSelectedQuestion(null)} 
            />
          </main>
        ) : !selectedPattern ? (
          <div className="home-view">
            <Hero />
            <div className="select-prompt">
              <h2>👈 Select a pattern from the menu to begin</h2>
            </div>
          </div>
        ) : (
          <main className="patterns-container">
            <PatternCard 
              pattern={selectedPattern} 
              onSelectQuestion={setSelectedQuestion}
              solvedQuestions={solvedQuestions}
              onToggleSolved={toggleSolved}
            />
          </main>
        )}
        
        {!selectedQuestion && (
          <footer className="app-footer">
            <p>Built for Data Structures & Algorithms Mastery</p>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;



