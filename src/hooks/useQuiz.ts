'use client'

import { useState, useEffect } from 'react';
import { 
  Question, 
  QuizHistory, 
  QuizResult, 
  ShuffledQuestion, 
  CategoryScores 
} from '@/types/quiz';
import { questions as originalQuestions } from '@/data/questions';

export const useQuiz = () => {
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<ShuffledQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizHistory, setQuizHistory] = useState<QuizHistory>({
    results: [],
    averageScore: 0
  });

  // Carrega o histórico do localStorage quando o componente monta
  useEffect(() => {
    const savedHistory = localStorage.getItem('awsQuizHistory');
    if (savedHistory) {
      try {
        setQuizHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Erro ao carregar histórico:', error);
        localStorage.removeItem('awsQuizHistory');
      }
    }
  }, []);

  // Função para embaralhar as opções de uma questão
  const shuffleOptions = (question: Question): ShuffledQuestion => {
    // Garante que correct seja sempre um array
    const correctArray = Array.isArray(question.correct) 
      ? question.correct 
      : [question.correct as number];

    // Cria um array de opções com seus índices originais
    const optionsWithIndex = question.options.map((opt, idx) => ({
      text: opt,
      originalIndex: idx
    }));

    // Embaralha as opções
    const shuffledOpts = [...optionsWithIndex].sort(() => Math.random() - 0.5);
    
    // Encontra os novos índices das respostas corretas após embaralhamento
    const newCorrectIndices = correctArray.map(correctIndex => 
      shuffledOpts.findIndex(opt => opt.originalIndex === correctIndex)
    );

    // Retorna a questão com as opções embaralhadas
    return {
      ...question,
      options: shuffledOpts.map(opt => opt.text),
      correct: newCorrectIndices,
      originalIndices: correctArray,
      selectCount: question.selectCount || correctArray.length
    };
  };

  // Calcula a média das pontuações
  const calculateAverageScore = (results: QuizResult[]) => {
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, result) => 
      acc + (result.score / result.totalQuestions) * 100, 0
    );
    return sum / results.length;
  };

  // Inicia um novo quiz
  const startQuiz = () => {
    if (!userName.trim()) {
      alert('Por favor, insira seu nome antes de começar!');
      return;
    }
    
    // Embaralha as questões, seleciona 20 e embaralha as opções
    const shuffledQuestions = originalQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 20)
      .map(shuffleOptions);
    
    setQuizQuestions(shuffledQuestions);
    setHasStarted(true);
    setScore(0);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSelectedOptions([]);
    setShowResults(false);
  };

  // Manipula a seleção de opções
  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return;

    const currentQuestion = quizQuestions[currentIndex];
    
    setSelectedOptions(prev => {
      // Remove a opção se já estiver selecionada
      if (prev.includes(optionIndex)) {
        return prev.filter(idx => idx !== optionIndex);
      }
      // Remove a primeira seleção se exceder o limite
      if (prev.length >= currentQuestion.selectCount) {
        return [...prev.slice(1), optionIndex];
      }
      // Adiciona nova seleção
      return [...prev, optionIndex].sort();
    });
  };

  // Verifica a resposta selecionada
  const checkAnswer = () => {
    const currentQuestion = quizQuestions[currentIndex];
    if (selectedOptions.length < currentQuestion.selectCount) {
      alert(`Selecione ${currentQuestion.selectCount} opção(ões)`);
      return;
    }

    setShowAnswer(true);
    
    // Verifica se todas as opções selecionadas estão corretas
    const allCorrect = 
      selectedOptions.length === currentQuestion.correct.length &&
      selectedOptions.every(selected => currentQuestion.correct.includes(selected)) &&
      currentQuestion.correct.every(correct => selectedOptions.includes(correct));

    if (allCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  // Salva o resultado do quiz
  const saveQuizResult = () => {
    const categoryScores: CategoryScores = {};
    
    // Inicializa os contadores por categoria
    quizQuestions.forEach((question) => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = {
          correct: 0,
          total: 0,
          percentage: 0
        };
      }
      categoryScores[question.category].total += 1;
    });

    // Conta as respostas corretas por categoria
    quizQuestions.forEach((question, index) => {
      const questionAnswers = selectedOptions;
      const isCorrect = 
        questionAnswers.length === question.correct.length &&
        questionAnswers.every(selected => question.correct.includes(selected)) &&
        question.correct.every(correct => questionAnswers.includes(correct));

      if (isCorrect) {
        categoryScores[question.category].correct += 1;
      }
    });

    // Calcula as porcentagens
    Object.keys(categoryScores).forEach(category => {
      const { correct, total } = categoryScores[category];
      categoryScores[category].percentage = (correct / total) * 100;
    });

    // Cria o novo resultado
    const newResult: QuizResult = {
      date: new Date().toISOString(),
      score,
      totalQuestions: quizQuestions.length,
      categoryScores
    };

    // Atualiza o histórico
    const updatedHistory = {
      results: [...quizHistory.results, newResult],
      averageScore: calculateAverageScore([...quizHistory.results, newResult])
    };

    setQuizHistory(updatedHistory);
    localStorage.setItem('awsQuizHistory', JSON.stringify(updatedHistory));
  };

  // Avança para a próxima questão
  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setSelectedOptions([]);
    } else if (!showResults) {
      saveQuizResult();
      setShowResults(true);
    }
  };

  // Volta para a questão anterior
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      setSelectedOptions([]);
    }
  };

  // Reinicia o quiz
  const restartQuiz = () => {
    setHasStarted(false);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSelectedOptions([]);
    setQuizQuestions([]);
    setScore(0);
    setShowResults(false);
  };

  return {
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
  };
};

export default useQuiz;