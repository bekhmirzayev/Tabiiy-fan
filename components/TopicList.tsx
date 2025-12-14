import React from 'react';
import { Topic } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface TopicListProps {
  topics: Topic[];
  onSelectTopic: (topicId: string) => void;
}

export const TopicList: React.FC<TopicListProps> = ({ topics, onSelectTopic }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 mb-4 shadow-sm border border-blue-200 dark:border-blue-800/50">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-4">
            Tabiiy Fanlar: 6-sinf
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Qiziqarli mavzularni tanlang va o'rganishni boshlang!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg dark:shadow-slate-900/50 hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 dark:border-slate-700 hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${topic.themeColor}-100 dark:bg-${topic.themeColor}-900/30 text-${topic.themeColor}-600 dark:text-${topic.themeColor}-400 ring-1 ring-${topic.themeColor}-200 dark:ring-${topic.themeColor}-800`}>
                {topic.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {topic.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-3">
                {topic.description}
              </p>

              <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-2 transition-transform">
                Boshlash <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};