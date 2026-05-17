import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopicList from './components/TopicList';
import PatternCard from './components/PatternCard';
import QuestionDetail from './components/QuestionDetail';
import PythonTopicCard from './components/PythonTopicCard';
import DomainSelection from './components/DomainSelection';
import './App.css';

function App() {
  const [domain, setDomain] = useState(null); // 'DSA', 'PYTHON', or null for home
  const [selectedPatternId, setSelectedPatternId] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  
  // Dynamic Data States (from MongoDB)
  const [patternsData, setPatternsData] = useState([]);
  const [pythonData, setPythonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [solvedQuestions, setSolvedQuestions] = useState(() => {
    const saved = localStorage.getItem('dsa_solved_questions');
    return saved ? JSON.parse(saved) : [];
  });
  const [completedPythonLessons, setCompletedPythonLessons] = useState(() => {
    const saved = localStorage.getItem('python_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch Data from MongoDB
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch DSA Patterns
        const patternsRes = await fetch('/api/patterns');
        if (!patternsRes.ok) throw new Error('Failed to fetch DSA patterns from MongoDB Atlas');
        const patternsJson = await patternsRes.json();
        setPatternsData(patternsJson);

        // Fetch Python Lessons
        const pythonRes = await fetch('/api/python');
        if (!pythonRes.ok) throw new Error('Failed to fetch Python lessons from MongoDB Atlas');
        const pythonJson = await pythonRes.json();
        setPythonData(pythonJson);

        setLoading(false);
      } catch (err) {
        console.error('MERN DB load error:', err);
        setError(err.message || 'Unable to connect to database. Please make sure MongoDB is running.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  // Rendering States: Loading & Errors
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-glow-circle"></div>
        <div className="loader-text">Loading Curriculum...</div>
        <div className="loader-sub">Connecting to MongoDB Atlas</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-container" style={{ gap: '1rem', padding: '2rem', textAlign: 'center' }}>
        <div className="loader-glow-circle" style={{ borderLeftColor: 'var(--red)', borderRightColor: 'var(--orange)' }}></div>
        <div className="loader-text" style={{ background: 'linear-gradient(135deg, var(--red), var(--orange))', webkitTextFillColor: 'transparent', webkitBackgroundClip: 'text' }}>
          Database Error
        </div>
        <div className="loader-sub" style={{ maxWidth: '400px', color: 'var(--text-secondary)' }}>
          {error}
        </div>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1.5rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

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




