window.quizContent = {
  decks: 5,
  studyGuide: [
    {
      title: "Visão geral da disciplina",
      summary:
        "A aula inicial delimita o campo da disciplina: segurança da informação, auditoria de TI, criptografia, segurança corporativa e controles organizacionais.",
      bullets: [
        "As unidades destacadas nos slides vão de princípios de segurança até criptografia, passando por gestão, ataques de rede e introdução a pentest.",
        "O professor sinaliza que conhecimento de redes, modelo OSI e TCP/IP ajuda a interpretar melhor ameaças, protocolos e controles.",
        "Para prova, isso costuma significar cobrança conceitual com aplicação prática em ambientes corporativos."
      ]
    },
    {
      title: "O que é segurança da informação",
      summary:
        "Os slides definem segurança da informação como um conjunto de práticas, políticas, controles e tecnologias para proteger dados contra acesso indevido, alteração indevida, destruição e indisponibilidade.",
      bullets: [
        "A proteção não é só técnica: ela busca preservar ativos de informação e reduzir risco de revelação ou modificação por pessoas não autorizadas.",
        "O núcleo da definição se conecta diretamente com a tríade confidencialidade, integridade e disponibilidade.",
        "Se a questão pedir conceito formal, vale mencionar práticas, políticas, controles e tecnologias no mesmo raciocínio."
      ]
    },
    {
      title: "Segurança não se limita à TI",
      summary:
        "O material insiste que segurança da informação depende do equilíbrio entre pessoas, processos e tecnologia.",
      bullets: [
        "Pessoas podem ser primeira linha de defesa, mas também a maior vulnerabilidade quando falta treinamento ou consciência.",
        "Processos dão consistência, repetibilidade e conformidade; sem processo, a tecnologia vira ferramenta solta.",
        "Tecnologia atua em prevenção, detecção, resposta, gestão de identidade, backup, redundância e recuperação de desastres."
      ]
    },
    {
      title: "Ameaça, vulnerabilidade e risco",
      summary:
        "Esses três conceitos formam um dos blocos mais clássicos de prova porque aparecem como base para decisões de segurança.",
      bullets: [
        "Ameaça é qualquer ação, evento ou circunstância com potencial de causar dano, roubo, modificação ou destruição de dados e sistemas.",
        "Vulnerabilidade é a fraqueza explorável: bug, software desatualizado, erro de configuração, falha física ou comportamento humano inseguro.",
        "Risco é a probabilidade de uma ameaça explorar uma vulnerabilidade e gerar impacto; os slides sintetizam isso como ameaça + vulnerabilidade + impacto.",
        "Impacto pode envolver vazamento, perda de dados, indisponibilidade, interrupção do negócio e dano reputacional."
      ]
    },
    {
      title: "Linha do tempo da segurança",
      summary:
        "A evolução histórica serve para contextualizar por que a segurança ficou mais complexa com redes, internet e escala de uso.",
      bullets: [
        "Décadas de 1960 e 1970: predominância de mainframes em ambientes restritos e controlados.",
        "1967: experimento da IBM com estudantes mostrou fraquezas do sistema e reforçou a importância de testar segurança.",
        "Anos 1970: a ARPANET marca o início real da necessidade de cibersegurança em redes conectadas.",
        "Anos 1980: surgem os termos cavalo de Tróia e vírus; 1987 fica associado ao começo dos antivírus comerciais.",
        "Anos 2000 em diante: internet massificada, comércio eletrônico, ataques em grande escala, ransomware, governança e regulação."
      ]
    },
    {
      title: "Ameaças e malwares que podem cair",
      summary:
        "Os slides exploram ameaças humanas, ameaças internas, engenharia social e uma sequência clássica de malwares.",
      bullets: [
        "Phishing aparece como exemplo central de engenharia social e costuma ser cobrado em cenários com e-mail falso ou roubo de credenciais.",
        "Vírus tende a infectar arquivos e depender de meios como e-mail, sites ou mídia removível para se espalhar.",
        "Worm se propaga sozinho, explorando falhas e consumindo recursos de rede sem precisar infectar arquivo como um vírus clássico.",
        "Trojan se disfarça de programa legítimo e depende de ação do usuário para ser executado.",
        "Spyware coleta dados do usuário sem consentimento, como teclas digitadas, navegação e credenciais.",
        "Bots podem integrar botnets controladas remotamente para automatizar ataques."
      ]
    },
    {
      title: "Tríade CIA e não repúdio",
      summary:
        "A aula 03 concentra os princípios de segurança mais tradicionais e mais cobrados em prova.",
      bullets: [
        "Confidencialidade: só pessoas autorizadas acessam a informação.",
        "Integridade: a informação permanece correta, completa e confiável, sem alteração indevida.",
        "Disponibilidade: sistemas e dados precisam estar acessíveis quando necessários aos usuários autorizados.",
        "Não repúdio: busca impedir que o autor negue ter realizado uma ação; em contexto prático, assinatura digital é o exemplo mais comum."
      ]
    },
    {
      title: "Controles para cada princípio",
      summary:
        "A prova pode pedir associação entre objetivo de segurança e mecanismo técnico ou administrativo correspondente.",
      bullets: [
        "Confidencialidade: criptografia simétrica, criptografia assimétrica, controle de acesso físico e lógico, ACLs, ACEs e políticas de senha.",
        "Integridade: hash criptográfico e logs de auditoria.",
        "Disponibilidade: monitoramento de servidores, backup, redundância, failover e balanceamento de carga.",
        "A diferença entre técnica e objetivo costuma aparecer em questões de correspondência ou estudo de caso."
      ]
    },
    {
      title: "Política de Segurança da Informação",
      summary:
        "A PSI é tratada como documento estruturante da segurança organizacional e aparece como candidato forte a questão discursiva.",
      bullets: [
        "Define regras, diretrizes e práticas para tratar, acessar, armazenar e compartilhar informação.",
        "Componentes destacados nos slides: objetivos, âmbito, classificação da informação, acessos e controle, gestão de riscos, segurança física e ambiental, treinamento, incidentes, backup, conformidade, auditoria, continuidade de negócios e revisão.",
        "Classificação de informação citada: pública, interna, confidencial e altamente confidencial.",
        "A PSI eficaz é dinâmica e deve ser revisada periodicamente para acompanhar novas ameaças, mudanças tecnológicas e exigências legais."
      ]
    },
    {
      title: "O que mais pode virar questão discursiva",
      summary:
        "Os enunciados com mais cara de prova aberta são os que pedem diferenciação de conceitos ou estruturação de política.",
      bullets: [
        "Diferenciar ameaça, vulnerabilidade e risco com exemplo corporativo.",
        "Explicar vírus, worm, trojan e spyware comparando forma de propagação e impacto.",
        "Relacionar confidencialidade, integridade e disponibilidade a controles concretos.",
        "Montar ou comentar os principais itens de uma Política de Segurança da Informação para um ambiente corporativo."
      ]
    }
  ],
  examRadar: [
    {
      tag: "Muito provável",
      title: "Definição de segurança da informação",
      text:
        "Questão direta ou discursiva cobrando conceito formal e objetivo de proteger informações contra acesso, uso, alteração, destruição ou indisponibilidade indevidos."
    },
    {
      tag: "Muito provável",
      title: "Ameaça x vulnerabilidade x risco",
      text:
        "É um trio clássico para prova porque mede se o aluno sabe diferenciar causa, brecha e consequência provável."
    },
    {
      tag: "Muito provável",
      title: "Tríade CIA",
      text:
        "Pode aparecer em definição pura, associação com exemplos bancários ou vinculação com controles como backup, hash e criptografia."
    },
    {
      tag: "Provável",
      title: "Malwares e engenharia social",
      text:
        "Comparações entre vírus, worm, trojan, spyware, bot e phishing têm perfil muito forte de múltipla escolha."
    },
    {
      tag: "Muito provável",
      title: "Estrutura da PSI",
      text:
        "Os slides dedicam uma aula inteira a isso e ainda citam a elaboração de uma política como prova parcial."
    },
    {
      tag: "Provável",
      title: "Controles de confidencialidade, integridade e disponibilidade",
      text:
        "Questões de associação ou estudo de caso podem cobrar qual mecanismo reforça qual princípio."
    },
    {
      tag: "Moderado",
      title: "Linha do tempo da segurança",
      text:
        "Pode aparecer como contextualização: mainframes, ARPANET, surgimento dos antivírus comerciais e expansão da internet."
    },
    {
      tag: "Moderado",
      title: "ARP em redes locais",
      text:
        "A pergunta sobre a utilidade do protocolo ARP aparece explicitamente no material e pode virar item objetivo."
    }
  ],
  questionBank: [
    {
      id: "fund-01",
      topic: "Fundamentos",
      difficulty: "Base",
      subtitle: "Conceito central",
      question: "Qual alternativa traduz melhor a definição apresentada nos slides para segurança da informação?",
      options: [
        "Conjunto de práticas, políticas, controles e tecnologias para proteger informações contra acesso, uso, alteração, destruição ou indisponibilidade indevidos.",
        "Uso exclusivo de antivírus e firewall para impedir ataques externos à internet.",
        "Processo de esconder arquivos sensíveis em servidores sem acesso à rede.",
        "Ato de restringir o uso de computadores apenas ao setor de TI."
      ],
      answer: 0,
      explanation:
        "Os slides definem segurança da informação como um conjunto integrado de práticas, políticas, controles e tecnologias voltado à proteção das informações."
    },
    {
      id: "fund-02",
      topic: "Fundamentos",
      difficulty: "Base",
      subtitle: "Abrangência",
      question: "Segundo o material, segurança da informação não se limita à TI porque depende de quais três pilares?",
      options: [
        "Hardware, software e internet.",
        "Pessoas, processos e tecnologia.",
        "Criptografia, auditoria e LGPD.",
        "Servidor, banco de dados e nuvem."
      ],
      answer: 1,
      explanation:
        "Aula 01 destaca explicitamente que segurança da informação vai além da TI e depende do equilíbrio entre pessoas, processos e tecnologia."
    },
    {
      id: "fund-03",
      topic: "Fundamentos",
      difficulty: "Aplicação",
      subtitle: "Fator humano",
      question: "Por que os slides tratam as pessoas como elo crítico da segurança da informação?",
      options: [
        "Porque só a equipe de segurança pode operar ferramentas técnicas.",
        "Porque as pessoas são sempre confiáveis e não precisam de treinamento.",
        "Porque podem atuar como primeira linha de defesa, mas também como a maior vulnerabilidade sem conscientização.",
        "Porque qualquer falha humana é irrelevante diante da criptografia."
      ],
      answer: 2,
      explanation:
        "O material enfatiza que comportamento, treinamento contínuo e conscientização reduzem riscos como phishing e uso indevido."
    },
    {
      id: "fund-04",
      topic: "Fundamentos",
      difficulty: "Aplicação",
      subtitle: "Papel dos processos",
      question: "Qual é o principal papel dos processos na segurança da informação, de acordo com os slides?",
      options: [
        "Substituir completamente a tecnologia no ambiente corporativo.",
        "Definir como, quando e por que medidas de segurança devem ser aplicadas, garantindo consistência e conformidade.",
        "Permitir que cada colaborador crie sua própria regra sem padrão institucional.",
        "Reduzir a necessidade de políticas formais e auditoria."
      ],
      answer: 1,
      explanation:
        "Os processos são descritos como a espinha dorsal da segurança porque estruturam práticas, repetibilidade e conformidade."
    },
    {
      id: "fund-05",
      topic: "Fundamentos",
      difficulty: "Aplicação",
      subtitle: "Papel da tecnologia",
      question: "Qual alternativa representa corretamente o papel da tecnologia segundo a Aula 01?",
      options: [
        "Atuar somente na recuperação pós-incidente, sem função preventiva.",
        "Atuar em prevenção, detecção e resposta, além de gestão de identidades, criptografia e resiliência.",
        "Servir apenas para armazenar backups fora da empresa.",
        "Eliminar completamente a necessidade de pessoas e processos."
      ],
      answer: 1,
      explanation:
        "O slide destaca firewalls, criptografia, IA, backups, redundância e recuperação de desastres como exemplos de atuação tecnológica."
    },
    {
      id: "fund-06",
      topic: "Fundamentos",
      difficulty: "Revisão",
      subtitle: "Ativos protegidos",
      question: "Quais ativos aparecem na Aula 03 como objetos de proteção da segurança da informação?",
      options: [
        "Apenas dados digitais e sistemas.",
        "Somente redes e equipamentos físicos.",
        "Dados digitais, sistemas de informação, redes, equipamentos, pessoas e processos organizacionais.",
        "Somente informações classificadas como confidenciais."
      ],
      answer: 2,
      explanation:
        "A segurança da informação protege ativos tecnológicos e não tecnológicos, incluindo pessoas e processos."
    },
    {
      id: "risk-01",
      topic: "Ameaças e Riscos",
      difficulty: "Base",
      subtitle: "Ameaça",
      question: "Como o material define uma ameaça à segurança da informação?",
      options: [
        "Qualquer ferramenta usada pela equipe de segurança.",
        "Qualquer circunstância, ação ou evento com potencial de causar dano, roubo, modificação ou destruição de dados e sistemas.",
        "Apenas ataques praticados por hackers externos.",
        "Apenas falhas em equipamentos físicos."
      ],
      answer: 1,
      explanation:
        "Os slides descrevem ameaça como tudo que pode explorar vulnerabilidades e comprometer informações."
    },
    {
      id: "risk-02",
      topic: "Ameaças e Riscos",
      difficulty: "Base",
      subtitle: "Vulnerabilidade",
      question: "O que é vulnerabilidade segundo a Aula 01?",
      options: [
        "A consequência financeira de um incidente já ocorrido.",
        "Uma política de segurança da organização.",
        "Uma fraqueza, falha ou brecha que pode ser explorada por ameaças.",
        "Um software usado para reforçar autenticação."
      ],
      answer: 2,
      explanation:
        "Vulnerabilidade é a brecha explorável em sistema, rede, processo ou comportamento humano."
    },
    {
      id: "risk-03",
      topic: "Ameaças e Riscos",
      difficulty: "Base",
      subtitle: "Risco",
      question: "Qual formulação aparece nos slides para sintetizar o conceito de risco?",
      options: [
        "Risco = autenticação + auditoria + backup.",
        "Risco = ameaça + vulnerabilidade + impacto.",
        "Risco = disponibilidade - integridade.",
        "Risco = acesso físico + acesso lógico."
      ],
      answer: 1,
      explanation:
        "O material resume o risco como a probabilidade de uma ameaça explorar uma vulnerabilidade e causar impacto."
    },
    {
      id: "risk-04",
      topic: "Ameaças e Riscos",
      difficulty: "Aplicação",
      subtitle: "Exemplo de ameaça",
      question: "Qual alternativa representa melhor uma ameaça, e não uma vulnerabilidade?",
      options: [
        "Software desatualizado em um servidor.",
        "Porta do rack deixada destrancada.",
        "Campanha de ransomware tentando sequestrar os dados da empresa.",
        "Ausência de treinamento dos usuários."
      ],
      answer: 2,
      explanation:
        "Ransomware é agente ou evento danoso; já software desatualizado, porta destrancada e falta de treinamento são brechas exploráveis."
    },
    {
      id: "risk-05",
      topic: "Ameaças e Riscos",
      difficulty: "Aplicação",
      subtitle: "Exemplo de vulnerabilidade",
      question: "Qual situação é melhor classificada como vulnerabilidade?",
      options: [
        "Um funcionário cai em phishing e entrega a senha.",
        "Uma falha de configuração no firewall permite tráfego indevido.",
        "Um grupo criminoso tenta invadir o ambiente.",
        "Um ransomware cifra arquivos do servidor."
      ],
      answer: 1,
      explanation:
        "Erro de configuração é um exemplo clássico de vulnerabilidade citado nos slides."
    },
    {
      id: "risk-06",
      topic: "Ameaças e Riscos",
      difficulty: "Aplicação",
      subtitle: "Cenário corporativo",
      question: "Qual cenário representa risco de segurança de forma mais completa?",
      options: [
        "A empresa possui autenticação multifator ativa e backup testado.",
        "O servidor está atualizado e isolado em rede segura.",
        "Usuários usam senhas fracas e um atacante tenta explorar esse ponto para roubar dados sensíveis.",
        "O datacenter foi documentado em uma política."
      ],
      answer: 2,
      explanation:
        "Há ameaça, vulnerabilidade e potencial de impacto, formando exatamente o conceito de risco apresentado em aula."
    },
    {
      id: "risk-07",
      topic: "Ameaças e Riscos",
      difficulty: "Revisão",
      subtitle: "Impacto",
      question: "Qual item abaixo foi citado nos slides como impacto possível de um risco de segurança?",
      options: [
        "Aumento garantido da produtividade.",
        "Perda de dados, vazamento, interrupção do negócio e danos à reputação.",
        "Melhoria automática da conformidade legal.",
        "Eliminação do erro humano."
      ],
      answer: 1,
      explanation:
        "Aula 01 menciona perda de dados, vazamento, interrupção de negócios e dano reputacional como impactos típicos."
    },
    {
      id: "hist-01",
      topic: "Histórico",
      difficulty: "Base",
      subtitle: "Décadas de 1960 e 1970",
      question: "Como eram descritos os computadores predominantes nas décadas de 1960 e 1970 no material?",
      options: [
        "Pequenos notebooks distribuídos em cada setor.",
        "Mainframes enormes mantidos em ambientes seguros e com acesso restrito.",
        "Smartphones corporativos conectados à nuvem.",
        "Servidores web públicos em escala global."
      ],
      answer: 1,
      explanation:
        "Os slides mostram um contexto de mainframes caros, centralizados e fisicamente controlados."
    },
    {
      id: "hist-02",
      topic: "Histórico",
      difficulty: "Aplicação",
      subtitle: "Caso IBM em 1967",
      question: "Por que o episódio da IBM em 1967 é relevante na narrativa dos slides?",
      options: [
        "Porque marcou o fim do uso de computadores em empresas.",
        "Porque estudantes convidados a testar o sistema ajudaram a revelar seus pontos fracos.",
        "Porque foi quando surgiu o primeiro backup em nuvem.",
        "Porque criou a primeira lei brasileira de proteção de dados."
      ],
      answer: 1,
      explanation:
        "A aula usa esse caso para mostrar que avaliação prática de segurança expõe fragilidades reais."
    },
    {
      id: "hist-03",
      topic: "Histórico",
      difficulty: "Base",
      subtitle: "ARPANET",
      question: "Segundo os slides, por que a década de 1970 é importante para a evolução da segurança cibernética?",
      options: [
        "Porque eliminou a necessidade de proteção em redes.",
        "Porque a ARPANET marcou o início real da conectividade em rede e elevou a necessidade de segurança.",
        "Porque proibiu o compartilhamento de recursos computacionais.",
        "Porque substituiu completamente os computadores por terminais burros."
      ],
      answer: 1,
      explanation:
        "A ARPANET é apresentada como marco anterior à internet, ampliando a necessidade de cibersegurança."
    },
    {
      id: "hist-04",
      topic: "Histórico",
      difficulty: "Base",
      subtitle: "Anos 1980",
      question: "Qual ponto os slides destacam sobre 1987?",
      options: [
        "O lançamento da LGPD.",
        "O surgimento dos antivírus comerciais, com destaque para Anti4us e Flushot Plus.",
        "A criação do protocolo ARP.",
        "O fim da espionagem cibernética."
      ],
      answer: 1,
      explanation:
        "Aula 02 associa 1987 ao início dos programas antivírus comerciais."
    },
    {
      id: "hist-05",
      topic: "Histórico",
      difficulty: "Revisão",
      subtitle: "Anos 2000",
      question: "Qual tendência foi apontada como marca dos anos 2000 no material?",
      options: [
        "Redução do uso doméstico de computadores.",
        "Desaparecimento do cibercrime após o comércio eletrônico.",
        "Crescimento da internet, ataques em grande escala, ransomware e foco em governança e gestão de riscos.",
        "Fim das normas e regulamentações de proteção de dados."
      ],
      answer: 2,
      explanation:
        "Os slides ligam os anos 2000 à massificação da internet e à ampliação tanto dos benefícios quanto das ameaças."
    },
    {
      id: "mal-01",
      topic: "Malwares",
      difficulty: "Base",
      subtitle: "Ameaça humana",
      question: "Qual alternativa resume corretamente a ameaça humana citada na Aula 02?",
      options: [
        "Somente pessoas externas podem gerar risco.",
        "Pessoas mal-intencionadas e funcionários sem treinamento podem comprometer a segurança.",
        "Ameaças humanas não interferem em ambiente tecnológico.",
        "O usuário sempre é o elemento mais seguro do sistema."
      ],
      answer: 1,
      explanation:
        "O slide 'HUMANA' destaca tanto intenção maliciosa quanto falta de treinamento."
    },
    {
      id: "mal-02",
      topic: "Malwares",
      difficulty: "Base",
      subtitle: "Instalação de malware",
      question: "De acordo com os slides, como malwares podem se instalar em um ambiente computacional?",
      options: [
        "Apenas por cabo de rede rompido.",
        "Somente quando a empresa publica sua política de segurança.",
        "Por vulnerabilidades, autoexecução, páginas indevidas, ação direta de atacantes e arquivos infectados.",
        "Somente por meio de dispositivos móveis corporativos."
      ],
      answer: 2,
      explanation:
        "A Aula 02 lista explicitamente essas formas de instalação de malware."
    },
    {
      id: "mal-03",
      topic: "Malwares",
      difficulty: "Aplicação",
      subtitle: "Vírus",
      question: "Qual característica distingue melhor um vírus segundo o material?",
      options: [
        "Espalha-se automaticamente sem precisar de arquivo ou interação alguma.",
        "Disfarça-se exclusivamente como software bancário legítimo.",
        "Pode se infiltrar em arquivos e sistemas e se espalhar por e-mail, sites ou mídia removível.",
        "Atua apenas como ferramenta de monitoramento de teclado."
      ],
      answer: 2,
      explanation:
        "O slide sobre vírus fala em infecção de arquivos e propagação por e-mail, sites ou dispositivos removíveis."
    },
    {
      id: "mal-04",
      topic: "Malwares",
      difficulty: "Aplicação",
      subtitle: "Worm",
      question: "Qual alternativa melhor descreve um worm?",
      options: [
        "Malware que depende da ação do usuário e se disfarça como programa legítimo.",
        "Malware autossuficiente que se propaga explorando falhas de segurança, sem precisar infectar arquivo para se espalhar.",
        "Programa usado exclusivamente para criar hashes criptográficos.",
        "Ferramenta que registra logs de auditoria para integridade."
      ],
      answer: 1,
      explanation:
        "Worm é apresentado como autossuficiente, rápido na propagação e capaz de consumir recursos de rede."
    },
    {
      id: "mal-05",
      topic: "Malwares",
      difficulty: "Aplicação",
      subtitle: "Bot e botnet",
      question: "O que os slides explicam sobre bots e botnets?",
      options: [
        "Bots são sempre ferramentas defensivas da equipe de SOC.",
        "Bots são programas automatizados e podem compor botnets controladas remotamente por cibercriminosos.",
        "Botnets são protocolos usados para balanceamento de carga.",
        "Bots existem apenas em laboratórios de pesquisa e não em ataques reais."
      ],
      answer: 1,
      explanation:
        "Aula 02 descreve bots como programas automatizados e botnets como redes de dispositivos infectados sob controle remoto."
    },
    {
      id: "mal-06",
      topic: "Malwares",
      difficulty: "Aplicação",
      subtitle: "Spyware",
      question: "Qual é a principal função do spyware conforme os slides?",
      options: [
        "Gerar redundância entre servidores.",
        "Monitorar ações do usuário e coletar dados privados sem consentimento.",
        "Executar apenas tarefas legítimas de administração remota autorizada.",
        "Criptografar backups para disponibilidade."
      ],
      answer: 1,
      explanation:
        "Spyware é associado a rastreamento, captura de teclas, credenciais e privacidade comprometida."
    },
    {
      id: "mal-07",
      topic: "Malwares",
      difficulty: "Aplicação",
      subtitle: "Trojan",
      question: "Qual é a característica central do trojan?",
      options: [
        "Propaga-se sozinho pela rede, sem ação do usuário.",
        "Atua apenas como ataque físico ao datacenter.",
        "Disfarça-se como programa legítimo e depende da ação do usuário para ser executado.",
        "É o mesmo conceito de firewall com outro nome."
      ],
      answer: 2,
      explanation:
        "O slide sobre trojan enfatiza engano ao usuário e instalação voluntária do falso programa legítimo."
    },
    {
      id: "mal-08",
      topic: "Malwares",
      difficulty: "Base",
      subtitle: "Engenharia social",
      question: "Qual exemplo de engenharia social aparece explicitamente no material?",
      options: [
        "Balanceamento de carga.",
        "Phishing por e-mail falso.",
        "Hash criptográfico.",
        "Failover automático."
      ],
      answer: 1,
      explanation:
        "Phishing é citado como o exemplo mais comum de manipulação de pessoas para obter informação sensível."
    },
    {
      id: "mal-09",
      topic: "Malwares",
      difficulty: "Aplicação",
      subtitle: "Ameaça interna",
      question: "Qual situação representa melhor uma ameaça interna segundo a Aula 01?",
      options: [
        "Um atacante externo faz varredura pública de portas.",
        "Um funcionário ou parceiro, por erro ou intenção, expõe dados da organização.",
        "O servidor recebe uma atualização de segurança.",
        "O time documenta regras de senha."
      ],
      answer: 1,
      explanation:
        "Ameaça interna abrange ações de pessoas com vínculo com a organização, intencionais ou não."
    },
    {
      id: "mal-10",
      topic: "Malwares",
      difficulty: "Revisão",
      subtitle: "Comparação",
      question: "Qual comparação está correta?",
      options: [
        "Worm depende mais da ação do usuário do que trojan.",
        "Spyware tem foco em monitoramento e coleta de dados; trojan finge ser legítimo para ser executado.",
        "Vírus não causa danos a arquivos ou sistema.",
        "Botnet é nome alternativo para backup incremental."
      ],
      answer: 1,
      explanation:
        "Essa comparação resume bem dois conceitos recorrentes do material: espionagem silenciosa e disfarce de legitimidade."
    },
    {
      id: "cia-01",
      topic: "Tríade CIA",
      difficulty: "Base",
      subtitle: "Confidencialidade",
      question: "O que a confidencialidade garante?",
      options: [
        "Que os dados fiquem sempre disponíveis 24 horas por dia.",
        "Que a informação seja acessada apenas por pessoas autorizadas.",
        "Que nenhuma alteração em sistema ocorra ao longo do tempo.",
        "Que todo usuário possa ver tudo, desde que autenticado."
      ],
      answer: 1,
      explanation:
        "Confidencialidade está ligada à restrição de acesso a quem realmente tem autorização."
    },
    {
      id: "cia-02",
      topic: "Tríade CIA",
      difficulty: "Base",
      subtitle: "Integridade",
      question: "O que a integridade garante?",
      options: [
        "Que a informação não seja alterada de forma indevida e permaneça correta, completa e confiável.",
        "Que o sistema tenha múltiplos links de internet.",
        "Que o usuário nunca esqueça a senha.",
        "Que dados possam ser compartilhados livremente."
      ],
      answer: 0,
      explanation:
        "Integridade é a preservação da correção e confiabilidade da informação durante todo o ciclo de vida."
    },
    {
      id: "cia-03",
      topic: "Tríade CIA",
      difficulty: "Base",
      subtitle: "Disponibilidade",
      question: "O que a disponibilidade garante?",
      options: [
        "Que apenas a diretoria tenha acesso aos sistemas.",
        "Que os sistemas e informações estejam acessíveis quando necessários aos usuários autorizados.",
        "Que toda informação esteja criptografada com chave pública.",
        "Que o ambiente nunca precise de manutenção."
      ],
      answer: 1,
      explanation:
        "Disponibilidade não significa perfeição eterna, mas capacidade de acesso quando a organização precisa."
    },
    {
      id: "cia-04",
      topic: "Tríade CIA",
      difficulty: "Aplicação",
      subtitle: "Exemplo bancário",
      question: "No resumo dos slides, 'apenas o cliente pode acessar sua conta' representa qual princípio?",
      options: [
        "Integridade.",
        "Disponibilidade.",
        "Confidencialidade.",
        "Não repúdio."
      ],
      answer: 2,
      explanation:
        "A associação direta feita na aula é: acesso exclusivo do titular corresponde à confidencialidade."
    },
    {
      id: "cia-05",
      topic: "Tríade CIA",
      difficulty: "Aplicação",
      subtitle: "Transferência bancária",
      question: "No resumo dos slides, 'o valor da transferência não pode ser alterado' representa qual princípio?",
      options: [
        "Integridade.",
        "Disponibilidade.",
        "Classificação da informação.",
        "Treinamento e conscientização."
      ],
      answer: 0,
      explanation:
        "Se o valor não pode ser modificado indevidamente, o foco é a integridade."
    },
    {
      id: "cia-06",
      topic: "Tríade CIA",
      difficulty: "Aplicação",
      subtitle: "Sistema 24h",
      question: "No resumo dos slides, 'o sistema precisa funcionar 24 horas' representa qual princípio?",
      options: [
        "Disponibilidade.",
        "Integridade.",
        "Confidencialidade.",
        "Não repúdio."
      ],
      answer: 0,
      explanation:
        "O exemplo é usado em aula justamente para fixar disponibilidade."
    },
    {
      id: "cia-07",
      topic: "Tríade CIA",
      difficulty: "Revisão",
      subtitle: "Não repúdio",
      question: "O que significa não repúdio no contexto dos slides?",
      options: [
        "Garantir que o autor não negue ter realizado uma ação.",
        "Impedir que backups sejam restaurados.",
        "Restringir o uso de senhas complexas.",
        "Evitar que o sistema fique indisponível."
      ],
      answer: 0,
      explanation:
        "A aula 03 define não repúdio como a garantia de que o autor não negue ter feito algo."
    },
    {
      id: "ctrl-01",
      topic: "Controles",
      difficulty: "Base",
      subtitle: "Criptografia",
      question: "Qual conjunto de técnicas os slides associam diretamente à confidencialidade?",
      options: [
        "Hash e logs de auditoria.",
        "Criptografia simétrica, criptografia assimétrica, controle de acesso e políticas de senha.",
        "Backup, redundância e balanceamento de carga.",
        "Plano de continuidade e revisão de PSI."
      ],
      answer: 1,
      explanation:
        "Esses controles aparecem na seção de confidencialidade da Aula 03."
    },
    {
      id: "ctrl-02",
      topic: "Controles",
      difficulty: "Aplicação",
      subtitle: "Hash criptográfico",
      question: "Como o slide define hash criptográfico?",
      options: [
        "Algoritmo que transforma dados em uma sequência única e fixa, como uma impressão digital digital.",
        "Ferramenta para distribuir tráfego entre servidores.",
        "Protocolo para descobrir endereços MAC.",
        "Método de treinamento de usuários contra phishing."
      ],
      answer: 0,
      explanation:
        "A definição da aula trata hash como uma impressão digital dos dados, usada para apoiar integridade."
    },
    {
      id: "ctrl-03",
      topic: "Controles",
      difficulty: "Aplicação",
      subtitle: "Logs de auditoria",
      question: "Qual alternativa descreve corretamente logs de auditoria?",
      options: [
        "Cópias redundantes de servidor usadas para failover.",
        "Registros cronológicos de eventos que mostram quem fez o quê, quando e com qual resultado.",
        "Mecanismo de esconder o endereço IP real do usuário.",
        "Tipo de malware usado para coletar credenciais."
      ],
      answer: 1,
      explanation:
        "O material destaca logs como instrumento de monitoramento, conformidade e investigação."
    },
    {
      id: "ctrl-04",
      topic: "Controles",
      difficulty: "Aplicação",
      subtitle: "Disponibilidade",
      question: "Qual combinação reforça melhor a disponibilidade?",
      options: [
        "Hash, classificação da informação e LGPD.",
        "Monitoramento de servidores, backup, redundância e balanceamento de carga.",
        "Phishing simulado e engenharia social reversa.",
        "Spyware e bots."
      ],
      answer: 1,
      explanation:
        "Esses mecanismos aparecem como técnicas centrais para manter serviço acessível e recuperar operação."
    },
    {
      id: "ctrl-05",
      topic: "Controles",
      difficulty: "Revisão",
      subtitle: "Acesso físico e lógico",
      question: "O que o slide menciona como exemplos de controle de acesso físico e lógico?",
      options: [
        "Catracas e portões no físico; senhas e sistemas no lógico.",
        "Balanceamento de carga no físico; hash no lógico.",
        "Backups no físico; antivírus no lógico.",
        "Worms no físico; trojans no lógico."
      ],
      answer: 0,
      explanation:
        "A aula diferencia acesso físico e lógico e ainda cita biometria, reconhecimento facial, cartões e QR codes."
    },
    {
      id: "ctrl-06",
      topic: "Controles",
      difficulty: "Revisão",
      subtitle: "Política de senha",
      question: "Qual é a função de uma política de senha conforme o material?",
      options: [
        "Eliminar qualquer necessidade de autenticação multifator.",
        "Definir regras para incentivar senhas fortes e uso adequado, de acordo com requisitos da organização.",
        "Permitir que cada usuário use qualquer padrão de senha sem restrição.",
        "Substituir todas as ACLs do Active Directory."
      ],
      answer: 1,
      explanation:
        "Aula 03 mostra política de senha como conjunto de regras para elevar a segurança do computador e do ambiente."
    },
    {
      id: "ctrl-07",
      topic: "Controles",
      difficulty: "Aplicação",
      subtitle: "Redundância x balanceamento",
      question: "Qual comparação está correta?",
      options: [
        "Redundância distribui carga; balanceamento substitui backup.",
        "Redundância mantém cópias ou servidores de reserva; balanceamento distribui tráfego para eficiência e menor latência.",
        "Redundância é usada só para confidencialidade; balanceamento só para integridade.",
        "Ambos servem apenas para detectar phishing."
      ],
      answer: 1,
      explanation:
        "Os slides distinguem failover e distribuição de carga como mecanismos complementares de disponibilidade."
    },
    {
      id: "ctrl-08",
      topic: "Controles",
      difficulty: "Revisão",
      subtitle: "Active Directory e LDAP",
      question: "Por que ACLs, ACEs e regras em diretórios como AD e LDAP aparecem na aula de confidencialidade?",
      options: [
        "Porque ajudam a definir quem pode ler ou modificar objetos e atributos sensíveis.",
        "Porque servem para construir botnets corporativas.",
        "Porque substituem qualquer política de classificação da informação.",
        "Porque são usados para criar worms."
      ],
      answer: 0,
      explanation:
        "Esses mecanismos estruturam permissões e controle de acesso, reforçando confidencialidade."
    },
    {
      id: "psi-01",
      topic: "PSI",
      difficulty: "Base",
      subtitle: "Definição",
      question: "Como a Aula 05 caracteriza uma Política de Segurança da Informação?",
      options: [
        "Documento de marketing usado para divulgar a empresa.",
        "Conjunto de diretrizes, regras e práticas adotadas para proteger informações e sistemas.",
        "Manual exclusivo de manutenção elétrica do datacenter.",
        "Lista informal de boas intenções sem aplicação prática."
      ],
      answer: 1,
      explanation:
        "A PSI é apresentada como documento organizacional estruturado para tratar proteção da informação."
    },
    {
      id: "psi-02",
      topic: "PSI",
      difficulty: "Base",
      subtitle: "Objetivo",
      question: "Qual é o propósito central da PSI segundo os slides?",
      options: [
        "Substituir toda a legislação por regras internas.",
        "Garantir confidencialidade, integridade e disponibilidade das informações da organização.",
        "Eliminar qualquer custo com tecnologia.",
        "Permitir acesso total aos dados para acelerar o trabalho."
      ],
      answer: 1,
      explanation:
        "A PSI existe para orientar proteção da informação com foco na tríade CIA e mitigação de riscos."
    },
    {
      id: "psi-03",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Âmbito",
      question: "O que o item 'âmbito' delimita dentro de uma PSI?",
      options: [
        "Quais sistemas, redes, dispositivos, dados e públicos estão cobertos pela política.",
        "A cor oficial do portal corporativo.",
        "Somente o horário de expediente do suporte técnico.",
        "Apenas o orçamento anual da organização."
      ],
      answer: 0,
      explanation:
        "Âmbito define alcance: sistemas, dados e pessoas às quais a política se aplica."
    },
    {
      id: "psi-04",
      topic: "PSI",
      difficulty: "Base",
      subtitle: "Classificação",
      question: "Quais níveis de classificação da informação aparecem explicitamente nos slides?",
      options: [
        "Aberta, semifechada, auditada e crítica.",
        "Pública, interna, confidencial e altamente confidencial.",
        "Pessoal, comercial, financeira e militar.",
        "Local, regional, nacional e internacional."
      ],
      answer: 1,
      explanation:
        "Aula 05 usa exatamente essas quatro categorias como exemplo de classificação."
    },
    {
      id: "psi-05",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Acessos e controle",
      question: "O que a PSI deve estabelecer na parte de acessos e controle?",
      options: [
        "Regras para que apenas pessoas autorizadas acessem dados sensíveis, com autenticação e controle de privilégios.",
        "Instruções para instalar qualquer software sem aprovação.",
        "Permissão irrestrita a todos os colaboradores.",
        "Exclusivamente a compra de novos computadores."
      ],
      answer: 0,
      explanation:
        "Os slides citam autenticação, biometria, controle de privilégios e segregação de funções."
    },
    {
      id: "psi-06",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Gestão de riscos",
      question: "Qual é o objetivo da gestão de riscos dentro da PSI?",
      options: [
        "Identificar, analisar, gerenciar e mitigar riscos relacionados à segurança da informação.",
        "Remover toda a documentação para acelerar processos.",
        "Transferir a responsabilidade de segurança apenas para fornecedores.",
        "Manter as mesmas medidas mesmo quando o cenário muda."
      ],
      answer: 0,
      explanation:
        "A gestão de riscos aparece como processo contínuo para identificar, responder e mitigar ameaças."
    },
    {
      id: "psi-07",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Segurança física e ambiental",
      question: "Qual item se encaixa em segurança física e ambiental dentro da PSI?",
      options: [
        "Câmeras, controle de acesso a ambientes e proteção contra desastres naturais.",
        "Criação de campanhas publicitárias para a marca.",
        "Apenas emissão de boletos.",
        "Formatação periódica dos computadores dos usuários."
      ],
      answer: 0,
      explanation:
        "Esse bloco trata de proteção de equipamentos, ambientes e até dispositivos fora do espaço físico da organização."
    },
    {
      id: "psi-08",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Treinamento",
      question: "Por que treinamento e conscientização fazem parte da PSI?",
      options: [
        "Porque segurança depende de mudança de comportamento e boas práticas dos colaboradores.",
        "Porque substituem qualquer controle técnico.",
        "Porque servem apenas para ensinar a usar o e-mail.",
        "Porque só o RH é afetado por incidentes."
      ],
      answer: 0,
      explanation:
        "O slide reforça práticas como criação de senhas seguras, identificação de phishing e uso correto dos recursos."
    },
    {
      id: "psi-09",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Incidentes",
      question: "O que a gestão de incidentes de segurança deve prever?",
      options: [
        "Apenas a troca periódica de computadores antigos.",
        "Plano de resposta, comunicação e ações corretivas diante de invasões, vazamentos ou falhas.",
        "Suspensão automática de todos os serviços sempre que houver auditoria.",
        "Exclusivamente ações jurídicas, sem medidas técnicas."
      ],
      answer: 1,
      explanation:
        "A PSI deve definir como reagir, comunicar e corrigir quando incidentes de segurança ocorrerem."
    },
    {
      id: "psi-10",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Backup e recuperação",
      question: "Qual é o papel do item 'backup e recuperação' em uma PSI?",
      options: [
        "Impedir o uso de qualquer cópia de segurança.",
        "Garantir cópias regulares dos dados e plano de recuperação em caso de falhas ou perda.",
        "Eliminar a necessidade de continuidade de negócios.",
        "Servir apenas para a área financeira."
      ],
      answer: 1,
      explanation:
        "O foco é assegurar cópias regulares e recuperação quando houver falha de sistema ou perda de dados."
    },
    {
      id: "psi-11",
      topic: "PSI",
      difficulty: "Revisão",
      subtitle: "Conformidade",
      question: "Qual alternativa representa corretamente o papel de conformidade e regulamentação na PSI?",
      options: [
        "Ignorar leis para priorizar agilidade operacional.",
        "Garantir aderência a leis e normas como LGPD, GDPR e exigências setoriais.",
        "Substituir auditorias e monitoramento internos.",
        "Permitir tratamento igual para qualquer tipo de dado, independentemente da sensibilidade."
      ],
      answer: 1,
      explanation:
        "Aula 05 cita explicitamente LGPD, GDPR e outros regulamentos como referências de conformidade."
    },
    {
      id: "psi-12",
      topic: "PSI",
      difficulty: "Revisão",
      subtitle: "Auditoria e monitoramento",
      question: "Por que auditoria e monitoramento aparecem como componente da PSI?",
      options: [
        "Para identificar falhas, monitorar continuamente e avaliar a eficácia das medidas de segurança.",
        "Para substituir completamente a gestão de riscos.",
        "Para deixar as regras estáticas e nunca revisá-las.",
        "Para evitar qualquer registro de atividade."
      ],
      answer: 0,
      explanation:
        "O material usa auditoria e monitoramento como forma de verificar conformidade e eficácia dos controles."
    },
    {
      id: "psi-13",
      topic: "PSI",
      difficulty: "Revisão",
      subtitle: "Continuidade de negócios",
      question: "Qual é o foco do Plano de Continuidade de Negócios citado na Aula 05?",
      options: [
        "Garantir que a organização continue operando durante e após incidentes significativos.",
        "Definir somente a escala de férias da equipe de TI.",
        "Controlar exclusivamente o inventário patrimonial.",
        "Classificar malware por grau de periculosidade."
      ],
      answer: 0,
      explanation:
        "BCP serve para manter a operação viva mesmo quando ocorre um incidente sério."
    },
    {
      id: "psi-14",
      topic: "PSI",
      difficulty: "Revisão",
      subtitle: "Revisão e atualização",
      question: "Por que a PSI precisa ser revisada periodicamente?",
      options: [
        "Porque uma política eficaz é dinâmica e deve acompanhar mudanças tecnológicas, novas ameaças e alterações legais.",
        "Porque políticas de segurança perdem validade toda semana.",
        "Porque revisão serve apenas para trocar o logotipo do documento.",
        "Porque não é necessário manter histórico de versões."
      ],
      answer: 0,
      explanation:
        "Os slides deixam claro que PSI eficaz não é documento estático."
    },
    {
      id: "psi-15",
      topic: "PSI",
      difficulty: "Aplicação",
      subtitle: "Questão discursiva",
      question: "Se a prova pedir para elaborar uma PSI, qual caminho está mais alinhado com a orientação do material?",
      options: [
        "Criar um cenário corporativo, definir objetivos, âmbito, classificação, acesso, riscos, incidentes, backups, conformidade e revisão.",
        "Escrever apenas um parágrafo dizendo que segurança é importante.",
        "Listar softwares da empresa sem definir regras nem responsabilidades.",
        "Descrever só requisitos de rede e ignorar pessoas e processos."
      ],
      answer: 0,
      explanation:
        "A própria aula sugere criar um ambiente corporativo como base e estruturar a política por componentes."
    },
    {
      id: "net-01",
      topic: "Redes",
      difficulty: "Base",
      subtitle: "ARP",
      question: "Qual é a utilidade do protocolo ARP em uma rede local?",
      options: [
        "Criptografar dados entre dois servidores.",
        "Descobrir o endereço MAC correspondente a um endereço IP na mesma rede.",
        "Distribuir tráfego entre links de internet.",
        "Gerar logs de auditoria para controle de acesso."
      ],
      answer: 1,
      explanation:
        "ARP resolve endereço IP em endereço físico MAC dentro da rede local, o que justifica a pergunta isolada no slide."
    },
    {
      id: "net-02",
      topic: "Redes",
      difficulty: "Aplicação",
      subtitle: "Pré-requisito",
      question: "Por que a observação sobre OSI e TCP/IP pode ajudar nesta disciplina?",
      options: [
        "Porque entender camadas e comunicação facilita analisar protocolos, ataques de rede e controles.",
        "Porque substitui completamente o estudo de segurança da informação.",
        "Porque redes só importam para criptografia assimétrica.",
        "Porque o modelo OSI serve apenas para hardware antigo."
      ],
      answer: 0,
      explanation:
        "O professor indica esse conhecimento como apoio para interpretar melhor o conteúdo técnico da disciplina."
    },
    {
      id: "mix-01",
      topic: "Fundamentos",
      difficulty: "Aplicação",
      subtitle: "Pegadinha conceitual",
      question: "Qual afirmação está correta?",
      options: [
        "Segurança da informação é sinônimo de comprar ferramentas de rede.",
        "Sem pessoas e processos, a tecnologia sozinha não sustenta a segurança da informação.",
        "Treinamento é opcional quando existe antivírus atualizado.",
        "Conformidade dispensa controles técnicos."
      ],
      answer: 1,
      explanation:
        "Os slides reforçam várias vezes a integração entre pessoas, processos e tecnologia."
    },
    {
      id: "mix-02",
      topic: "Ameaças e Riscos",
      difficulty: "Aplicação",
      subtitle: "Classificação de cenário",
      question: "Um colaborador recebe e-mail falso, clica no link e informa a senha. Como o caso pode ser classificado?",
      options: [
        "Somente como disponibilidade.",
        "Como engenharia social e phishing, explorando fator humano.",
        "Como redundância de servidores.",
        "Como backup e recuperação."
      ],
      answer: 1,
      explanation:
        "O cenário casa diretamente com phishing, que é o exemplo de engenharia social mais citado no material."
    },
    {
      id: "mix-03",
      topic: "Controles",
      difficulty: "Aplicação",
      subtitle: "Associação de princípio",
      question: "Qual controle abaixo se alinha mais diretamente com integridade?",
      options: [
        "Hash criptográfico.",
        "Catraca com biometria.",
        "Balanceamento de carga.",
        "Redundância de links."
      ],
      answer: 0,
      explanation:
        "Hash é o exemplo central dado na aula para apoiar integridade da informação."
    },
    {
      id: "mix-04",
      topic: "Controles",
      difficulty: "Aplicação",
      subtitle: "Associação de princípio",
      question: "Qual controle abaixo se alinha mais diretamente com disponibilidade?",
      options: [
        "Assinatura digital.",
        "Balanceamento de carga.",
        "Classificação da informação.",
        "Segregação de funções."
      ],
      answer: 1,
      explanation:
        "Balanceamento de carga ajuda a manter desempenho e acesso, reforçando disponibilidade."
    },
    {
      id: "mix-05",
      topic: "PSI",
      difficulty: "Revisão",
      subtitle: "O que não entra",
      question: "Qual item abaixo não faz sentido como componente típico de uma PSI, considerando os slides?",
      options: [
        "Gestão de incidentes de segurança.",
        "Treinamento e conscientização.",
        "Plano de continuidade de negócios.",
        "Tabela de preços promocionais de vendas."
      ],
      answer: 3,
      explanation:
        "A PSI cobre proteção da informação e continuidade do negócio, não planejamento comercial promocional."
    },
    {
      id: "mix-06",
      topic: "Tríade CIA",
      difficulty: "Revisão",
      subtitle: "Raciocínio final",
      question: "Se uma empresa restaura dados após ransomware graças a backups íntegros, quais princípios aparecem com mais clareza?",
      options: [
        "Disponibilidade e integridade.",
        "Somente confidencialidade.",
        "Somente não repúdio.",
        "Classificação e escopo."
      ],
      answer: 0,
      explanation:
        "A restauração reforça disponibilidade; a confiança no backup restaurado envolve integridade dos dados."
    }
  ]
};
