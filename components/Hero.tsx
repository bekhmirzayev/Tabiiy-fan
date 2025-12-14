import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  badge: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, badge }) => {
  const scrollToContent = () => {
    const element = document.getElementById('learning-module');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-slate-900 dark:to-slate-800 py-16 sm:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-1.5 text-sm font-bold text-orange-600 dark:text-orange-400 mb-6 shadow-sm border border-orange-200 dark:border-orange-800/50">
              <Zap className="mr-2 h-4 w-4" />
              {badge}
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300 lg:mx-0">
              {subtitle}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={scrollToContent}
                className="inline-flex items-center rounded-2xl bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
              >
                O'rganishni boshlash
                <ChevronDown className="ml-3 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:h-full lg:min-h-[400px]">
               <img
                src={imageUrl}
                alt="Topic Hero"
                className="absolute inset-0 h-full w-full rounded-3xl object-cover shadow-2xl ring-8 ring-white/50 dark:ring-slate-700/50"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-bounce duration-1000 border border-slate-100 dark:border-slate-700">
                <span className="text-4xl">✨</span>
              </div>
              <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl animate-bounce delay-700 border border-slate-100 dark:border-slate-700">
                <span className="text-4xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};