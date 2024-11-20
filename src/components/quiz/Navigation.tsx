import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
  showAnswer: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentIndex,
  totalQuestions,
  score,
  showAnswer,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex justify-between">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Anterior
      </Button>
      <span className="py-2 px-4 bg-blue-100 text-blue-800 rounded-md">
        Pontuação: {score}/{totalQuestions}
      </span>
      <Button
        variant="outline"
        onClick={onNext}
        disabled={!showAnswer}
        className="flex items-center gap-2"
      >
        {currentIndex === totalQuestions - 1 ? 'Ver Resultado' : 'Próxima'}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};