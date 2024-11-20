export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number | number[];
  explanation: string;
  selectCount?: number;
}

export interface ShuffledQuestion extends Question {
  originalIndices: number[];
  correct: number[]; // Sempre será um array após o shuffle
  selectCount: number; // Garantido após o shuffle
}

export interface CategoryScore {
  correct: number;
  total: number;
  percentage: number;
}

export interface CategoryScores {
  [category: string]: CategoryScore;
}

export interface QuizResult {
  date: string;
  score: number;
  totalQuestions: number;
  categoryScores: CategoryScores;
}

export interface QuizHistory {
  results: QuizResult[];
  averageScore: number;
}