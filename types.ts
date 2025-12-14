import React from 'react';

export interface FlashcardItem {
  id: number;
  term: string;
  definition: string;
  icon?: React.ReactNode; // Optional, can be text emoji
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface LevelContent {
  title: string; // e.g., "Yangi o'rganuvchi"
  content: React.ReactNode; // HTML/Text content
}

export interface ResourceItem {
  id: number;
  type: 'video' | 'article';
  title: string;
  url?: string;
  thumbnailUrl?: string; // For video placeholders
  description?: string;
}

// Master Interface for a Topic
export interface Topic {
  id: string;
  title: string;
  description: string;
  themeColor: string; // e.g., "blue", "orange"
  icon: React.ReactNode;
  
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
    badge: string;
  };

  learningContent: {
    easy: LevelContent;
    medium: LevelContent;
    hard: LevelContent;
  };

  flashcards: FlashcardItem[];
  quiz: QuizQuestion[];
  resources: ResourceItem[];
}
