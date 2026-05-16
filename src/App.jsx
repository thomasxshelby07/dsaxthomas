import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopicList from './components/TopicList';
import PatternCard from './components/PatternCard';
import QuestionDetail from './components/QuestionDetail';
import PythonTopicCard from './components/PythonTopicCard';
import DomainSelection from './components/DomainSelection';
import { patternsData } from './data/patterns';
import { pythonData } from './data/pythonData';
import './App.css';

function App() {
  const [domain, setDomain] = useState(null); // 'DSA', 'PYTHON', or null for home
  const [selectedPatternId, setSelectedPatternId] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [solvedQuestions, setSolvedQuestions] = useState(() => {
    const saved = localStorage.getItem('dsa_solved_questions');
    return saved ? JSON.parse(saved) : [];
  });
  const [completedPythonLessons, setCompletedPythonLessons] = useState(() => {
    const saved = localStorage.getItem('python_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('dsa_solved_questions', JSON.stringify(solvedQuestions));
  }, [solvedQuestions]);

  React.useEffect(() => {
    localStorage.setItem('python_completed_lessons', JSON.stringify(completedPythonLessons));
  }, [completedPythonLessons]);

  const toggleSolved = (id) => {
    setSolvedQuestions(prev => 
      prev.includes(id) ? prev.filter(qId => qId !== id) : [...prev, id]
    );
  };

  const togglePythonLesson = (lessonId) => {
    setCompletedPythonLessons(prev => 
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  const currentData = domain === 'DSA' ? patternsData : domain === 'PYTHON' ? pythonData : [];
  const selectedPattern = currentData.find(p => p.id === selectedPatternId);

  // When changing pattern or domain, clear selected questions
  const handlePatternSelect = (id) => {
    setSelectedPatternId(id);
    setSelectedQuestion(null);
    setIsSidebarOpen(false); // Close sidebar on selection
  };

  const handleDomainChange = (newDomain) => {
    if (domain !== newDomain) {
      setDomain(newDomain);
      setSelectedPatternId(null);
      setSelectedQuestion(null);
    }
  };

  if (domain === null) {
    return <DomainSelection onSelectDomain={handleDomainChange} />;
  }

  return (
    <div className={`app-layout ${selectedPattern ? 'pattern-active' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="mobile-header">
        <button className="menu-btn" onClick={() => setIsSidebarOpen(true)}>
          <span className="icon">☰</span>
        </button>
        <h1 className="mobile-logo" onClick={() => setDomain(null)} style={{ cursor: 'pointer' }}>
          {domain === 'DSA' ? 'DSA Mastery' : 'Python Mastery'}
        </h1>
      </div>

      <Sidebar 
        patterns={currentData} 
        selectedId={selectedPatternId} 
        onSelect={handlePatternSelect}
        onClose={() => setIsSidebarOpen(false)}
        domain={domain}
        onDomainChange={handleDomainChange}
        completedPythonLessons={completedPythonLessons}
      />

      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}
      
      <div className="main-content">
        {selectedPattern && !selectedQuestion && (
          <div className="mobile-nav">
            <button className="back-btn" onClick={() => setSelectedPatternId(null)}>
              <span className="icon">←</span> Back to {domain === 'DSA' ? 'Patterns' : 'Topics'}
            </button>
          </div>
        )}

        {selectedQuestion && domain === 'DSA' ? (
          <main className="question-detail-view">
            <QuestionDetail 
              question={selectedQuestion} 
              onBack={() => setSelectedQuestion(null)} 
            />
          </main>
        ) : !selectedPattern ? (
          <div className="home-view">
            <TopicList 
              items={currentData} 
              onSelect={handlePatternSelect} 
              domain={domain} 
            />
          </div>
        ) : domain === 'DSA' ? (
          <main className="patterns-container">
            <PatternCard 
              pattern={selectedPattern} 
              onSelectQuestion={setSelectedQuestion}
              solvedQuestions={solvedQuestions}
              onToggleSolved={toggleSolved}
            />
          </main>
        ) : (
          <main className="patterns-container">
            <PythonTopicCard 
              topic={selectedPattern} 
              completedLessons={completedPythonLessons}
              onToggleLesson={togglePythonLesson}
              onSelect={handlePatternSelect}
              allTopics={currentData}
            />
          </main>
        )}
        
        {!selectedQuestion && (
          <footer className="app-footer">
            <p>Built for {domain === 'DSA' ? 'Data Structures & Algorithms' : 'Python'} Mastery</p>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;




