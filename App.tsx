import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { LearningModule } from './components/LearningModule';
import { Flashcards } from './components/Flashcards';
import { Quiz } from './components/Quiz';
import { Resources } from './components/Resources';
import { TopicList } from './components/TopicList';
import { Header } from './components/Header';
import { TeacherDashboard } from './components/TeacherDashboard';
import { topics } from './data/topics';
import { GraduationCap } from 'lucide-react';

type ViewState = 'home' | 'topic' | 'dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [currentTopicId, setCurrentTopicId] = useState<string | null>(null);

  // Scroll to top when view/topic changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, currentTopicId]);

  const currentTopic = topics.find(t => t.id === currentTopicId);

  const handleTopicSelect = (topicId: string) => {
    setCurrentTopicId(topicId);
    setCurrentView('topic');
  };

  const handleBackToHome = () => {
    setCurrentTopicId(null);
    setCurrentView('home');
  };

  // --- TEACHER DASHBOARD VIEW ---
  if (currentView === 'dashboard') {
    return <TeacherDashboard onBack={handleBackToHome} />;
  }

  // Common wrapper class for consistent full-height background
  const pageWrapperClasses = "min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col";

  // --- TOPIC (LESSON) VIEW ---
  if (currentView === 'topic' && currentTopic) {
    return (
      <div className={pageWrapperClasses}>
        <Header 
          title={currentTopic.title}
          showBack={true}
          onBack={handleBackToHome}
        />

        <Hero 
          title={currentTopic.hero.title}
          subtitle={currentTopic.hero.subtitle}
          imageUrl={currentTopic.hero.imageUrl}
          badge={currentTopic.hero.badge}
        />
        
        <main className="space-y-0">
          <LearningModule 
            easy={currentTopic.learningContent.easy}
            medium={currentTopic.learningContent.medium}
            hard={currentTopic.learningContent.hard}
          />
          <Flashcards items={currentTopic.flashcards} />
          <Quiz questions={currentTopic.quiz} topicTitle={currentTopic.title} />
          <Resources items={currentTopic.resources} />
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="mb-2 font-medium text-slate-300">Tabiiy Fanlar Darsligi: 6-sinf</p>
            <p className="text-sm opacity-60">Created for Educational Purposes &copy; {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    );
  }

  // --- HOME VIEW (TOPIC LIST) ---
  return (
    <div className={pageWrapperClasses}>
      <Header />
      
      <div className="flex-grow">
        <TopicList topics={topics} onSelectTopic={handleTopicSelect} />
      </div>

      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4 font-medium text-slate-300">Tabiiy Fanlar Darsligi: 6-sinf</p>
          
          {/* Teacher Login Link */}
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="inline-flex items-center text-xs text-slate-500 hover:text-blue-400 transition-colors opacity-70 hover:opacity-100"
          >
            <GraduationCap size={14} className="mr-1" />
            O'qituvchilar uchun kirish
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;