import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShuffledQuestion } from '@/types/quiz';

interface QuestionCardProps {
  question: ShuffledQuestion;
  selectedOptions: number[];
  showAnswer: boolean;
  onOptionSelect: (index: number) => void;
  onCheck: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptions,
  showAnswer,
  onOptionSelect,
  onCheck
}) => {
  const isCorrectAnswer = showAnswer && 
    selectedOptions.length === question.correct.length &&
    selectedOptions.every(selected => question.correct.includes(selected)) &&
    question.correct.every(correct => selectedOptions.includes(correct));

  const getOptionClassName = (index: number) => {
    const baseClasses = "w-full justify-start text-left p-4 relative ";
    
    if (!showAnswer) {
      return baseClasses + (selectedOptions.includes(index) ? "bg-blue-100" : "");
    }

    if (question.correct.includes(index)) {
      return baseClasses + "bg-green-50 border-green-200";
    }

    if (selectedOptions.includes(index)) {
      return baseClasses + "bg-red-50 border-red-200";
    }

    return baseClasses;
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="mb-2 flex justify-between items-center">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {question.category}
          </span>
          <span className="text-sm text-gray-500">
            Selecione {question.selectCount} opção(ões)
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={getOptionClassName(index)}
              onClick={() => onOptionSelect(index)}
              disabled={showAnswer}
            >
              <div className="flex items-center gap-3">
                <div className={`
                  w-6 h-6 border-2 rounded 
                  flex items-center justify-center
                  ${selectedOptions.includes(index) ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300'}
                `}>
                  {selectedOptions.includes(index) && '✓'}
                </div>
                <span>{option}</span>
              </div>
            </Button>
          ))}
        </div>
        
        {!showAnswer && (
          <Button
            onClick={onCheck}
            className="w-full mt-4"
            disabled={selectedOptions.length !== question.selectCount}
          >
            Verificar Resposta
          </Button>
        )}
        
        {showAnswer && (
          <div className={`mt-4 p-4 rounded-lg ${
            isCorrectAnswer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            <p className="font-medium">Explicação:</p>
            <p className="mt-2">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;