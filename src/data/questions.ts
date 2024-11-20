import { Question } from '../types/quiz';

export const questions: Question[] = [
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
            question: "Quais são as responsabilidades do cliente no modelo de responsabilidade compartilhada da AWS? (Selecione 2)",
            options: [
              "Segurança dos dados do cliente",
              "Manutenção física dos data centers",
              "Configuração de grupos de segurança",
              "Patches do hypervisor"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "No modelo de responsabilidade compartilhada, o cliente é responsável pela segurança NA nuvem, incluindo a segurança dos dados e configuração de controles de acesso."
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
          },
          {
            id: 55,
            category: "Segurança",
            question: "Quais são as melhores práticas de segurança para IAM? (Selecione 2)",
            options: [
              "Ativar MFA para todos os usuários",
              "Compartilhar credenciais entre equipes",
              "Seguir o princípio do menor privilégio",
              "Usar apenas uma conta root"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "Ativar MFA e seguir o princípio do menor privilégio são práticas fundamentais de segurança no IAM."
          },
          {
            id: 56,
            category: "Tecnologia",
            question: "Quais serviços AWS são comumente usados para arquiteturas serverless? (Selecione 3)",
            options: [
              "AWS Lambda",
              "Amazon EC2",
              "Amazon API Gateway",
              "Amazon DynamoDB",
              "Amazon EBS"
            ],
            correct: [0, 2, 3],
            selectCount: 3,
            explanation: "Lambda, API Gateway e DynamoDB são serviços fundamentais para arquiteturas serverless na AWS."
          },
          {
            id: 57,
            category: "Faturamento e Preços",
            question: "Quais opções de compra podem reduzir custos de EC2? (Selecione 2)",
            options: [
              "Reserved Instances",
              "On-Demand Instances",
              "Spot Instances",
              "Dedicated Hosts"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "Reserved Instances oferecem desconto por compromisso de longo prazo, enquanto Spot Instances permitem usar capacidade excedente com descontos significativos."
          },
          {
            id: 58,
            category: "Arquitetura de Nuvem",
            question: "Quais componentes são essenciais para alta disponibilidade na AWS? (Selecione 2)",
            options: [
              "Múltiplas Availability Zones",
              "Única região AWS",
              "Auto Scaling",
              "Servidor único potente"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "Usar múltiplas AZs e Auto Scaling são elementos chave para garantir alta disponibilidade."
          },
          {
            id: 59,
            category: "Segurança",
            question: "Quais são as formas recomendadas de proteger dados em repouso na AWS? (Selecione 2)",
            options: [
              "AWS KMS",
              "Deixar dados não criptografados",
              "Server-Side Encryption",
              "Compartilhar chaves de criptografia"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "AWS KMS e Server-Side Encryption são métodos recomendados para proteger dados em repouso."
          },
          {
            id: 60,
            category: "Tecnologia",
            question: "Quais serviços AWS são usados para computação em contêineres? (Selecione 2)",
            options: [
              "Amazon ECS",
              "Amazon S3",
              "Amazon EKS",
              "Amazon RDS"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "Amazon ECS (Elastic Container Service) e Amazon EKS (Elastic Kubernetes Service) são os principais serviços para orquestração de contêineres."
          },
          {
            id: 61,
            category: "Conceitos de Nuvem",
            question: "Quais são os benefícios da computação em nuvem segundo a AWS? (Selecione 3)",
            options: [
              "Trocar despesas de capital por despesas variáveis",
              "Maior investimento em data centers",
              "Economia de escala",
              "Maior velocidade e agilidade",
              "Necessidade de adivinhar capacidade"
            ],
            correct: [0, 2, 3],
            selectCount: 3,
            explanation: "Estes são três dos seis benefícios principais da computação em nuvem definidos pela AWS."
          },
          {
            id: 62,
            category: "Segurança",
            question: "Quais serviços ajudam na proteção contra ataques DDoS? (Selecione 2)",
            options: [
              "AWS Shield",
              "Amazon RDS",
              "AWS WAF",
              "Amazon EC2"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "AWS Shield e AWS WAF trabalham em conjunto para proteger aplicações contra diferentes tipos de ataques DDoS."
          },
          {
            id: 63,
            category: "Tecnologia",
            question: "Quais serviços são essenciais para um data warehouse na AWS? (Selecione 2)",
            options: [
              "Amazon Redshift",
              "Amazon EC2",
              "AWS Glue",
              "Amazon ECS"
            ],
            correct: [0, 2],
            selectCount: 2,
            explanation: "Amazon Redshift é o serviço de data warehouse e AWS Glue ajuda na preparação e carregamento de dados."
          }
      ];
