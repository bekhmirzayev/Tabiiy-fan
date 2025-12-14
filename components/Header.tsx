import React from 'react';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack, onBack }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center overflow-hidden">
          {showBack && onBack ? (
            <button 
              onClick={onBack}
              className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium mr-4 shrink-0"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              <span className="hidden sm:inline">Mavzular</span>
            </button>
          ) : (
             <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight mr-4 shrink-0">
               Tabiiy<span className="text-blue-600 dark:text-blue-400">Fanlar</span>
             </span>
          )}
          
          {title && (
            <span className="pl-4 border-l border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold truncate">
              {title}
            </span>
          )}
        </div>

        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};