import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { QuizHistory } from '@/types/quiz';

interface ResultsScreenProps {
  userName: string;
  score: number;
  totalQuestions: number;
  quizHistory: QuizHistory;
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  userName,
  score,
  totalQuestions,
  quizHistory,
  onRestart
}) => {
  const percentage = (score / totalQuestions) * 100;
  const lastResult = quizHistory.results[quizHistory.results.length - 1];
  const categories = Object.keys(lastResult.categoryScores);

  return (
    <div className="max-w-2xl mx-auto mt-20 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Resultado do Simulado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
              <h2 className="text-xl font-bold mt-4">{userName}</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">{percentage.toFixed(1)}%</p>
              <p>Você acertou {score} de {totalQuestions} questões</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Desempenho por Categoria</h3>
              {categories.map(category => {
                const categoryScore = lastResult.categoryScores[category];
                return (
                  <div key={category} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{category}</span>
                      <span>
                        {categoryScore.correct} de {categoryScore.total} ({categoryScore.percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          categoryScore.percentage >= 70 ? 'bg-green-600' : 
                          categoryScore.percentage >= 50 ? 'bg-yellow-600' : 
                          'bg-red-600'
                        }`}
                        style={{ width: `${categoryScore.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Seu Progresso</h3>
              <div className="space-y-2">
                <p>Média geral: {quizHistory.averageScore.toFixed(1)}%</p>
                <p>Total de simulados: {quizHistory.results.length}</p>
              </div>
            </div>

            <Button
              onClick={onRestart}
              className="w-full mt-6"
            >
              Fazer Novo Simulado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};