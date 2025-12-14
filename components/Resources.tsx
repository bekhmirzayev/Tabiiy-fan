import React from 'react';
import { ExternalLink, Youtube, FileText } from 'lucide-react';
import { ResourceItem } from '../types';

interface ResourcesProps {
  items: ResourceItem[];
}

export const Resources: React.FC<ResourcesProps> = ({ items }) => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Foydali Manbalar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {items.filter(i => i.type === 'video').map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700 group cursor-pointer">
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
                  <img src={item.thumbnailUrl || "https://picsum.photos/600/400"} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                      <Youtube className="text-white fill-current ml-1" size={32} />
                  </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-800 dark:text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {items.some(i => i.type === 'article') && (
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Qo'shimcha o'qish uchun:</h3>
              <div className="space-y-3">
                  {items.filter(i => i.type === 'article').map((item) => (
                    <a key={item.id} href={item.url || "#"} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-colors">
                        <ExternalLink size={16} className="mr-2" />
                        <span><strong>{item.title}</strong> - {item.description}</span>
                    </a>
                  ))}
              </div>
          </div>
        )}
      </div>
    </section>
  );
};