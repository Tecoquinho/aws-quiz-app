export interface Question {
    id: number;
    category: string;
    question: string;
    options: string[];
    correct: number[]; // Agora é um array de índices corretos
    explanation: string;
    selectCount?: number; // Número de opções que devem ser selecionadas
  }
  
  export interface QuizResult {
    date: string;
    score: number;
    totalQuestions: number;
    categoryScores: {
      [key: string]: {
        correct: number;
        total: number;
        percentage: number;
      }
    };
  }
  
  export interface QuizHistory {
    results: QuizResult[];
    averageScore: number;
  }