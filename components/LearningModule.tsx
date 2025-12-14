import React, { useState } from 'react';
import { Bike, Brain, Trophy } from 'lucide-react';
import { DifficultyLevel, LevelContent } from '../types';

interface LearningModuleProps {
  easy: LevelContent;
  medium: LevelContent;
  hard: LevelContent;
}

export const LearningModule: React.FC<LearningModuleProps> = ({ easy, medium, hard }) => {
  const [activeLevel, setActiveLevel] = useState<DifficultyLevel>('easy');

  // Helper to render content safely
  const renderContent = (content: React.ReactNode) => {
    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return content;
  };

  return (
    <section id="learning-module" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">O'rganish Darajasini Tanlang</h2>
        <p className="text-slate-500 dark:text-slate-400">O'zingizga mos bo'limni tanlang va o'rganishni boshlang!</p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
        <button
          onClick={() => setActiveLevel('easy')}
          className={`relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-b-4 ${activeLevel === 'easy' ? 'bg-level-easy text-white border-green-700 translate-y-1' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'}`}
        >
          <Bike className={`w-8 h-8 mb-2 ${activeLevel === 'easy' ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
          <span className="font-bold text-sm sm:text-base">1-Qadam (Sodda)</span>
        </button>

        <button
          onClick={() => setActiveLevel('medium')}
          className={`relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-b-4 ${activeLevel === 'medium' ? 'bg-level-medium text-white border-sky-700 translate-y-1' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'}`}
        >
          <Brain className={`w-8 h-8 mb-2 ${activeLevel === 'medium' ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
          <span className="font-bold text-sm sm:text-base">2-Qadam (O'rta)</span>
        </button>

        <button
          onClick={() => setActiveLevel('hard')}
          className={`relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-b-4 ${activeLevel === 'hard' ? 'bg-level-hard text-white border-violet-700 translate-y-1' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'}`}
        >
          <Trophy className={`w-8 h-8 mb-2 ${activeLevel === 'hard' ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
          <span className="font-bold text-sm sm:text-base">3-Qadam (Qiyin)</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 min-h-[400px] transition-all">
        <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className={`p-2 rounded-lg ${
              activeLevel === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
              activeLevel === 'medium' ? 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400' :
              'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
            }`}>
              {activeLevel === 'easy' && <Bike size={24} />}
              {activeLevel === 'medium' && <Brain size={24} />}
              {activeLevel === 'hard' && <Trophy size={24} />}
            </span>
            <h3 className={`text-2xl font-bold ${
              activeLevel === 'easy' ? 'text-green-700 dark:text-green-400' :
              activeLevel === 'medium' ? 'text-sky-700 dark:text-sky-400' :
              'text-purple-700 dark:text-purple-400'
            }`}>
              {activeLevel === 'easy' ? easy.title : activeLevel === 'medium' ? medium.title : hard.title}
            </h3>
          </div>
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
            {renderContent(
              activeLevel === 'easy' ? easy.content :
              activeLevel === 'medium' ? medium.content :
              hard.content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};