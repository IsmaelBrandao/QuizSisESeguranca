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
  return [...new Set(content.questionBank.map((question) => question.topic))];
}

function renderStats() {
  const stats = readStats();
  elements.deckCount.textContent = String(content.decks);
  elements.questionCountBadge.textContent = String(content.questionBank.length);
  elements.topicCount.textContent = String(getTopics().length);
  elements.bestScoreBadge.textContent = stats.bestPercent ? `${stats.bestPercent}%` : "--";
}

function renderTopicFilter() {
  const topics = getTopics();
  const topicCountMap = content.questionBank.reduce((accumulator, question) => {
    accumulator[question.topic] = (accumulator[question.topic] || 0) + 1;
    return accumulator;
  }, {});

  elements.topicFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `Todos os temas (${content.questionBank.length})`;
  elements.topicFilter.appendChild(allOption);

  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = `${topic} (${topicCountMap[topic]})`;
    elements.topicFilter.appendChild(option);
  });

  const fullOption = [...elements.questionCountSelect.options].find((option) => option.value === "9999");
  if (fullOption) {
    fullOption.textContent = `Banco completo (${content.questionBank.length})`;
  }
}

function renderPulseList() {
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
  let pool = [...content.questionBank];

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
    title.textContent = "Nenhum erro nesta rodada";
    const text = document.createElement("p");
    text.textContent = "Use uma nova rodada para reembaralhar o banco e testar retenção.";
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
  renderStats();
}

function finishQuiz() {
  clearInterval(state.timerId);

  const total = state.answers.length;
  const correct = state.answers.filter((answer) => answer.isCorrect).length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  const elapsed = state.startedAt ? formatElapsed(Date.now() - state.startedAt) : "00:00";

  state.lastMistakeIds = state.answers.filter((answer) => !answer.isCorrect).map((answer) => answer.id);

  elements.resultTitle.textContent =
    percent >= 85 ? "Pronto para a prova" : percent >= 70 ? "Boa base, ajuste os pontos fracos" : "Ainda vale revisar os conceitos-chave";
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
  renderPulseList();
  renderGuide();
  renderRadar();
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

  startQuiz();
}

bootstrap();
