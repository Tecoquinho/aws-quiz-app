'use client'

import React from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import { WelcomeScreen } from './quiz/WelcomeScreen';
import { QuestionCard } from './quiz/QuestionCard';
import { ResultsScreen } from './quiz/ResultsScreen';
import { Navigation } from './quiz/Navigation';

const AwsQuizApp: React.FC = () => {
  const {
    userName,
    setUserName,
    hasStarted,
    currentIndex,
    showAnswer,
    selectedOptions,
    quizQuestions,
    score,
    showResults,
    quizHistory,
    startQuiz,
    handleOptionSelect,
    checkAnswer,
    handleNext,
    handlePrevious,
    restartQuiz
  } = useQuiz();

  if (!hasStarted) {
    return (
      <WelcomeScreen
        userName={userName}
        setUserName={setUserName}
        onStart={startQuiz}
      />
    );
  }

  if (showResults) {
    return (
      <ResultsScreen
        userName={userName}
        score={score}
        totalQuestions={quizQuestions.length}
        quizHistory={quizHistory}
        onRestart={restartQuiz}
      />
    );
  }

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-xl font-bold">Olá, {userName}!</h2>
        <span className="text-sm text-gray-500">
          Questão {currentIndex + 1} de {quizQuestions.length}
        </span>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedOptions={selectedOptions}
        showAnswer={showAnswer}
        onOptionSelect={handleOptionSelect}
        onCheck={checkAnswer}
      />

      <Navigation
        currentIndex={currentIndex}
        totalQuestions={quizQuestions.length}
        score={score}
        showAnswer={showAnswer}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default AwsQuizApp;