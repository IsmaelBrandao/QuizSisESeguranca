const hard = (question, options) => ({ question, options });

window.quizQuestionOverrides = {
  // Fundamentos
  "fund-01": hard(
    "Sem recorrer a exemplos externos, qual formulação preserva com maior fidelidade a amplitude conceitual que os slides atribuem à segurança da informação?",
    [
      "Arranjo integrado de práticas, políticas, controles e tecnologias orientado a evitar acesso, uso, alteração, destruição ou indisponibilidade indevidos da informação.",
      "Camada essencialmente perimetral, composta por antivírus e firewall, destinada a barrar tráfego hostil vindo da internet.",
      "Estratégia de isolamento físico de arquivos críticos em servidores sem conexão, suficiente por si só para caracterizar segurança da informação.",
      "Restrição administrativa que transfere ao setor de TI o uso exclusivo dos computadores corporativos."
    ]
  ),
  "fund-02": hard(
    "Se o enunciado exigisse identificar o tripé sem o qual a segurança, na lógica dos slides, perde equilíbrio estrutural, qual conjunto seria o único defensável?",
    [
      "Infraestrutura, software e conectividade.",
      "Pessoas, processos e tecnologia.",
      "Criptografia, auditoria e adequação regulatória.",
      "Servidores, bancos de dados e nuvem."
    ]
  ),
  "fund-03": hard(
    "Qual leitura sintetiza com menos distorção a razão pela qual o fator humano aparece simultaneamente como defesa e fragilidade no material?",
    [
      "Porque somente equipes técnicas operam controles e, por isso, substituem processos formais.",
      "Porque, uma vez autenticado, o usuário deixa de representar superfície relevante de risco.",
      "Porque pessoas podem bloquear ataques por comportamento consciente, mas também viabilizá-los quando faltam treinamento, cultura e mudança de conduta.",
      "Porque mecanismos criptográficos tornam residual a influência de decisões humanas sobre a segurança."
    ]
  ),
  "fund-04": hard(
    "Ao tratar processos como a espinha dorsal da segurança da informação, o conteúdo está mais próximo de qual interpretação?",
    [
      "Processos existem para documentar, depois do incidente, aquilo que a tecnologia não conseguiu impedir.",
      "Processos definem como, quando e por que medidas de segurança devem ser aplicadas, garantindo consistência, repetibilidade e conformidade.",
      "Processos servem para flexibilizar controles, permitindo que cada colaborador adapte a segurança ao próprio estilo de trabalho.",
      "Processos substituem políticas e auditorias, desde que a organização disponha de ferramentas maduras."
    ]
  ),
  "fund-05": hard(
    "Qual descrição evita reduzir indevidamente o papel da tecnologia no modelo apresentado pelas aulas?",
    [
      "A tecnologia atua quase exclusivamente na recuperação posterior ao incidente, sem papel relevante na prevenção.",
      "A tecnologia atua em prevenção, detecção e resposta, além de apoiar identidade, proteção de dados, monitoramento e resiliência operacional.",
      "A tecnologia cumpre função acessória, limitada a armazenar cópias de segurança fora da organização.",
      "A tecnologia, quando bem escolhida, torna dispensáveis processos formais e conscientização humana."
    ]
  ),
  "fund-06": hard(
    "Se alguém restringisse o escopo da segurança da informação apenas a dados digitais, qual alternativa refuta melhor essa redução a partir do que os slides realmente protegem?",
    [
      "Somente bases de dados e sistemas de informação.",
      "Apenas redes, enlaces e equipamentos computacionais.",
      "Dados digitais, sistemas de informação, redes, equipamentos, pessoas e processos organizacionais.",
      "Exclusivamente conteúdos previamente classificados como confidenciais."
    ]
  ),

  // Ameaças e riscos
  "risk-01": hard(
    "Na taxonomia adotada pelos slides, qual formulação capta 'ameaça' como antecedente potencial e não como brecha preexistente ou consequência já consumada?",
    [
      "Mecanismo usado pelo time de segurança para reforçar autenticação e resposta.",
      "Circunstância, ação ou evento com potencial de causar dano, roubo, modificação ou destruição de dados e sistemas.",
      "Fragilidade estrutural de um sistema, rede, processo ou comportamento humano suscetível a exploração.",
      "Resultado financeiro ou reputacional negativo depois que o incidente já ocorreu."
    ]
  ),
  "risk-02": hard(
    "O traço distintivo da vulnerabilidade, na lógica do material, é ser qual tipo de elemento?",
    [
      "Uma repercussão organizacional decorrente de incidente já materializado.",
      "Uma diretriz formal criada para governar acesso e reduzir risco.",
      "Uma fraqueza, falha ou brecha explorável em sistemas, redes, processos ou comportamento humano.",
      "Um mecanismo técnico de autenticação adicional para ambientes críticos."
    ]
  ),
  "risk-03": hard(
    "Qual decomposição conceitual reproduz com maior precisão o raciocínio causal usado pelos slides para sintetizar risco?",
    [
      "Risco = autenticação + monitoramento + backup.",
      "Risco = ameaça + vulnerabilidade + impacto.",
      "Risco = disponibilidade - integridade.",
      "Risco = acesso físico + acesso lógico."
    ]
  ),
  "risk-04": hard(
    "Em uma classificação rigorosa, qual item se enquadra como agente ou evento ofensivo, e não como condição explorável do ambiente?",
    [
      "Servidor com software desatualizado.",
      "Controle físico falho que deixa o rack acessível.",
      "Campanha de ransomware tentando sequestrar os dados corporativos.",
      "Ausência de cultura e treinamento entre usuários."
    ]
  ),
  "risk-05": hard(
    "Qual caso deixa mais clara a existência de uma condição explorável anterior ao incidente, em vez de uma ameaça ou de um efeito já concretizado?",
    [
      "Um colaborador é enganado por phishing e entrega a própria senha.",
      "Uma configuração incorreta no firewall permite tráfego que não deveria existir.",
      "Um grupo criminoso inicia tentativas coordenadas de invasão ao ambiente.",
      "Arquivos do servidor são cifrados por ransomware e se tornam indisponíveis."
    ]
  ),
  "risk-06": hard(
    "Qual cenário contém, ao mesmo tempo, vetor agressor, fraqueza explorável e possibilidade clara de dano, formando o quadro completo de risco descrito nas aulas?",
    [
      "A empresa adota MFA, mantém backup testado e monitora seus servidores.",
      "O servidor está atualizado, isolado e sujeito a política de endurecimento de configuração.",
      "Usuários mantêm senhas fracas e um atacante tenta explorar esse ponto para obter dados sensíveis.",
      "O datacenter possui documentação formal sobre procedimentos operacionais."
    ]
  ),
  "risk-07": hard(
    "Se a banca separar impacto de prevenção, qual alternativa permanece inequivocamente na camada das consequências de um risco de segurança?",
    [
      "Aumento mensurável de produtividade por padronização de controles.",
      "Perda de dados, vazamento de informações, interrupção do negócio e dano reputacional.",
      "Aderência automática a requisitos legais sem necessidade de revisão.",
      "Supressão definitiva do erro humano por adoção de tecnologia."
    ]
  ),

  // Histórico
  "hist-01": hard(
    "Qual caracterização dos ambientes computacionais das décadas de 1960 e 1970 sustenta a narrativa de exposição mais restrita apresentada no material?",
    [
      "Estações leves e distribuídas, com alto grau de mobilidade entre setores.",
      "Mainframes caros, centralizados e mantidos em ambientes controlados com acesso restrito.",
      "Ecossistema já dominado por smartphones corporativos integrados à nuvem.",
      "Infraestrutura baseada em serviços web públicos e massivamente distribuídos."
    ]
  ),
  "hist-02": hard(
    "Por que o episódio envolvendo a IBM em 1967 funciona, nos slides, como ponto de inflexão para pensar segurança?",
    [
      "Porque marcou o encerramento do uso corporativo de computadores de grande porte.",
      "Porque estudantes convidados a testar o sistema ajudaram a evidenciar fraquezas reais do ambiente.",
      "Porque inaugurou o primeiro serviço de backup em nuvem voltado a empresas.",
      "Porque originou a primeira legislação brasileira específica de proteção de dados."
    ]
  ),
  "hist-03": hard(
    "A importância atribuída à década de 1970 não está na substituição de máquinas, mas em qual mudança estrutural destacada pelo conteúdo?",
    [
      "Na redução da necessidade de proteção, já que a comunicação em rede ainda era irrelevante.",
      "No papel da ARPANET ao inaugurar conectividade em rede e ampliar a necessidade de cibersegurança.",
      "Na proibição do compartilhamento de recursos computacionais entre instituições.",
      "Na eliminação dos riscos ligados à comunicação remota entre sistemas."
    ]
  ),
  "hist-04": hard(
    "Qual associação histórica com 1987 permanece coerente com a linha do tempo apresentada nas aulas?",
    [
      "Entrada em vigor da LGPD como marco regulatório de referência.",
      "Surgimento dos antivírus comerciais, com menção a Anti4us e Flushot Plus.",
      "Criação do protocolo ARP para redes locais.",
      "Desaparecimento das formas iniciais de espionagem cibernética."
    ]
  ),
  "hist-05": hard(
    "Ao sintetizar os anos 2000, qual alternativa preserva a combinação de expansão tecnológica e agravamento do cenário de risco destacada nos slides?",
    [
      "Encolhimento do uso doméstico e corporativo da internet após o auge dos mainframes.",
      "Queda do cibercrime em razão do amadurecimento precoce do comércio eletrônico.",
      "Massificação da internet, ataques em grande escala, ransomware e maior foco em governança e gestão de riscos.",
      "Desaparecimento de normas e regulamentações em favor de autorregulação total do mercado."
    ]
  ),

  // Malwares
  "mal-01": hard(
    "No recorte das aulas, o que torna a ameaça humana conceitualmente mais incômoda do que um simples problema técnico?",
    [
      "O fato de somente agentes externos terem potencial real para comprometer ambientes corporativos.",
      "A possibilidade de intenção maliciosa e, ao mesmo tempo, de falhas decorrentes de falta de treinamento.",
      "A irrelevância do comportamento humano diante de controles automatizados maduros.",
      "A premissa de que o usuário, por padrão, é o elemento mais seguro de todo o sistema."
    ]
  ),
  "mal-02": hard(
    "Qual alternativa recompõe, sem omissões centrais, o conjunto de portas de entrada de malware explicitado no material?",
    [
      "Cabo de rede danificado, queda elétrica e travamento físico do equipamento.",
      "Publicação da política de segurança, criação de inventário e troca de senhas.",
      "Vulnerabilidades, autoexecução, páginas indevidas, ação direta de atacantes e arquivos infectados.",
      "Uso exclusivo de dispositivos móveis corporativos e conexão Wi-Fi aberta."
    ]
  ),
  "mal-03": hard(
    "Em contraste com worm, trojan e spyware, qual formulação preserva a marca distintiva atribuída ao vírus pelos slides?",
    [
      "Propagação totalmente autônoma em rede, sem depender de arquivo ou vetor semelhante.",
      "Disfarce deliberado como software aparentemente legítimo para induzir execução voluntária.",
      "Capacidade de infiltrar-se em arquivos e sistemas, espalhando-se por e-mail, sites ou mídia removível.",
      "Monitoramento silencioso de atividades e captura furtiva de dados do usuário."
    ]
  ),
  "mal-04": hard(
    "Se a cobrança vier por contraste fino, qual opção descreve worm sem importar para ele traços típicos de outros malwares?",
    [
      "Programa malicioso que depende da decisão do usuário e se oculta sob aparência legítima.",
      "Malware autossuficiente que se propaga explorando falhas de segurança, sem precisar infectar arquivo para circular.",
      "Ferramenta utilitária usada para gerar hashes e validar integridade de dados.",
      "Registro cronológico de ações executadas em sistemas, útil para auditoria."
    ]
  ),
  "mal-05": hard(
    "Qual leitura mantém a relação correta entre bot e botnet, tal como a aula a apresenta?",
    [
      "Bots são, por definição, mecanismos defensivos legítimos de times de operação e resposta.",
      "Bots são programas automatizados, e botnets são redes de dispositivos infectados controlados remotamente.",
      "Botnets são protocolos de rede voltados a balanceamento de carga e tolerância a falhas.",
      "Bots são artefatos laboratoriais sem relevância operacional em ataques reais."
    ]
  ),
  "mal-06": hard(
    "No quadro comparativo dos malwares, qual finalidade nuclear distingue o spyware?",
    [
      "Criar redundância entre servidores para elevar disponibilidade de serviços.",
      "Monitorar ações do usuário e coletar dados privados sem consentimento explícito.",
      "Executar apenas administração remota legitimamente autorizada pela organização.",
      "Criptografar rotinas de backup para acelerar restauração pós-incidente."
    ]
  ),
  "mal-07": hard(
    "Qual traço conceitual permite identificar um trojan mesmo quando o enunciado troca o nome do malware por um cenário prático?",
    [
      "Propagação automática pela rede sem depender da decisão do usuário.",
      "Ataque prioritariamente físico a instalações e dispositivos do datacenter.",
      "Disfarce como programa legítimo, levando o usuário a executá-lo por engano.",
      "Função equivalente à de um firewall, apenas com nomenclatura diferente."
    ]
  ),
  "mal-08": hard(
    "Entre os exemplos citados explicitamente, qual manifesta engenharia social por manipulação direta da confiança do usuário?",
    [
      "Balanceamento de carga em múltiplos servidores.",
      "Phishing por e-mail falso.",
      "Hash criptográfico aplicado a arquivos sensíveis.",
      "Failover automático após indisponibilidade."
    ]
  ),
  "mal-09": hard(
    "Qual situação tipifica ameaça interna de forma mais aderente ao material, considerando vínculo com a organização e possibilidade de erro ou intenção?",
    [
      "Um agente externo faz varredura pública de portas a partir da internet.",
      "Um funcionário ou parceiro expõe dados da organização, deliberadamente ou por falha humana.",
      "O servidor recebe atualização corretiva liberada pelo fabricante.",
      "A equipe formaliza requisitos mínimos de senha no ambiente."
    ]
  ),
  "mal-10": hard(
    "Qual comparação permanece semanticamente íntegra quando se confrontam malwares parecidos, mas não equivalentes?",
    [
      "Worm exige mais decisão consciente do usuário do que trojan para se disseminar.",
      "Spyware prioriza monitoramento e coleta de dados; trojan finge legitimidade para induzir execução.",
      "Vírus, uma vez executado, não afeta arquivos nem o funcionamento do sistema.",
      "Botnet é apenas outra denominação para cópia de segurança incremental."
    ]
  ),

  // Tríade CIA
  "cia-01": hard(
    "Se o problema central é delimitar quem pode conhecer o conteúdo de uma informação, qual formulação descreve o princípio envolvido sem misturá-lo com integridade ou disponibilidade?",
    [
      "Garantir que os dados permaneçam acessíveis continuamente, independentemente do contexto.",
      "Garantir que a informação seja acessada apenas por pessoas autorizadas.",
      "Garantir que os dados não sofram qualquer modificação indevida ao longo do ciclo de vida.",
      "Garantir que toda ação praticada possa ser atribuída ao seu autor sem possibilidade de negação."
    ]
  ),
  "cia-02": hard(
    "Qual descrição traduz integridade sem contaminá-la com requisitos de acesso ou continuidade operacional?",
    [
      "Garantia de que a informação permaneça correta, completa e confiável, sem alteração indevida.",
      "Garantia de múltiplos links, redundância elétrica e capacidade permanente de resposta.",
      "Garantia de que o usuário autenticado jamais esqueça ou redefina sua senha.",
      "Garantia de que dados sensíveis possam circular livremente após a autenticação inicial."
    ]
  ),
  "cia-03": hard(
    "Quando o conteúdo fala em acesso no momento necessário pelos usuários autorizados, qual leitura conceitual está sendo exigida?",
    [
      "Exclusividade de acesso para a alta gestão do ambiente.",
      "Disponibilidade de sistemas e informações quando necessários aos usuários autorizados.",
      "Obrigatoriedade de criptografia por chave pública em toda e qualquer informação.",
      "Ausência total de manutenção, interrupção programada ou falha operacional."
    ]
  ),
  "cia-04": hard(
    "Num cenário bancário, a exigência de que somente o titular consiga acessar a própria conta traduz mais diretamente qual princípio?",
    [
      "Integridade.",
      "Disponibilidade.",
      "Confidencialidade.",
      "Não repúdio."
    ]
  ),
  "cia-05": hard(
    "Ainda no exemplo bancário, se a preocupação for impedir que o valor de uma transferência seja adulterado no trajeto ou no processamento, qual princípio está em primeiro plano?",
    [
      "Integridade.",
      "Disponibilidade.",
      "Classificação da informação.",
      "Treinamento e conscientização."
    ]
  ),
  "cia-06": hard(
    "Se a exigência é manter o sistema bancário utilizável de forma contínua quando o cliente precisar dele, qual princípio é o mais diretamente invocado?",
    [
      "Disponibilidade.",
      "Integridade.",
      "Confidencialidade.",
      "Não repúdio."
    ]
  ),
  "cia-07": hard(
    "No contexto dos slides, o que realmente se busca ao falar em não repúdio?",
    [
      "Impedir que o autor de uma ação negue posteriormente tê-la realizado.",
      "Bloquear qualquer tentativa de restaurar cópias de segurança após um incidente.",
      "Restringir o uso de senhas complexas para reduzir atrito operacional.",
      "Evitar indisponibilidade por meio de redundância e balanceamento."
    ]
  ),

  // Controles
  "ctrl-01": hard(
    "Se a questão vier por associação negativa, qual conjunto ainda permanece corretamente vinculado à confidencialidade e não a integridade ou disponibilidade?",
    [
      "Hash criptográfico e logs de auditoria.",
      "Criptografia simétrica, criptografia assimétrica, controle de acesso e políticas de senha.",
      "Backup, redundância, failover e balanceamento de carga.",
      "Plano de continuidade, revisão de PSI e inventário patrimonial."
    ]
  ),
  "ctrl-02": hard(
    "Qual formulação mais se aproxima da definição de hash criptográfico apresentada na aula, sem confundi-lo com criptografia reversível ou com protocolo de rede?",
    [
      "Algoritmo matemático que transforma dados em uma sequência fixa e única, funcionando como uma impressão digital do conteúdo.",
      "Ferramenta destinada a distribuir requisições entre múltiplos servidores e reduzir latência.",
      "Protocolo de camada local usado para descobrir o endereço MAC correspondente a um IP.",
      "Método pedagógico empregado em programas de treinamento contra phishing."
    ]
  ),
  "ctrl-03": hard(
    "Se o enunciado pedir o mecanismo que reconstrói cronologicamente quem fez o quê, quando e com qual resultado, qual controle atende exatamente a esse requisito?",
    [
      "Servidores redundantes preparados para failover automático.",
      "Logs de auditoria com registros detalhados de eventos, ações e resultados.",
      "Mascaramento de endereço IP para reduzir rastreabilidade de origem.",
      "Spyware instalado para capturar credenciais sem percepção do usuário."
    ]
  ),
  "ctrl-04": hard(
    "Qual combinação reforça disponibilidade sem importar controles cujo foco principal esteja em sigilo ou rastreabilidade?",
    [
      "Hash, classificação da informação e adequação à LGPD.",
      "Monitoramento de servidores, backup, redundância e balanceamento de carga.",
      "Phishing simulado, engenharia social reversa e análise de comportamento humano.",
      "Spyware, bots e técnicas de ocultação em diretórios."
    ]
  ),
  "ctrl-05": hard(
    "Quando os slides distinguem controle de acesso físico e lógico, qual pareamento de exemplos permanece consistente com essa distinção?",
    [
      "Catracas e portões no físico; senhas e sistemas no lógico.",
      "Balanceamento de carga no físico; hash criptográfico no lógico.",
      "Backups e redundância no físico; antivírus e atualização no lógico.",
      "Worms no físico; trojans e botnets no lógico."
    ]
  ),
  "ctrl-06": hard(
    "Qual leitura resume a função de uma política de senha sem atribuir a ela promessas que o material nunca faz?",
    [
      "Eliminar a necessidade de mecanismos complementares, como autenticação multifator.",
      "Definir regras para incentivar senhas fortes e uso adequado conforme requisitos da organização.",
      "Permitir que cada usuário adote qualquer padrão, desde que memorize a própria senha.",
      "Substituir integralmente ACLs, ACEs e controles de diretório."
    ]
  ),
  "ctrl-07": hard(
    "Qual comparação respeita a diferença funcional entre redundância e balanceamento tal como ela aparece na trilha de disponibilidade?",
    [
      "Redundância distribui carga entre múltiplos nós; balanceamento substitui backup e recuperação.",
      "Redundância mantém cópias ou recursos de reserva; balanceamento distribui tráfego para eficiência e menor latência.",
      "Redundância reforça somente confidencialidade; balanceamento reforça somente integridade.",
      "Ambos existem principalmente para detectar campanhas de phishing em tempo real."
    ]
  ),
  "ctrl-08": hard(
    "Por que ACLs, ACEs e regras em AD e LDAP aparecem no bloco de confidencialidade, e não como simples detalhe de infraestrutura?",
    [
      "Porque estruturam permissões e definem quem pode ler ou modificar objetos e atributos sensíveis.",
      "Porque são mecanismos usados para construir botnets dentro da rede corporativa.",
      "Porque tornam dispensáveis políticas de classificação e segregação de funções.",
      "Porque existem para automatizar a criação e propagação de worms."
    ]
  ),

  // PSI
  "psi-01": hard(
    "Qual enunciado traduz melhor a natureza da Política de Segurança da Informação sem rebaixá-la a um documento meramente simbólico?",
    [
      "Peça de comunicação institucional voltada principalmente ao posicionamento de marca.",
      "Conjunto estruturado de diretrizes, regras e práticas adotadas para proteger informações e sistemas.",
      "Manual técnico restrito à manutenção elétrica e patrimonial do datacenter.",
      "Compilado informal de intenções, sem força organizacional nem efeito prático."
    ]
  ),
  "psi-02": hard(
    "Se a banca perguntar pelo propósito central da PSI, qual resposta permanece aderente à formulação dos slides?",
    [
      "Substituir leis e regulamentos externos por normas internas autossuficientes.",
      "Garantir confidencialidade, integridade e disponibilidade das informações da organização.",
      "Eliminar custos com tecnologia por meio de disciplina administrativa.",
      "Ampliar o acesso irrestrito aos dados para acelerar o fluxo operacional."
    ]
  ),
  "psi-03": hard(
    "Dentro da arquitetura de uma PSI, o item 'âmbito' exerce qual função delimitadora?",
    [
      "Define quais sistemas, redes, dispositivos, dados e públicos estão cobertos pela política.",
      "Estabelece a identidade visual e a linguagem institucional do portal corporativo.",
      "Determina somente horário de atendimento do suporte e janelas de manutenção.",
      "Restringe-se ao orçamento anual disponível para segurança da informação."
    ]
  ),
  "psi-04": hard(
    "Qual sequência de categorias coincide com os níveis de classificação explicitamente citados na aula de PSI?",
    [
      "Aberta, semifechada, auditada e crítica.",
      "Pública, interna, confidencial e altamente confidencial.",
      "Pessoal, comercial, financeira e militar.",
      "Local, regional, nacional e internacional."
    ]
  ),
  "psi-05": hard(
    "No bloco de acessos e controle, qual formulação preserva a intenção normativa que os slides destacam?",
    [
      "Regras para que apenas pessoas autorizadas acessem dados sensíveis, com autenticação, controle de privilégios e segregação de funções.",
      "Orientações para instalar livremente softwares, desde que voltados à produtividade do usuário.",
      "Permissão ampla a qualquer colaborador, desde que o acesso seja registrado em log.",
      "Aquisição de novos computadores como medida suficiente de controle de acesso."
    ]
  ),
  "psi-06": hard(
    "Se a PSI trata gestão de riscos como componente próprio, qual é o objetivo desse bloco segundo o material?",
    [
      "Identificar, analisar, gerenciar e mitigar riscos relacionados à segurança da informação.",
      "Reduzir documentação e formalidades para tornar a operação mais ágil.",
      "Transferir a responsabilidade de segurança integralmente para terceiros e fornecedores.",
      "Preservar as mesmas medidas mesmo quando ameaças, tecnologia e contexto mudam."
    ]
  ),
  "psi-07": hard(
    "Qual item se enquadra legitimamente em segurança física e ambiental dentro de uma PSI?",
    [
      "Câmeras, controle de acesso a ambientes e proteção contra desastres naturais.",
      "Campanhas publicitárias e ações promocionais para reputação institucional.",
      "Emissão de boletos e rotinas de cobrança financeira.",
      "Formatação periódica de equipamentos como política central de conscientização."
    ]
  ),
  "psi-08": hard(
    "Por que treinamento e conscientização aparecem como parte da PSI e não como apêndice opcional?",
    [
      "Porque segurança depende de comportamento, boas práticas e capacidade do colaborador de reconhecer riscos como phishing.",
      "Porque programas de treinamento tornam desnecessários controles técnicos e processos formais.",
      "Porque sua finalidade se restringe a ensinar uso de e-mail e produtividade básica.",
      "Porque incidentes de segurança atingem, em essência, apenas a área de recursos humanos."
    ]
  ),
  "psi-09": hard(
    "Ao tratar gestão de incidentes, o conteúdo espera que a PSI antecipe qual tipo de estrutura?",
    [
      "Apenas cronograma de troca de equipamentos antigos e renovação patrimonial.",
      "Plano de resposta, comunicação e ações corretivas diante de invasões, vazamentos ou falhas.",
      "Suspensão automática de todos os serviços sempre que houver processo de auditoria.",
      "Atuação exclusivamente jurídica, sem diretrizes técnicas ou operacionais."
    ]
  ),
  "psi-10": hard(
    "Na lógica da PSI, o item 'backup e recuperação' existe para cumprir qual papel organizacional?",
    [
      "Impedir o uso de cópias de segurança para evitar divergência entre ambientes.",
      "Garantir cópias regulares dos dados e plano de recuperação em caso de falhas ou perda.",
      "Substituir o plano de continuidade de negócios e a gestão de incidentes.",
      "Atender prioritariamente a demandas contábeis e financeiras, não a resiliência."
    ]
  ),
  "psi-11": hard(
    "Quando a PSI incorpora conformidade e regulamentação, qual compromisso ela assume segundo os slides?",
    [
      "Ignorar marcos legais para preservar autonomia operacional e velocidade decisória.",
      "Garantir aderência a leis e normas como LGPD, GDPR e exigências setoriais aplicáveis.",
      "Substituir auditoria, monitoramento e gestão de riscos por conformidade documental.",
      "Tratar qualquer informação do mesmo modo, independentemente da sensibilidade e do contexto."
    ]
  ),
  "psi-12": hard(
    "Qual a razão mais precisa para auditoria e monitoramento aparecerem como componente da PSI?",
    [
      "Identificar falhas, acompanhar continuamente o ambiente e avaliar a eficácia das medidas de segurança.",
      "Dispensar o restante da governança, tornando desnecessárias revisões periódicas e análise de riscos.",
      "Manter as regras imutáveis, evitando ajustes que possam gerar inconsistência histórica.",
      "Reduzir a produção de registros para simplificar investigação posterior."
    ]
  ),
  "psi-13": hard(
    "No bloco de continuidade de negócios, qual objetivo continua alinhado ao que a aula efetivamente destaca?",
    [
      "Garantir que a organização continue operando durante e após incidentes significativos.",
      "Definir unicamente a escala de férias da equipe de tecnologia.",
      "Controlar patrimônio e inventário físico, sem relação com interrupção operacional.",
      "Classificar malwares por gravidade para fins de pesquisa acadêmica."
    ]
  ),
  "psi-14": hard(
    "Por que a revisão periódica é tratada como requisito e não como detalhe editorial de uma PSI?",
    [
      "Porque uma política eficaz é dinâmica e precisa acompanhar mudanças tecnológicas, novas ameaças e alterações legais.",
      "Porque toda política perde validade automaticamente em intervalos semanais fixos.",
      "Porque revisar significa, sobretudo, atualizar identidade visual e nomenclaturas do documento.",
      "Porque o histórico de versões é irrelevante diante da necessidade de rapidez."
    ]
  ),
  "psi-15": hard(
    "Se a avaliação exigisse elaborar uma PSI coerente com o material, qual caminho metodológico seria o mais aderente?",
    [
      "Criar um cenário corporativo e estruturá-lo por objetivos, âmbito, classificação, acesso, riscos, incidentes, backup, conformidade e revisão.",
      "Produzir um parágrafo genérico sobre a importância abstrata da segurança, sem recorte organizacional.",
      "Listar softwares usados pela empresa, dispensando regras, responsabilidades e classificação da informação.",
      "Concentrar a resposta apenas em requisitos de rede, ignorando pessoas, processos e governança."
    ]
  ),

  // Redes
  "net-01": hard(
    "Em termos estritamente operacionais dentro de uma rede local, qual problema o protocolo ARP resolve?",
    [
      "Criptografar dados entre dois servidores antes da transmissão.",
      "Descobrir o endereço MAC correspondente a um endereço IP na mesma rede.",
      "Distribuir tráfego entre múltiplos links de internet para reduzir latência.",
      "Gerar registros de auditoria para validar controles de acesso."
    ]
  ),
  "net-02": hard(
    "Por que a observação sobre OSI e TCP/IP aparece como pré-requisito útil para a disciplina, segundo a aula inicial?",
    [
      "Porque compreender camadas e comunicação ajuda a interpretar protocolos, ataques de rede e controles.",
      "Porque esse conhecimento substitui o estudo específico de segurança da informação.",
      "Porque redes só importam em tópicos de criptografia assimétrica e assinatura digital.",
      "Porque o modelo OSI serve apenas como curiosidade histórica ligada a hardware antigo."
    ]
  ),

  // Mistura e associação
  "mix-01": hard(
    "Qual afirmação resiste melhor a uma leitura crítica do conjunto dos slides, sem reduzir segurança a ferramenta ou conformidade a fachada?",
    [
      "Segurança da informação se resume à aquisição de ferramentas de rede e defesa perimetral.",
      "Sem pessoas e processos, a tecnologia sozinha não sustenta um programa consistente de segurança.",
      "Treinamento se torna dispensável quando a organização mantém antivírus atualizado em todas as máquinas.",
      "Conformidade regulatória, uma vez documentada, dispensa controles técnicos e revisão contínua."
    ]
  ),
  "mix-02": hard(
    "Um colaborador recebe um e-mail falso, clica no link e entrega a senha. Pela lente conceitual trabalhada nas aulas, qual classificação é a mais correta?",
    [
      "Evento de disponibilidade, porque o usuário ficou temporariamente sem acesso.",
      "Caso de engenharia social e phishing, explorando diretamente o fator humano.",
      "Situação típica de redundância de servidores e contingência operacional.",
      "Procedimento de backup e recuperação mal executado."
    ]
  ),
  "mix-03": hard(
    "Se a banca pedir uma associação quase imediata entre controle e princípio, qual item permanece mais diretamente ligado à integridade?",
    [
      "Hash criptográfico.",
      "Catraca com biometria.",
      "Balanceamento de carga.",
      "Redundância de links."
    ]
  ),
  "mix-04": hard(
    "Qual controle, entre os listados, tem aderência mais direta ao reforço da disponibilidade?",
    [
      "Assinatura digital.",
      "Balanceamento de carga.",
      "Classificação da informação.",
      "Segregação de funções."
    ]
  ),
  "mix-05": hard(
    "Considerando o escopo da PSI apresentado na Aula 05, qual item continua claramente fora do domínio temático da política?",
    [
      "Gestão de incidentes de segurança.",
      "Treinamento e conscientização.",
      "Plano de continuidade de negócios.",
      "Tabela de preços promocionais de vendas."
    ]
  ),
  "mix-06": hard(
    "Se uma empresa consegue restaurar seus dados depois de um ransomware graças a backups confiáveis, quais princípios ficam mais evidentes nesse desfecho?",
    [
      "Disponibilidade e integridade.",
      "Somente confidencialidade.",
      "Somente não repúdio.",
      "Classificação da informação e delimitação de âmbito."
    ]
  ),
};
