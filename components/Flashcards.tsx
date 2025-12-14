import React, { useState } from 'react';
import { FlashcardItem } from '../types';
import { Lightbulb, RotateCw } from 'lucide-react';

interface FlashcardsProps {
  items: FlashcardItem[];
}

export const Flashcards: React.FC<FlashcardsProps> = ({ items }) => {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setFlippedIds(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400 mb-4">
            <Lightbulb size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Bilimingizni charxlang!</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Kartochkalar ustiga bosib, ilmiy atamalarni o'rganing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card) => {
            const isFlipped = flippedIds.includes(card.id);
            return (
              <div 
                key={card.id} 
                className="group h-64 w-full cursor-pointer perspective-1000"
                onClick={() => toggleCard(card.id)}
              >
                <div className={`relative h-full w-full duration-500 transform-style-3d shadow-xl rounded-2xl ${isFlipped ? 'rotate-y-180' : ''}`}>
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 h-full w-full bg-white dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden border-b-4 border-slate-200 dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {typeof card.icon === 'string' ? <span className="text-4xl">{card.icon}</span> : card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{card.term}</h3>
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <RotateCw size={12} /> Aylantirish
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
                    <h4 className="font-bold text-blue-100 mb-2 text-lg">{card.term}</h4>
                    <p className="text-center text-sm font-medium leading-relaxed">
                      {card.definition}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};