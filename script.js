const content = window.quizContent;

const elements = {
  deckCount: document.querySelector("#deckCount"),
  questionCountBadge: document.querySelector("#questionCountBadge"),
  topicCount: document.querySelector("#topicCount"),
  bestScoreBadge: document.querySelector("#bestScoreBadge"),
  questionCountSelect: document.querySelector("#questionCount"),
  topicFilter: document.querySelector("#topicFilter"),
  pulseList: document.querySelector("#pulseList"),
  studyGuide: document.querySelector("#studyGuide"),
  examRadar: document.querySelector("#examRadar"),
  startQuizButton: document.querySelector("#startQuizButton"),
  shuffleQuizButton: document.querySelector("#shuffleQuizButton"),
  emptyState: document.querySelector("#emptyState"),
  questionShell: document.querySelector("#questionShell"),
  resultShell: document.querySelector("#resultShell"),
  quizHeading: document.querySelector("#quizHeading"),
  questionCard: document.querySelector("#questionCard"),
  questionTopic: document.querySelector("#questionTopic"),
  questionDifficulty: document.querySelector("#questionDifficulty"),
  questionText: document.querySelector("#questionText"),
  questionSubtitle: document.querySelector("#questionSubtitle"),
  optionsGrid: document.querySelector("#optionsGrid"),
  feedbackBox: document.querySelector("#feedbackBox"),
  confirmButton: document.querySelector("#confirmButton"),
  nextButton: document.querySelector("#nextButton"),
  timerValue: document.querySelector("#timerValue"),
  remainingValue: document.querySelector("#remainingValue"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  progressCount: document.querySelector("#progressCount"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  resultScore: document.querySelector("#resultScore"),
  topicBreakdown: document.querySelector("#topicBreakdown"),
  mistakeReview: document.querySelector("#mistakeReview"),
  newRoundButton: document.querySelector("#newRoundButton"),
  retryMistakesButton: document.querySelector("#retryMistakesButton"),
  quizPanel: document.querySelector("#quiz-panel")
};

const STORAGE_KEY = "sistema-seguranca-quiz-stats";
const OPTION_LABELS = ["A", "B", "C", "D", "E"];

const state = {
  session: [],
  answers: [],
  currentIndex: 0,
  selectedIndex: null,
  confirmed: false,
  startedAt: null,
  timerId: null,
  lastMistakeIds: []
};

const QUESTION_OVERRIDES = {
  "fund-01": "Qual alternativa define melhor segurança da informação?",
  "fund-03": "Por que as pessoas são consideradas um elo crítico da segurança da informação?",
  "fund-04": "Qual é o principal papel dos processos na segurança da informação?",
  "fund-05": "Qual alternativa representa corretamente o papel da tecnologia na segurança da informação?",
  "fund-06": "Quais ativos podem ser protegidos pela segurança da informação?",
  "risk-01": "Como uma ameaça à segurança da informação pode ser definida?",
  "risk-02": "O que é vulnerabilidade em segurança da informação?",
  "risk-03": "Qual formulação sintetiza melhor o conceito de risco?",
  "risk-07": "Qual item abaixo representa um impacto comum de um risco de segurança?",
  "hist-02": "Por que o episódio da IBM em 1967 é relevante para a evolução da segurança?",
  "hist-03": "Por que a década de 1970 é importante para a evolução da segurança cibernética?",
  "hist-04": "Qual marco costuma ser associado a 1987 na história da segurança?",
  "mal-01": "Qual alternativa resume corretamente uma ameaça humana em segurança da informação?",
  "mal-02": "Como malwares podem se instalar em um ambiente computacional?",
  "mal-05": "O que define bots e botnets?",
  "mal-06": "Qual é a principal função do spyware?",
  "mal-09": "Qual situação representa melhor uma ameaça interna?",
  "cia-04": "Em um cenário bancário, 'apenas o cliente pode acessar sua conta' representa qual princípio?",
  "cia-05": "Em um cenário bancário, 'o valor da transferência não pode ser alterado' representa qual princípio?",
  "cia-06": "Em um cenário bancário, 'o sistema precisa funcionar 24 horas' representa qual princípio?",
  "cia-07": "O que significa não repúdio em segurança da informação?",
  "ctrl-01": "Qual conjunto de técnicas está mais ligado à confidencialidade?",
  "ctrl-02": "Como o hash criptográfico pode ser definido?",
  "ctrl-05": "Quais são exemplos de controle de acesso físico e lógico?",
  "ctrl-08": "Por que ACLs, ACEs e regras em diretórios como AD e LDAP são importantes para a confidencialidade?",
  "psi-01": "Como uma Política de Segurança da Informação pode ser caracterizada?",
  "psi-02": "Qual é o propósito central de uma PSI?",
  "psi-04": "Quais níveis de classificação da informação são comuns em uma PSI?",
  "psi-13": "Qual é o foco de um Plano de Continuidade de Negócios?",
  "psi-14": "Por que a PSI precisa de revisão periódica?",
  "psi-15": "Se você precisasse elaborar uma PSI, qual caminho faz mais sentido?",
  "mix-05": "Qual item abaixo não faz sentido como componente típico de uma PSI?"
};

const EXPLANATION_OVERRIDES = {
  "fund-01": "Segurança da informação reúne práticas, políticas, controles e tecnologias voltadas à proteção das informações.",
  "fund-02": "A ideia central é que segurança da informação depende do equilíbrio entre pessoas, processos e tecnologia.",
  "fund-05": "Entre os exemplos mais comuns estão firewalls, criptografia, IA, backups, redundância e recuperação de desastres.",
  "risk-01": "Ameaça é tudo aquilo que pode explorar vulnerabilidades e comprometer informações.",
  "risk-05": "Erro de configuração é um exemplo clássico de vulnerabilidade.",
  "risk-07": "Entre os impactos mais comuns estão perda de dados, vazamento, interrupção do negócio e dano à reputação.",
  "hist-01": "Esse período era marcado por mainframes caros, centralizados e fisicamente controlados.",
  "hist-02": "Esse caso mostra que testes práticos ajudam a revelar fragilidades reais.",
  "hist-04": "1987 é frequentemente associado ao início dos antivírus comerciais.",
  "hist-05": "Os anos 2000 ficaram marcados pela massificação da internet e pela ampliação tanto dos benefícios quanto das ameaças.",
  "mal-01": "Ameaças humanas incluem intenção maliciosa e falta de treinamento.",
  "mal-02": "Malwares podem se instalar por vulnerabilidades, autoexecução, páginas indevidas, ação direta de atacantes e arquivos infectados.",
  "mal-03": "Um vírus pode se espalhar por e-mail, sites ou dispositivos removíveis e comprometer arquivos e sistemas.",
  "mal-05": "Bots são programas automatizados; botnets são redes de dispositivos infectados controladas remotamente.",
  "mal-07": "Trojan se destaca por se disfarçar de programa legítimo e depender da ação do usuário.",
  "risk-06": "Há ameaça, vulnerabilidade e potencial de impacto, formando um cenário clássico de risco.",
  "cia-04": "Acesso exclusivo do titular corresponde à confidencialidade.",
  "cia-06": "Quando o sistema precisa funcionar sempre que necessário, o foco é disponibilidade.",
  "cia-07": "Não repúdio significa que o autor de uma ação não pode negá-la depois.",
  "ctrl-01": "Esses controles ajudam a reforçar a confidencialidade.",
  "ctrl-02": "Hash funciona como uma impressão digital dos dados e ajuda a apoiar a integridade.",
  "ctrl-05": "Controle físico inclui exemplos como catracas e portões; controle lógico inclui senhas e sistemas.",
  "ctrl-06": "Uma política de senha define regras para elevar a segurança do ambiente.",
  "ctrl-07": "Failover e balanceamento são mecanismos complementares de disponibilidade.",
  "psi-04": "Essas quatro categorias são exemplos comuns de classificação da informação.",
  "psi-08": "Treinamento ajuda com práticas como criação de senhas seguras, identificação de phishing e uso correto dos recursos.",
  "psi-11": "Leis como LGPD, GDPR e outras normas orientam a conformidade.",
  "psi-14": "Uma PSI eficaz não é um documento estático.",
  "psi-15": "Uma boa resposta é criar um cenário corporativo e estruturar a política por componentes.",
  "net-01": "ARP resolve um endereço IP para o endereço MAC correspondente dentro da rede local.",
  "mix-01": "Segurança depende da integração entre pessoas, processos e tecnologia.",
  "mix-03": "Hash é um controle clássico para apoiar integridade da informação."
};

function cleanupCopy(text) {
  return text
    .replace(/apresentada nos slides/gi, "mais correta")
    .replace(/segundo o material/gi, "em segurança da informação")
    .replace(/segundo a aula \d+/gi, "em segurança da informação")
    .replace(/citada na aula \d+/gi, "em segurança da informação")
    .replace(/de acordo com os slides/gi, "em segurança da informação")
    .replace(/no resumo dos slides/gi, "em um cenário bancário")
    .replace(/nos slides/gi, "nesse contexto")
    .replace(/no slide/gi, "na definição")
    .replace(/os slides/gi, "esse conteúdo")
    .replace(/o slide/gi, "a definição")
    .replace(/na aula de confidencialidade/gi, "na proteção da confidencialidade")
    .replace(/em aula/gi, "nesse contexto")
    .replace(/na aula/gi, "nesse contexto")
    .replace(/a própria aula sugere/gi, "uma boa resposta é")
    .replace(/orientação do material/gi, "estrutura recomendada")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([?.!,;:])/g, "$1")
    .trim();
}

function normalizeQuestionBank(questionBank) {
  return questionBank.map((question) => ({
    ...question,
    question: QUESTION_OVERRIDES[question.id] || cleanupCopy(question.question),
    explanation: EXPLANATION_OVERRIDES[question.id] || cleanupCopy(question.explanation)
  }));
}

const questionBank = normalizeQuestionBank(content.questionBank);

function shuffle(items) {
  const cloned = [...items];

  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[randomIndex]] = [cloned[randomIndex], cloned[index]];
  }

  return cloned;
}

function formatElapsed(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const rest = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${rest}`;
}

function readStats() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function writeStats(payload) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function getTopics() {
  return [...new Set(questionBank.map((question) => question.topic))];
}

function renderStats() {
  if (!elements.deckCount && !elements.questionCountBadge && !elements.topicCount && !elements.bestScoreBadge) {
    return;
  }

  const stats = readStats();

  if (elements.deckCount) {
    elements.deckCount.textContent = String(content.decks);
  }

  if (elements.questionCountBadge) {
    elements.questionCountBadge.textContent = String(questionBank.length);
  }

  if (elements.topicCount) {
    elements.topicCount.textContent = String(getTopics().length);
  }

  if (elements.bestScoreBadge) {
    elements.bestScoreBadge.textContent = stats.bestPercent ? `${stats.bestPercent}%` : "--";
  }
}

function renderTopicFilter() {
  const topics = getTopics();
  const topicCountMap = questionBank.reduce((accumulator, question) => {
    accumulator[question.topic] = (accumulator[question.topic] || 0) + 1;
    return accumulator;
  }, {});

  elements.topicFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `Todos os temas (${questionBank.length})`;
  elements.topicFilter.appendChild(allOption);

  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = `${topic} (${topicCountMap[topic]})`;
    elements.topicFilter.appendChild(option);
  });

  const fullOption = [...elements.questionCountSelect.options].find((option) => option.value === "9999");
  if (fullOption) {
    fullOption.textContent = `Banco completo (${questionBank.length})`;
  }
}

function renderPulseList() {
  if (!elements.pulseList) {
    return;
  }

  elements.pulseList.innerHTML = "";

  content.examRadar.slice(0, 4).forEach((item) => {
    const card = document.createElement("article");
    card.className = "pulse-item";

    const badge = document.createElement("div");
    badge.className = "pulse-badge";
    badge.innerHTML = '<svg class="icon"><use href="#icon-bolt"></use></svg>';

    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;

    copy.append(title, text);
    card.append(badge, copy);
    elements.pulseList.appendChild(card);
  });
}

function renderGuide() {
  if (!elements.studyGuide) {
    return;
  }

  elements.studyGuide.innerHTML = "";

  content.studyGuide.forEach((section, index) => {
    const details = document.createElement("details");
    details.className = "guide-item";
    details.open = index < 3;

    const summary = document.createElement("summary");
    summary.textContent = section.title;

    const body = document.createElement("div");
    body.className = "guide-body";

    const paragraph = document.createElement("p");
    paragraph.textContent = section.summary;

    const list = document.createElement("ul");
    section.bullets.forEach((bullet) => {
      const item = document.createElement("li");
      item.textContent = bullet;
      list.appendChild(item);
    });

    body.append(paragraph, list);
    details.append(summary, body);
    elements.studyGuide.appendChild(details);
  });
}

function renderRadar() {
  if (!elements.examRadar) {
    return;
  }

  elements.examRadar.innerHTML = "";

  content.examRadar.forEach((item) => {
    const card = document.createElement("article");
    card.className = "radar-card";

    const tag = document.createElement("span");
    tag.textContent = item.tag;

    const title = document.createElement("strong");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    card.append(tag, title, text);
    elements.examRadar.appendChild(card);
  });
}

function prepareQuestion(question) {
  const options = shuffle(
    question.options.map((text, index) => ({
      text,
      isCorrect: index === question.answer
    }))
  );

  return {
    ...question,
    shuffledOptions: options
  };
}

function getRequestedCount(poolLength) {
  const rawValue = Number(elements.questionCountSelect.value);
  if (rawValue >= poolLength || rawValue === 9999) {
    return poolLength;
  }

  return Math.max(1, rawValue);
}

function buildPool(questionIds = null) {
  const selectedTopic = elements.topicFilter.value;
  let pool = [...questionBank];

  if (questionIds && questionIds.length) {
    const idSet = new Set(questionIds);
    pool = pool.filter((question) => idSet.has(question.id));
  } else if (selectedTopic !== "all") {
    pool = pool.filter((question) => question.topic === selectedTopic);
  }

  return pool;
}

function resetSessionState() {
  state.answers = [];
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.confirmed = false;
  state.startedAt = Date.now();

  clearInterval(state.timerId);
  state.timerId = window.setInterval(() => {
    elements.timerValue.textContent = formatElapsed(Date.now() - state.startedAt);
  }, 1000);
}

function updateProgress() {
  if (!state.session.length) {
    elements.progressFill.style.width = "0%";
    elements.progressText.textContent = "0% concluído";
    elements.progressCount.textContent = "0/0 respondidas";
    elements.remainingValue.textContent = "0";
    elements.timerValue.textContent = "00:00";
    return;
  }

  const total = state.session.length;
  const answered = state.answers.length;
  const percent = Math.round((answered / total) * 100);
  const remaining = Math.max(0, total - answered);

  elements.progressFill.style.width = `${percent}%`;
  elements.progressText.textContent = `${percent}% concluído`;
  elements.progressCount.textContent = `${answered}/${total} respondidas`;
  elements.remainingValue.textContent = String(remaining);
  elements.timerValue.textContent = state.startedAt ? formatElapsed(Date.now() - state.startedAt) : "00:00";
}

function toggleShell(visiblePart) {
  elements.emptyState.classList.toggle("hidden", visiblePart !== "empty");
  elements.questionShell.classList.toggle("hidden", visiblePart !== "question");
  elements.resultShell.classList.toggle("hidden", visiblePart !== "result");
}

function renderOptions(question) {
  elements.optionsGrid.innerHTML = "";

  question.shuffledOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.index = String(index);

    if (state.selectedIndex === index) {
      button.classList.add("is-selected");
    }

    if (state.confirmed) {
      button.classList.add("is-locked");

      if (option.isCorrect) {
        button.classList.add("is-correct");
      } else if (state.selectedIndex === index) {
        button.classList.add("is-incorrect");
      }
    }

    const marker = document.createElement("span");
    marker.className = "option-marker";
    marker.textContent = OPTION_LABELS[index] || String(index + 1);

    const text = document.createElement("span");
    text.textContent = option.text;

    button.append(marker, text);
    elements.optionsGrid.appendChild(button);
  });
}

function renderQuestion() {
  const question = state.session[state.currentIndex];
  if (!question) {
    return;
  }

  state.selectedIndex = null;
  state.confirmed = false;

  elements.quizHeading.textContent = `Questão ${state.currentIndex + 1} de ${state.session.length}`;
  elements.questionTopic.textContent = question.topic;
  elements.questionDifficulty.textContent = question.difficulty;
  elements.questionText.textContent = question.question;
  elements.questionSubtitle.textContent = `${question.subtitle}. Selecione uma alternativa e confirme antes de avançar.`;
  elements.questionCard.className = "question-card";
  elements.feedbackBox.className = "feedback-box hidden";
  elements.feedbackBox.innerHTML = "";
  elements.confirmButton.disabled = true;
  elements.nextButton.disabled = true;

  renderOptions(question);
  updateProgress();
}

function selectOption(optionIndex) {
  if (state.confirmed) {
    return;
  }

  state.selectedIndex = optionIndex;
  elements.confirmButton.disabled = false;
  renderOptions(state.session[state.currentIndex]);
}

function confirmAnswer() {
  if (state.selectedIndex === null || state.confirmed) {
    return;
  }

  const question = state.session[state.currentIndex];
  const selectedOption = question.shuffledOptions[state.selectedIndex];
  const correctOption = question.shuffledOptions.find((option) => option.isCorrect);
  const isCorrect = Boolean(selectedOption && selectedOption.isCorrect);

  state.confirmed = true;
  state.answers.push({
    id: question.id,
    topic: question.topic,
    question: question.question,
    selected: selectedOption?.text || "",
    correct: correctOption?.text || "",
    explanation: question.explanation,
    isCorrect
  });

  elements.questionCard.classList.add(isCorrect ? "is-correct" : "is-wrong");
  elements.feedbackBox.className = `feedback-box ${isCorrect ? "success" : "error"}`;
  elements.feedbackBox.innerHTML = `
    <strong>${isCorrect ? "Resposta correta" : "Resposta incorreta"}</strong>
    <p>${question.explanation}</p>
    ${isCorrect ? "" : `<p><strong>Correta:</strong> ${correctOption?.text || "-"}</p>`}
  `;

  elements.confirmButton.disabled = true;
  elements.nextButton.disabled = false;
  renderOptions(question);
  updateProgress();
}

function renderBreakdown() {
  elements.topicBreakdown.innerHTML = "";

  const grouped = state.answers.reduce((accumulator, answer) => {
    if (!accumulator[answer.topic]) {
      accumulator[answer.topic] = { total: 0, correct: 0 };
    }

    accumulator[answer.topic].total += 1;
    accumulator[answer.topic].correct += answer.isCorrect ? 1 : 0;
    return accumulator;
  }, {});

  Object.entries(grouped)
    .sort((first, second) => first[0].localeCompare(second[0], "pt-BR"))
    .forEach(([topic, values]) => {
      const item = document.createElement("article");
      item.className = "breakdown-item";

      const title = document.createElement("strong");
      title.textContent = topic;

      const score = Math.round((values.correct / values.total) * 100);
      const detail = document.createElement("p");
      detail.textContent = `${values.correct} de ${values.total} corretas`;

      const ratio = document.createElement("span");
      ratio.textContent = `${score}% de aproveitamento`;

      item.append(title, detail, ratio);
      elements.topicBreakdown.appendChild(item);
    });
}

function renderMistakes() {
  elements.mistakeReview.innerHTML = "";
  const mistakes = state.answers.filter((answer) => !answer.isCorrect);

  if (!mistakes.length) {
    const item = document.createElement("article");
    item.className = "mistake-item";
    const title = document.createElement("strong");
    title.textContent = "Rodada limpa";
    const text = document.createElement("p");
    text.textContent = "Se quiser, sorteie outra rodada ou refaça o quiz inteiro.";
    item.append(title, text);
    elements.mistakeReview.appendChild(item);
    return;
  }

  mistakes.forEach((mistake) => {
    const item = document.createElement("article");
    item.className = "mistake-item";

    const title = document.createElement("strong");
    title.textContent = mistake.question;

    const wrong = document.createElement("p");
    wrong.textContent = `Sua resposta: ${mistake.selected}`;

    const correct = document.createElement("p");
    correct.textContent = `Correta: ${mistake.correct}`;

    const explanation = document.createElement("p");
    explanation.textContent = mistake.explanation;

    item.append(title, wrong, correct, explanation);
    elements.mistakeReview.appendChild(item);
  });
}

function persistRound(scorePercent) {
  const stats = readStats();
  const nextStats = {
    bestPercent: Math.max(stats.bestPercent || 0, scorePercent),
    lastPercent: scorePercent,
    updatedAt: new Date().toISOString()
  };

  writeStats(nextStats);
}

function finishQuiz() {
  clearInterval(state.timerId);

  const total = state.answers.length;
  const correct = state.answers.filter((answer) => answer.isCorrect).length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const elapsed = state.startedAt ? formatElapsed(Date.now() - state.startedAt) : "00:00";

  state.lastMistakeIds = state.answers.filter((answer) => !answer.isCorrect).map((answer) => answer.id);

  elements.resultTitle.textContent =
    percent >= 85 ? "Mandou bem" : percent >= 70 ? "Boa rodada" : "Vale mais uma rodada";
  elements.resultSummary.textContent = `${correct} de ${total} corretas em ${elapsed}.`;
  elements.resultScore.textContent = `${percent}%`;
  elements.retryMistakesButton.disabled = state.lastMistakeIds.length === 0;

  renderBreakdown();
  renderMistakes();
  persistRound(percent);
  toggleShell("result");
  elements.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function nextQuestion() {
  if (!state.confirmed) {
    return;
  }

  if (state.currentIndex >= state.session.length - 1) {
    finishQuiz();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function startQuiz(questionIds = null) {
  const pool = buildPool(questionIds);
  const requestedCount = questionIds && questionIds.length ? pool.length : getRequestedCount(pool.length);

  if (!pool.length) {
    return;
  }

  state.session = shuffle(pool).slice(0, requestedCount).map(prepareQuestion);
  resetSessionState();
  toggleShell("question");
  renderQuestion();
  elements.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleOptionClick(event) {
  const target = event.target.closest(".option");
  if (!target) {
    return;
  }

  selectOption(Number(target.dataset.index));
}

function bootstrap() {
  renderStats();
  renderTopicFilter();
  toggleShell("empty");
  updateProgress();

  elements.optionsGrid.addEventListener("click", handleOptionClick);
  elements.confirmButton.addEventListener("click", confirmAnswer);
  elements.nextButton.addEventListener("click", nextQuestion);
  elements.startQuizButton.addEventListener("click", () => startQuiz());
  elements.shuffleQuizButton.addEventListener("click", () => startQuiz());
  elements.newRoundButton.addEventListener("click", () => startQuiz());
  elements.retryMistakesButton.addEventListener("click", () => {
    if (state.lastMistakeIds.length) {
      startQuiz(state.lastMistakeIds);
    }
  });
}

bootstrap();
