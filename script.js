const content = window.quizContent;
const PROGRESS_KEY = "quiz-sis-seguranca-progress-v1";

const elements = {
  startQuizButton: document.querySelector("#startQuizButton"),
  emptyState: document.querySelector("#emptyState"),
  questionShell: document.querySelector("#questionShell"),
  resultShell: document.querySelector("#resultShell"),
  quizHeading: document.querySelector("#quizHeading"),
  questionCard: document.querySelector("#questionCard"),
  questionTopic: document.querySelector("#questionTopic"),
  questionDifficulty: document.querySelector("#questionDifficulty"),
  questionText: document.querySelector("#questionText"),
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
  resultCorrectCount: document.querySelector("#resultCorrectCount"),
  resultWrongCount: document.querySelector("#resultWrongCount"),
  resultMessageTitle: document.querySelector("#resultMessageTitle"),
  resultMessageText: document.querySelector("#resultMessageText"),
  topicBreakdown: document.querySelector("#topicBreakdown"),
  mistakeReview: document.querySelector("#mistakeReview"),
  restartButton: document.querySelector("#restartButton"),
  quizPanel: document.querySelector("#quiz-panel")
};

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

const state = {
  session: [],
  answers: [],
  currentIndex: 0,
  selectedIndex: null,
  confirmed: false,
  startedAt: null,
  timerId: null
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
  "risk-06": "Há ameaça, vulnerabilidade e potencial de impacto, formando um cenário clássico de risco.",
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

const CONTENT_OVERRIDES = window.quizQuestionOverrides || {};

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
  return questionBank.map((question) => {
    const contentOverride = CONTENT_OVERRIDES[question.id] || null;

    return {
      ...question,
      ...contentOverride,
      difficulty: contentOverride?.difficulty || (contentOverride ? "Hard" : question.difficulty),
      question:
        contentOverride?.question ||
        QUESTION_OVERRIDES[question.id] ||
        cleanupCopy(question.question),
      explanation:
        contentOverride?.explanation ||
        EXPLANATION_OVERRIDES[question.id] ||
        cleanupCopy(question.explanation)
    };
  });
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
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function prepareQuestion(question) {
  return {
    ...question,
    shuffledOptions: shuffle(
      question.options.map((text, index) => ({
        text,
        isCorrect: index === question.answer
      }))
    )
  };
}

function readProgress() {
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function clearProgress() {
  try {
    window.localStorage.removeItem(PROGRESS_KEY);
  } catch {}
}

function saveProgress() {
  if (!state.session.length) {
    clearProgress();
    return;
  }

  const payload = {
    session: state.session,
    answers: state.answers,
    currentIndex: state.currentIndex,
    selectedIndex: state.selectedIndex,
    confirmed: state.confirmed,
    elapsedMs: state.startedAt ? Date.now() - state.startedAt : 0
  };

  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(payload));
  } catch {}
}

function startTimer(elapsedMs = 0) {
  clearInterval(state.timerId);
  state.startedAt = Date.now() - elapsedMs;
  state.timerId = window.setInterval(() => {
    elements.timerValue.textContent = formatElapsed(Date.now() - state.startedAt);
  }, 1000);
}

function toggleShell(part) {
  elements.emptyState.classList.toggle("hidden", part !== "empty");
  elements.questionShell.classList.toggle("hidden", part !== "question");
  elements.resultShell.classList.toggle("hidden", part !== "result");
}

function updateProgress() {
  if (!state.session.length) {
    elements.progressFill.style.width = "0%";
    elements.progressText.textContent = "0% concluído";
    elements.progressCount.textContent = `0/${questionBank.length}`;
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
  elements.progressCount.textContent = `${answered}/${total}`;
  elements.remainingValue.textContent = String(remaining);
  elements.timerValue.textContent = state.startedAt ? formatElapsed(Date.now() - state.startedAt) : "00:00";
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

  elements.quizHeading.textContent = `Questão ${state.currentIndex + 1} de ${state.session.length}`;
  elements.questionTopic.textContent = question.topic;
  elements.questionDifficulty.textContent = question.difficulty;
  elements.questionText.textContent = question.question;
  elements.questionCard.className = "question-card";
  elements.feedbackBox.className = "feedback-box hidden";
  elements.feedbackBox.innerHTML = "";

  renderOptions(question);

  if (state.confirmed && state.selectedIndex !== null) {
    const selectedOption = question.shuffledOptions[state.selectedIndex];
    const correctOption = question.shuffledOptions.find((option) => option.isCorrect);
    const isCorrect = Boolean(selectedOption?.isCorrect);

    elements.questionCard.classList.add(isCorrect ? "is-correct" : "is-wrong");
    elements.feedbackBox.className = `feedback-box ${isCorrect ? "success" : "error"}`;
    elements.feedbackBox.innerHTML = `
      <strong>${isCorrect ? "Resposta correta" : "Resposta incorreta"}</strong>
      <p>${question.explanation}</p>
      ${isCorrect ? "" : `<p><strong>Correta:</strong> ${correctOption?.text || "-"}</p>`}
    `;
    elements.confirmButton.disabled = true;
    elements.nextButton.disabled = false;
  } else {
    elements.confirmButton.disabled = state.selectedIndex === null;
    elements.nextButton.disabled = true;
  }

  updateProgress();
  saveProgress();
}

function selectOption(index) {
  if (state.confirmed) {
    return;
  }

  state.selectedIndex = index;
  elements.confirmButton.disabled = false;
  renderOptions(state.session[state.currentIndex]);
  saveProgress();
}

function confirmAnswer() {
  if (state.selectedIndex === null || state.confirmed) {
    return;
  }

  const question = state.session[state.currentIndex];
  const selectedOption = question.shuffledOptions[state.selectedIndex];
  const correctOption = question.shuffledOptions.find((option) => option.isCorrect);
  const isCorrect = Boolean(selectedOption?.isCorrect);

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
  saveProgress();
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

      const detail = document.createElement("p");
      detail.textContent = `${values.correct} de ${values.total} corretas`;

      const ratio = document.createElement("span");
      ratio.textContent = `${Math.round((values.correct / values.total) * 100)}% de aproveitamento`;

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
    text.textContent = "Você fechou a rodada sem erros.";

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

function getResultMessage(correct, total) {
  if (correct === total) {
    return {
      title: "Parabéns",
      text: "Você acertou tudo. Pode ir para a prova com bastante confiança."
    };
  }

  if (correct >= 20) {
    return {
      title: "Dá pra melhorar",
      text: "Você já tem uma base boa, mas ainda vale revisar os pontos em que errou."
    };
  }

  if (correct >= 10) {
    return {
      title: "Precisa melhorar",
      text: "Você já acertou uma parte, mas ainda precisa reforçar bem o conteúdo."
    };
  }

  return {
    title: "Revise mais",
    text: "Seu resultado ficou abaixo do ideal. Vale revisar com calma e refazer o quiz."
  };
}

function finishQuiz() {
  clearInterval(state.timerId);
  clearProgress();

  const total = state.answers.length;
  const correct = state.answers.filter((answer) => answer.isCorrect).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const elapsed = state.startedAt ? formatElapsed(Date.now() - state.startedAt) : "00:00";
  const resultMessage = getResultMessage(correct, total);

  elements.resultTitle.textContent = resultMessage.title;
  elements.resultSummary.textContent = `${correct} de ${total} corretas em ${elapsed}.`;
  elements.resultScore.textContent = `${percent}%`;
  elements.resultCorrectCount.textContent = String(correct);
  elements.resultWrongCount.textContent = String(wrong);
  elements.resultMessageTitle.textContent = resultMessage.title;
  elements.resultMessageText.textContent = resultMessage.text;

  renderBreakdown();
  renderMistakes();
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
  state.selectedIndex = null;
  state.confirmed = false;
  renderQuestion();
}

function resetSessionState() {
  state.answers = [];
  state.currentIndex = 0;
  state.selectedIndex = null;
  state.confirmed = false;
  startTimer(0);
}

function startQuiz() {
  state.session = shuffle(questionBank).map(prepareQuestion);
  resetSessionState();
  toggleShell("question");
  renderQuestion();
  elements.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restoreProgress(progress) {
  if (!progress || !Array.isArray(progress.session) || !progress.session.length) {
    return false;
  }

  if ((progress.currentIndex ?? 0) >= progress.session.length) {
    clearProgress();
    return false;
  }

  state.session = progress.session;
  state.answers = Array.isArray(progress.answers) ? progress.answers : [];
  state.currentIndex = Number.isInteger(progress.currentIndex) ? progress.currentIndex : 0;
  state.selectedIndex = typeof progress.selectedIndex === "number" ? progress.selectedIndex : null;
  state.confirmed = Boolean(progress.confirmed);
  startTimer(typeof progress.elapsedMs === "number" ? progress.elapsedMs : 0);
  toggleShell("question");
  renderQuestion();
  return true;
}

function handleOptionClick(event) {
  const option = event.target.closest(".option");
  if (!option) {
    return;
  }

  selectOption(Number(option.dataset.index));
}

function bootstrap() {
  const restored = restoreProgress(readProgress());
  if (!restored) {
    toggleShell("empty");
    updateProgress();
  }

  elements.optionsGrid.addEventListener("click", handleOptionClick);
  elements.confirmButton.addEventListener("click", confirmAnswer);
  elements.nextButton.addEventListener("click", nextQuestion);
  elements.startQuizButton.addEventListener("click", startQuiz);
  elements.restartButton.addEventListener("click", startQuiz);
}

bootstrap();
