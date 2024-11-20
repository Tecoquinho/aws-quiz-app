'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shuffle, ChevronLeft, ChevronRight, Filter, Trophy } from 'lucide-react';

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizResult {
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

interface QuizHistory {
  results: QuizResult[];
  averageScore: number;
}

const AwsQuizApp: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizHistory, setQuizHistory] = useState<QuizHistory>({
    results: [],
    averageScore: 0
  });

  const questions: Question[] = [
    // Conceitos de Nuvem
    {
        id: 1,
        category: "Conceitos de Nuvem",
        question: "Qual é o principal benefício financeiro do modelo de computação em nuvem?",
        options: [
          "Maior custo inicial",
          "Transformação de despesas de capital em despesas operacionais",
          "Menor flexibilidade de recursos",
          "Necessidade de compromisso de longo prazo"
        ],
        correct: 1,
        explanation: "Um dos principais benefícios financeiros da computação em nuvem é a capacidade de transformar despesas de capital (CapEx) em despesas operacionais (OpEx), eliminando a necessidade de grandes investimentos iniciais em infraestrutura."
      },
      {
        id: 2,
        category: "Conceitos de Nuvem",
        question: "O que caracteriza o modelo de precificação pay-as-you-go da AWS?",
        options: [
          "Pagamento antecipado por recursos",
          "Pagamento mensal fixo",
          "Pagamento apenas pelos recursos utilizados",
          "Pagamento anual por recursos reservados"
        ],
        correct: 2,
        explanation: "O modelo pay-as-you-go permite que os clientes paguem apenas pelos recursos que realmente utilizam, sem necessidade de compromissos antecipados ou pagamentos por recursos não utilizados."
      },
      {
        id: 3,
        category: "Conceitos de Nuvem",
        question: "Qual é uma característica da elasticidade na nuvem?",
        options: [
          "Capacidade fixa de recursos",
          "Escalabilidade manual apenas",
          "Adaptação automática aos picos de demanda",
          "Recursos sempre em máxima capacidade"
        ],
        correct: 2,
        explanation: "Elasticidade refere-se à capacidade de aumentar ou diminuir recursos automaticamente com base na demanda, otimizando custos e performance."
      },
      {
        id: 4,
        category: "Conceitos de Nuvem",
        question: "Qual benefício melhor descreve a agilidade proporcionada pela computação em nuvem?",
        options: [
          "Menor custo de energia",
          "Acesso rápido a recursos tecnológicos",
          "Maior segurança física",
          "Backup automático de dados"
        ],
        correct: 1,
        explanation: "A agilidade na nuvem refere-se à capacidade de acessar e implementar recursos tecnológicos rapidamente, permitindo que as empresas experimentem e inovem com menor risco e custo."
      },
      {
        id: 5,
        category: "Conceitos de Nuvem",
        question: "O que é economia de escala na AWS?",
        options: [
          "Comprar reservas de instâncias antecipadamente",
          "Benefício de custos mais baixos devido ao maior volume de operação da AWS",
          "Usar menos recursos em horários de pico",
          "Pagar apenas pelo que usar"
        ],
        correct: 1,
        explanation: "Economia de escala refere-se aos benefícios de custo que a AWS obtém operando em grande escala e repassa esses benefícios aos clientes através de preços mais baixos."
      },
      {
        id: 6,
        category: "Conceitos de Nuvem",
        question: "Qual é uma vantagem da computação em nuvem em relação a data centers tradicionais?",
        options: [
          "Maior controle sobre hardware",
          "Necessidade de planejamento de capacidade",
          "Eliminação de trabalho pesado não diferenciado",
          "Maior necessidade de pessoal de TI"
        ],
        correct: 2,
        explanation: "A nuvem elimina o trabalho pesado não diferenciado (como manutenção de hardware e infraestrutura básica), permitindo que as equipes foquem em atividades que agregam valor ao negócio."
      },
      {
        id: 7,
        category: "Conceitos de Nuvem",
        question: "O que significa o conceito de 'agilidade' na AWS?",
        options: [
          "Velocidade da rede",
          "Rapidez no acesso a recursos de TI",
          "Velocidade do hardware",
          "Tempo de resposta do suporte"
        ],
        correct: 1,
        explanation: "Agilidade na AWS refere-se à capacidade de rapidamente provisionar recursos de TI quando necessário, permitindo que as organizações experimentem e inovem mais rapidamente."
      },
      {
        id: 8,
        category: "Conceitos de Nuvem",
        question: "Qual é o benefício da AWS ter uma presença global?",
        options: [
          "Maior custo de operação",
          "Menor latência para usuários globais",
          "Complexidade reduzida",
          "Menor necessidade de backup"
        ],
        correct: 1,
        explanation: "A presença global da AWS permite que as aplicações sejam implementadas em múltiplas regiões, reduzindo a latência para usuários finais e melhorando a experiência global."
      },
      {
        id: 9,
        category: "Conceitos de Nuvem",
        question: "O que é o conceito de 'alta disponibilidade' na AWS?",
        options: [
          "Acesso rápido ao suporte AWS",
          "Sistema sempre funcional e acessível",
          "Baixo custo de operação",
          "Alta velocidade de rede"
        ],
        correct: 1,
        explanation: "Alta disponibilidade refere-se à capacidade de um sistema permanecer operacional e acessível, mesmo em caso de falhas de componentes, através de redundância e design resiliente."
      },
      {
        id: 10,
        category: "Conceitos de Nuvem",
        question: "Qual é o principal benefício da escalabilidade automática na AWS?",
        options: [
          "Menor segurança",
          "Custos fixos mensais",
          "Ajuste automático de recursos conforme demanda",
          "Maior controle manual"
        ],
        correct: 2,
        explanation: "A escalabilidade automática permite que os recursos se ajustem automaticamente à demanda, otimizando custos e mantendo a performance sem intervenção manual."
      },
      {
        id: 11,
        category: "Conceitos de Nuvem",
        question: "O que é o modelo de responsabilidade compartilhada da AWS?",
        options: [
          "AWS é responsável por tudo",
          "Cliente é responsável por tudo",
          "AWS e cliente compartilham responsabilidades de segurança",
          "Terceiros são responsáveis pela segurança"
        ],
        correct: 2,
        explanation: "No modelo de responsabilidade compartilhada, a AWS é responsável pela segurança DA nuvem, enquanto o cliente é responsável pela segurança NA nuvem."
      },
      {
        id: 12,
        category: "Conceitos de Nuvem",
        question: "Qual é o benefício da AWS oferecer APIs programáveis?",
        options: [
          "Menor segurança",
          "Automação e gerenciamento programático de recursos",
          "Maior custo",
          "Menor flexibilidade"
        ],
        correct: 1,
        explanation: "APIs programáveis permitem automatizar o gerenciamento de recursos, criar e gerenciar infraestrutura como código, e integrar serviços AWS com aplicações."
      },
    
      // SEGURANÇA E COMPLIANCE (12 questões)
      {
        id: 13,
        category: "Segurança",
        question: "Qual serviço AWS é usado para gerenciar identidades e acessos?",
        options: [
          "Amazon S3",
          "AWS IAM",
          "Amazon EC2",
          "AWS Lambda"
        ],
        correct: 1,
        explanation: "AWS IAM (Identity and Access Management) é o serviço que permite gerenciar usuários, grupos, roles e suas permissões de acesso aos recursos AWS."
      },
      {
        id: 14,
        category: "Segurança",
        question: "O que é o AWS Shield?",
        options: [
          "Firewall de aplicações web",
          "Serviço de proteção contra DDoS",
          "Serviço de backup",
          "Serviço de monitoramento"
        ],
        correct: 1,
        explanation: "AWS Shield é um serviço gerenciado de proteção contra ataques DDoS (Distributed Denial of Service) que protege aplicações executadas na AWS."
      },
      {
        id: 15,
        category: "Segurança",
        question: "Qual é a melhor prática de segurança para contas root da AWS?",
        options: [
          "Compartilhar com toda equipe",
          "Usar diariamente",
          "Remover todas as permissões",
          "Ativar MFA e usar minimamente"
        ],
        correct: 3,
        explanation: "A melhor prática para a conta root é ativar autenticação multifator (MFA) e usar apenas para tarefas que especificamente requerem acesso root."
      },
      {
        id: 16,
        category: "Segurança",
        question: "Qual serviço fornece firewall para aplicações web?",
        options: [
          "AWS Shield",
          "AWS WAF",
          "AWS IAM",
          "Amazon Inspector"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) ajuda a proteger aplicações web contra exploits comuns que podem afetar a disponibilidade, comprometer a segurança ou consumir recursos excessivos."
      },
      {
        id: 17,
        category: "Segurança",
        question: "O que é Amazon GuardDuty?",
        options: [
          "Serviço de backup",
          "Serviço de detecção de ameaças",
          "Serviço de análise de logs",
          "Serviço de criptografia"
        ],
        correct: 1,
        explanation: "Amazon GuardDuty é um serviço de detecção de ameaças que monitora continuamente atividades maliciosas e comportamentos não autorizados para proteger suas contas e cargas de trabalho AWS."
      },
      {
        id: 18,
        category: "Segurança",
        question: "Qual serviço AWS ajuda a manter a conformidade com padrões de segurança?",
        options: [
          "AWS Config",
          "Amazon S3",
          "AWS Lambda",
          "Amazon RDS"
        ],
        correct: 0,
        explanation: "AWS Config permite avaliar, auditar e monitorar as configurações dos recursos AWS para garantir conformidade com padrões de segurança e regulamentações."
      },
      {
        id: 19,
        category: "Segurança",
        question: "O que é o AWS Artifact?",
        options: [
          "Serviço de armazenamento",
          "Portal de conformidade e acordos",
          "Serviço de banco de dados",
          "Serviço de computação"
        ],
        correct: 1,
        explanation: "AWS Artifact é um portal self-service para acesso sob demanda aos relatórios de conformidade da AWS e acordos específicos."
      },
      {
        id: 20,
        category: "Segurança",
        question: "Qual é uma responsabilidade do cliente no modelo de responsabilidade compartilhada?",
        options: [
          "Manutenção física dos servidores",
          "Segurança da rede global",
          "Criptografia de dados em repouso",
          "Patches do hypervisor"
        ],
        correct: 2,
        explanation: "A criptografia de dados em repouso é uma responsabilidade do cliente no modelo de responsabilidade compartilhada da AWS."
      },
      {
        id: 21,
        category: "Segurança",
        question: "O que é o AWS KMS?",
        options: [
          "Serviço de monitoramento",
          "Serviço de gerenciamento de chaves",
          "Serviço de backup",
          "Serviço de rede"
        ],
        correct: 1,
        explanation: "AWS Key Management Service (KMS) é um serviço gerenciado que facilita a criação e o controle das chaves de criptografia usadas para proteger seus dados."
      },
      {
        id: 22,
        category: "Segurança",
        question: "Qual serviço AWS ajuda a monitorar atividades de API?",
        options: [
          "Amazon CloudWatch",
          "AWS CloudTrail",
          "AWS Config",
          "Amazon Inspector"
        ],
        correct: 1,
        explanation: "AWS CloudTrail registra as chamadas de API da AWS para sua conta, permitindo monitoramento, auditoria e alertas de atividades."
      },
      {
        id: 23,
        category: "Segurança",
        question: "O que é o Amazon Inspector?",
        options: [
          "Serviço de backup",
          "Serviço de avaliação de segurança",
          "Serviço de rede",
          "Serviço de banco de dados"
        ],
        correct: 1,
        explanation: "Amazon Inspector é um serviço de avaliação de segurança automatizado que ajuda a melhorar a segurança e a conformidade das aplicações implantadas na AWS."
      },
      {
        id: 24,
        category: "Segurança",
        question: "Qual é o benefício do AWS Organizations para segurança?",
        options: [
          "Maior velocidade de rede",
          "Gerenciamento centralizado de múltiplas contas",
          "Menor custo de armazenamento",
          "Melhor performance"
        ],
        correct: 1,
        explanation: "AWS Organizations permite gerenciar centralmente políticas de segurança, conformidade e acesso para múltiplas contas AWS."
      },
    
      // TECNOLOGIA (12 questões)
      {
        id: 25,
        category: "Tecnologia",
        question: "Qual serviço AWS é usado para hospedagem de aplicações web estáticas?",
        options: [
          "Amazon EC2",
          "Amazon S3",
          "Amazon RDS",
          "AWS Lambda"
        ],
        correct: 1,
        explanation: "Amazon S3 pode hospedar sites estáticos de forma econômica e altamente escalável."
      },
      {
        id: 26,
        category: "Tecnologia",
        question: "O que é o Amazon EC2?",
        options: [
          "Serviço de e-mail",
          "Serviço de computação virtual",
          "Serviço de banco de dados",
          "Serviço de armazenamento"
        ],
        correct: 1,
        explanation: "Amazon EC2 (Elastic Compute Cloud) fornece capacidade computacional redimensionável na nuvem na forma de servidores virtuais."
      },
      {
        id: 27,
        category: "Tecnologia",
        question: "Qual é o propósito do Amazon RDS?",
        options: [
          "Computação serverless",
          "Banco de dados relacional gerenciado",
          "Armazenamento de objetos",
          "CDN"
        ],
        correct: 1,
        explanation: "Amazon RDS (Relational Database Service) é um serviço que facilita a configuração, operação e escalabilidade de bancos de dados relacionais na nuvem."
      },
      {
        id: 28,
        category: "Tecnologia",
        question: "O que é o Amazon DynamoDB?",
        options: [
          "Banco de dados SQL",
          "Banco de dados NoSQL",
          "Serviço de cache",
          "Serviço de mensageria"
        ],
        correct: 1,
        explanation: "Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado que fornece performance rápida e previsível com escalabilidade integrada."
      },
      {
        id: 29,
        category: "Tecnologia",
        question: "Qual serviço é usado para distribuir conteúdo globalmente com baixa latência?",
        options: [
          "Amazon EC2",
          "Amazon CloudFront",
          "Amazon S3",
          "Amazon RDS"
        ],
        correct: 1,
        explanation: "Amazon CloudFront é uma rede de entrega de conteúdo (CDN) rápida que distribui dados, vídeos, aplicativos e APIs de forma segura com baixa latência."
      },
      {
        id: 30,
        category: "Tecnologia",
        question: "O que é o AWS Lambda?",
        options: [
          "Serviço de banco de dados",
          "Computação serverless",
          "Serviço de armazenamento",
          "Serviço de rede"
        ],
        correct: 1,
        explanation: "AWS Lambda é um serviço de computação serverless que executa código em resposta a eventos, gerenciando automaticamente os recursos computacionais."
      },
      {
        id: 31,
        category: "Tecnologia",
        question: "Qual é o propósito do Amazon VPC?",
        options: [
          "Armazenamento de arquivos",
          "Rede virtual isolada",
          "Serviço de email",
          "Processamento de dados"
        ],
        correct: 1,
        explanation: "Amazon VPC (Virtual Private Cloud) permite criar uma rede virtual isolada logicamente na nuvem AWS onde você pode executar recursos AWS."
      },
      {
        id: 32,
        category: "Tecnologia",
        question: "O que é o Amazon EBS?",
        options: [
          "Serviço de email",
          "Armazenamento em bloco",
          "Banco de dados NoSQL",
          "Serviço de DNS"
        ],
        correct: 1,
        explanation: "Amazon EBS (Elastic Block Store) fornece volumes de armazenamento em bloco persistentes para uso com instâncias Amazon EC2."
      },
      {
        id: 33,
        category: "Tecnologia",
        question: "Qual serviço AWS é usado para gerenciamento de DNS?",
        options: [
          "Amazon Route 53",
          "Amazon CloudFront",
          "AWS Direct Connect",
          "Amazon VPC"
        ],
        correct: 0,
        explanation: "Amazon Route 53 é um serviço DNS web altamente disponível e escalável."
      },
      {
        id: 34,
        category: "Tecnologia",
        question: "O que é o Amazon SNS?",
        options: [
          "Serviço de banco de dados",
          "Serviço de mensagens e notificações",
          "Serviço de armazenamento",
          "Serviço de computação"
        ],
        correct: 1,
        explanation: "Amazon SNS (Simple Notification Service) é um serviço de mensagens e notificações totalmente gerenciado para comunicação aplicação-a-aplicação e aplicação-a-pessoa."
      },
      {
        id: 35,
        category: "Tecnologia",
        question: "Qual é o propósito do AWS Auto Scaling?",
        options: [
          "Backup automático",
          "Ajuste automático de recursos",
          "Atualização automática",
          "Segurança automática"
        ],
        correct: 1,
        explanation: "AWS Auto Scaling monitora suas aplicações e ajusta automaticamente a capacidade para manter performance estável e previsível pelo menor custo possível."
      },
      {
        id: 36,
        category: "Tecnologia",
        question: "O que é o Amazon ElastiCache?",
        options: [
          "Serviço de backup",
          "Cache em memória gerenciado",
          "Armazenamento de arquivos",
          "Serviço de containers"
        ],
        correct: 1,
        explanation: "Amazon ElastiCache é um serviço de cache em memória totalmente gerenciado que suporta Redis ou Memcached."
      },
  
      // FATURAMENTO E PREÇOS (12 questões)
      {
        id: 37,
        category: "Faturamento e Preços",
        question: "Qual é o benefício das Reserved Instances?",
        options: [
          "Maior flexibilidade",
          "Desconto significativo em troca de compromisso",
          "Melhor performance",
          "Maior disponibilidade"
        ],
        correct: 1,
        explanation: "Reserved Instances oferecem um desconto significativo (até 72%) em comparação com preços On-Demand em troca de um compromisso de uso de 1 ou 3 anos."
      },
      {
        id: 38,
        category: "Faturamento e Preços",
        question: "O que é o AWS Cost Explorer?",
        options: [
          "Serviço de computação",
          "Ferramenta de visualização e análise de custos",
          "Serviço de armazenamento",
          "Serviço de segurança"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer é uma ferramenta que permite visualizar, entender e gerenciar seus custos e uso da AWS ao longo do tempo."
      },
      {
        id: 39,
        category: "Faturamento e Preços",
        question: "Qual é o propósito do AWS Budgets?",
        options: [
          "Monitorar performance",
          "Definir orçamentos e alertas",
          "Gerenciar usuários",
          "Backup de dados"
        ],
        correct: 1,
        explanation: "AWS Budgets permite definir orçamentos personalizados para rastrear custos e uso, e receber alertas quando os limites são excedidos."
      },
      {
        id: 40,
        category: "Faturamento e Preços",
        question: "O que são Savings Plans?",
        options: [
          "Planos de suporte",
          "Modelo flexível de preços com desconto",
          "Planos de backup",
          "Planos de segurança"
        ],
        correct: 1,
        explanation: "Savings Plans é um modelo de preços flexível que oferece preços baixos em troca de compromisso com uma quantidade consistente de uso."
      },
      {
        id: 41,
        category: "Faturamento e Preços",
        question: "Qual é a diferença entre CapEx e OpEx na AWS?",
        options: [
          "Não há diferença",
          "CapEx é gasto de capital, OpEx é gasto operacional",
          "São iguais na nuvem",
          "Depende do serviço"
        ],
        correct: 1,
        explanation: "CapEx refere-se a despesas de capital (investimentos iniciais grandes), enquanto OpEx são despesas operacionais (pagamento pelo uso). A AWS permite converter CapEx em OpEx."
      },
      {
        id: 42,
        category: "Faturamento e Preços",
        question: "O que inclui a camada gratuita da AWS?",
        options: [
          "Todos os serviços gratuitamente",
          "Quantidade limitada de serviços gratuitos por 12 meses",
          "Sem limites de uso",
          "Apenas serviços básicos"
        ],
        correct: 1,
        explanation: "A camada gratuita da AWS inclui quantidades limitadas de serviços gratuitos por 12 meses, além de alguns serviços que são sempre gratuitos."
      },
      {
        id: 43,
        category: "Faturamento e Preços",
        question: "Como funcionam as Spot Instances?",
        options: [
          "Preço fixo",
          "Preço variável baseado em demanda",
          "Gratuitas",
          "Mesmo preço que On-Demand"
        ],
        correct: 1,
        explanation: "Spot Instances permitem usar capacidade computacional extra da AWS por preços com desconto, mas podem ser interrompidas quando a AWS precisa da capacidade de volta."
      },
      {
        id: 44,
        category: "Faturamento e Preços",
        question: "O que é TCO (Total Cost of Ownership)?",
        options: [
          "Taxa de transferência",
          "Custo total de possuir e operar",
          "Tempo de computação",
          "Taxa de conversão"
        ],
        correct: 1,
        explanation: "TCO é o custo total de possuir e operar um recurso ou sistema, incluindo custos diretos e indiretos."
      },
      {
        id: 45,
        category: "Faturamento e Preços",
        question: "Qual ferramenta ajuda a calcular custos antes de usar a AWS?",
        options: [
          "AWS Cost Explorer",
          "AWS Pricing Calculator",
          "AWS Budgets",
          "AWS Bills"
        ],
        correct: 1,
        explanation: "AWS Pricing Calculator permite estimar os custos dos serviços AWS antes de utilizá-los, ajudando no planejamento financeiro."
      },
      {
        id: 46,
        category: "Faturamento e Preços",
        question: "O que é AWS Organizations em relação a faturamento?",
        options: [
          "Serviço de email",
          "Consolidação de faturamento de múltiplas contas",
          "Serviço de backup",
          "Ferramenta de monitoramento"
        ],
        correct: 1,
        explanation: "AWS Organizations permite consolidar o faturamento e pagamento de múltiplas contas AWS, além de compartilhar benefícios de preço em volume."
      },
      {
        id: 47,
        category: "Faturamento e Preços",
        question: "Como funciona a precificação de transferência de dados na AWS?",
        options: [
          "Sempre gratuita",
          "Cobrada por GB transferido, com variações",
          "Preço fixo mensal",
          "Incluída no custo dos serviços"
        ],
        correct: 1,
        explanation: "A transferência de dados é geralmente cobrada por GB, com valores diferentes dependendo da direção (entrada/saída) e região."
      },
      {
        id: 48,
        category: "Faturamento e Preços",
        question: "O que é um Charge Back na AWS?",
        options: [
          "Reembolso",
          "Sistema para alocar custos a unidades de negócio",
          "Taxa extra",
          "Desconto"
        ],
        correct: 1,
        explanation: "Charge Back é um método para alocar custos AWS às unidades de negócio ou departamentos específicos, facilitando o controle de custos."
      },
  
      // ARQUITETURA DE NUVEM (11 questões)
      {
        id: 49,
        category: "Arquitetura de Nuvem",
        question: "O que são os pilares do AWS Well-Architected Framework?",
        options: [
          "Apenas segurança e performance",
          "Excelência operacional, segurança, confiabilidade, eficiência de performance e otimização de custos",
          "Apenas custos e segurança",
          "Backup e recuperação"
        ],
        correct: 1,
        explanation: "O AWS Well-Architected Framework é baseado em cinco pilares que garantem uma arquitetura eficiente e eficaz na nuvem."
      },
      {
        id: 50,
        category: "Arquitetura de Nuvem",
        question: "O que é alta disponibilidade na AWS?",
        options: [
          "Backup diário",
          "Sistema que permanece operacional mesmo com falhas",
          "Internet rápida",
          "Baixo custo"
        ],
        correct: 1,
        explanation: "Alta disponibilidade refere-se à capacidade de um sistema continuar operacional mesmo quando alguns componentes falham, geralmente através de redundância."
      },
      {
        id: 51,
        category: "Arquitetura de Nuvem",
        question: "O que é uma arquitetura serverless?",
        options: [
          "Usar muitos servidores",
          "Não usar computação",
          "Desenvolvimento sem preocupação com infraestrutura",
          "Apenas usar bancos de dados"
        ],
        correct: 2,
        explanation: "Arquitetura serverless permite desenvolver aplicações sem preocupação com gerenciamento de servidores, focando apenas no código."
      },
      {
        id: 52,
        category: "Arquitetura de Nuvem",
        question: "O que é disaster recovery?",
        options: [
          "Backup diário",
          "Processo de recuperação de desastres e continuidade",
          "Deletar dados",
          "Migração de dados"
        ],
        correct: 1,
        explanation: "Disaster recovery é o processo de preparação e recuperação de recursos de TI após um desastre natural ou causado pelo homem."
      },
      {
        id: 53,
        category: "Arquitetura de Nuvem",
        question: "O que é o conceito de 'loose coupling'?",
        options: [
          "Sistemas fortemente conectados",
          "Sistemas independentes com mínima interdependência",
          "Sistemas sem conexão",
          "Conexão de rede"
        ],
        correct: 1,
        explanation: "Loose coupling é um princípio onde sistemas são projetados para ter mínima interdependência, facilitando mudanças e reduzindo impactos de falhas."
      },
      {
        id: 54,
        category: "Arquitetura de Nuvem",
        question: "O que significa escalabilidade vertical?",
        options: [
          "Adicionar mais recursos",
          "Aumentar a capacidade adicionando mais instâncias",
          "Reduzir recursos",
          "Remover instâncias"
        ],
        correct: 0,
        explanation: "Escalabilidade vertical (scaling up) significa aumentar a capacidade de uma instância existente, como adicionar mais CPU ou memória."
      }
  ];

  // Carregar histórico ao iniciar
  useEffect(() => {
    const savedHistory = localStorage.getItem('awsQuizHistory');
    if (savedHistory) {
      setQuizHistory(JSON.parse(savedHistory));
    }
  }, []);

  const startQuiz = () => {
    if (!userName.trim()) {
      alert('Por favor, insira seu nome antes de começar!');
      return;
    }
    
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 20);
    setQuizQuestions(selected);
    setHasStarted(true);
    setScore(0);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSelectedOption(null);
    setShowResults(false);
  };

  const saveQuizResult = () => {
    const categoryScores: { [key: string]: { correct: number; total: number; percentage: number } } = {};
    
    // Calcula pontuação por categoria
    questions.forEach((question) => {
      if (!categoryScores[question.category]) {
        categoryScores[question.category] = {
          correct: 0,
          total: 0,
          percentage: 0
        };
      }
      categoryScores[question.category].total++;
    });

    quizQuestions.forEach((question, index) => {
      if (selectedOption === question.correct) {
        categoryScores[question.category].correct++;
      }
    });

    // Calcula percentuais
    Object.keys(categoryScores).forEach(category => {
      const score = categoryScores[category];
      score.percentage = (score.correct / score.total) * 100;
    });

    const newResult: QuizResult = {
      date: new Date().toISOString(),
      score,
      totalQuestions: quizQuestions.length,
      categoryScores
    };

    const updatedHistory = {
      results: [...quizHistory.results, newResult],
      averageScore: calculateAverageScore([...quizHistory.results, newResult])
    };

    setQuizHistory(updatedHistory);
    localStorage.setItem('awsQuizHistory', JSON.stringify(updatedHistory));
  };

  const calculateAverageScore = (results: QuizResult[]) => {
    if (results.length === 0) return 0;
    const sum = results.reduce((acc, result) => acc + (result.score / result.totalQuestions) * 100, 0);
    return sum / results.length;
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    if (optionIndex === currentQuestion?.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setSelectedOption(null);
    } else if (!showResults) {
      saveQuizResult();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      setSelectedOption(null);
    }
  };

  const restartQuiz = () => {
    setHasStarted(false);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSelectedOption(null);
    setQuizQuestions([]);
    setScore(0);
    setShowResults(false);
  };

  const ResultsView = () => {
    const percentage = (score / quizQuestions.length) * 100;
    const categories = Object.keys(quizHistory.results[quizHistory.results.length - 1].categoryScores);

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
                <p>Você acertou {score} de {quizQuestions.length} questões</p>
              </div>

              <div className="mt-6">
  <h3 className="text-lg font-semibold mb-4">Desempenho por Categoria</h3>
  {categories.map(category => {
    const categoryScore = quizHistory.results[quizHistory.results.length - 1].categoryScores[category];

    // Verifique se categoryScore e categoryScore.percentage estão definidos
    if (!categoryScore || categoryScore.percentage === undefined) {
      return (
        <div key={category} className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>{category}</span>
            <span>0%</span> {/* Valor padrão caso o cálculo da porcentagem não tenha sido encontrado */}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gray-400 h-2 rounded-full" style={{ width: '0%' }} />
          </div>
        </div>
      );
    }

    return (
      <div key={category} className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>{category}</span>
          <span>{categoryScore.percentage.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
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
                onClick={restartQuiz}
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

  const currentQuestion = quizQuestions[currentIndex];

  if (!hasStarted) {
    return (
      <div className="max-w-md mx-auto mt-20 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">AWS Cloud Practitioner</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Seu Nome</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Digite seu nome"
                />
              </div>
              <Button
                className="w-full"
                onClick={startQuiz}
              >
                Iniciar Simulado
              </Button>
              <p className="text-sm text-gray-500 text-center">
                O simulado contém 20 questões selecionadas aleatoriamente
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return <ResultsView />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-xl font-bold">Olá, {userName}!</h2>
        <span className="text-sm text-gray-500">
          Questão {currentIndex + 1} de {quizQuestions.length}
        </span>
      </div>

      <Card className="mb-4">
        <CardContent className="p-6">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {currentQuestion.category}
            </span>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  showAnswer
                    ? index === currentQuestion.correct
                      ? "default"
                      : index === selectedOption
                      ? "destructive"
                      : "outline"
                    : selectedOption === index
                    ? "default"
                    : "outline"
                }
                className="w-full justify-start text-left p-4"
                onClick={() => handleOptionSelect(index)}
                disabled={showAnswer}
              >
                {option}
              </Button>
            ))}
          </div>
          
          {showAnswer && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-medium">Explicação:</p>
              <p className="mt-2">{currentQuestion.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </Button>
        <span className="py-2 px-4 bg-blue-100 text-blue-800 rounded-md">
          Pontuação: {score}/{quizQuestions.length}
        </span>
        <Button
          variant="outline"
          onClick={handleNext}
          className="flex items-center gap-2"
        >
          {currentIndex === quizQuestions.length - 1 ? 'Ver Resultado' : 'Próxima'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default AwsQuizApp;