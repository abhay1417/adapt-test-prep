// =====================================================================
//  DUNES AVIATION ADAPT PREP HUB — Main App Engine
//  Adaptive Quiz Logic, Navigation, Progress Tracking
// =====================================================================

// ======================== STORAGE HELPERS ========================
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem('dunesProgress') || '{}');
  } catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem('dunesProgress', JSON.stringify(data));
}

function addActivity(text, type) {
  const progress = getProgress();
  if (!progress.activities) progress.activities = [];
  progress.activities.unshift({
    text,
    type,
    time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
  });
  if (progress.activities.length > 20) progress.activities.pop();
  saveProgress(progress);
  renderActivities();
}

// ======================== NAVIGATION ========================
function goToSection(sectionId) {
  document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active-section'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active-section');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.querySelectorAll(`.nav-link[data-section="${sectionId}"]`).forEach(l => l.classList.add('active'));

  // Initialize sections on first visit
  if (sectionId === 'study-plan') showWeek(1);
  if (sectionId === 'interview-prep') showPITab('common-questions');
  if (sectionId === 'checklist') renderChecklist();
  if (sectionId === 'dashboard') updateDashboard();
  if (sectionId === 'quiz') showModuleSelector();
}

// Nav link click handlers
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sec = link.getAttribute('data-section');
    goToSection(sec);

    // Close mobile menu
    document.getElementById('nav-links').classList.remove('open');
  });
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

// ======================== DASHBOARD UPDATE ========================
function updateDashboard() {
  const progress = getProgress();
  const modules = ['math', 'physics', 'english', 'cognitive', 'aviation'];

  let totalPct = 0;
  let moduleCount = 0;

  modules.forEach(module => {
    const scores = progress.scores?.[module] || [];
    if (scores.length > 0) {
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      const pct = Math.round(avg);
      const bar = document.getElementById(`prog-${module}`);
      const label = document.getElementById(`prog-${module}-pct`);
      if (bar) bar.style.width = `${pct}%`;
      if (label) label.textContent = `${pct}%`;
      totalPct += pct;
      moduleCount++;
    }
  });

  // Personality progress from checklist
  const checkedPi = (progress.checklist || []).filter(id =>
    ['cl25','cl26','cl27','cl28','cl29','cl30'].includes(id)).length;
  const piPct = Math.round((checkedPi / 6) * 100);
  const piBar = document.getElementById('prog-personality');
  const piLabel = document.getElementById('prog-personality-pct');
  if (piBar) piBar.style.width = `${piPct}%`;
  if (piLabel) piLabel.textContent = `${piPct}%`;
  if (piPct > 0) { totalPct += piPct; moduleCount++; }

  // Overall readiness
  const checklistTotal = 35;
  const checklistDone = (progress.checklist || []).length;
  const checklistPct = Math.round((checklistDone / checklistTotal) * 100);
  const studyDaysDone = (progress.studyDays || []).length;
  const studyPct = Math.round((studyDaysDone / 30) * 100);

  // Weighted readiness
  const overallReadiness = Math.round(
    (totalPct / Math.max(moduleCount, 1)) * 0.6 +
    checklistPct * 0.2 +
    studyPct * 0.2
  );

  const readinessFill = document.getElementById('readiness-fill');
  const readinessLabel = document.getElementById('readiness-label');
  if (readinessFill) readinessFill.style.width = `${overallReadiness}%`;
  if (readinessLabel) {
    let label;
    if (overallReadiness < 20) label = 'Beginner — Start your preparation journey!';
    else if (overallReadiness < 40) label = 'Cadet — Good start, keep pushing!';
    else if (overallReadiness < 60) label = 'Trainee — You\'re making solid progress!';
    else if (overallReadiness < 75) label = 'Pilot Ready — Almost there, sharpen your weak areas!';
    else if (overallReadiness < 90) label = 'Selection Ready — Excellent! Fine-tune for the actual test!';
    else label = '✈ Elite Ready — Outstanding! You\'re prepared to ace the ADAPT test!';
    readinessLabel.textContent = `${overallReadiness}% — ${label}`;
  }

  // Hero instruments update
  const overallScore = moduleCount > 0 ? Math.round(totalPct / moduleCount) : 0;
  const scoreDisplay = document.getElementById('overall-score-display');
  const levelDisplay = document.getElementById('level-display');
  const streakDisplay = document.getElementById('streak-display');

  if (scoreDisplay) scoreDisplay.textContent = overallScore || '—';
  if (levelDisplay) {
    if (overallScore < 40) levelDisplay.textContent = 'Cadet';
    else if (overallScore < 60) levelDisplay.textContent = 'Trainee';
    else if (overallScore < 80) levelDisplay.textContent = 'Officer';
    else levelDisplay.textContent = 'Captain';
  }
  if (streakDisplay) streakDisplay.textContent = progress.streak || 0;

  renderActivities();
  updateStudyPlanStats();
}

function renderActivities() {
  const progress = getProgress();
  const feed = document.getElementById('activity-feed');
  if (!feed) return;

  const activities = progress.activities || [];
  if (activities.length === 0) {
    feed.innerHTML = `<div class="activity-empty"><i class="fas fa-info-circle"></i> No activity yet. Start a practice module above!</div>`;
    return;
  }

  feed.innerHTML = activities.slice(0, 8).map(act => `
    <div class="activity-item">
      <div class="activity-dot ${act.type}"></div>
      <span class="activity-text">${act.text}</span>
      <span class="activity-time">${act.date}, ${act.time}</span>
    </div>
  `).join('');
}

// ======================== QUIZ ENGINE ========================
let currentQuiz = {
  module: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],
  difficulty: 2,
  timerInterval: null,
  timeLeft: 0,
  isMock: false
};

const MODULE_NAMES = {
  math: 'Mathematics',
  physics: 'Physics',
  english: 'English',
  cognitive: 'Cognitive',
  aviation: 'Aviation Knowledge'
};

const QUESTIONS_PER_SESSION = 10;
const MOCK_QUESTIONS = 30;
const MOCK_TIME = 40 * 60; // 40 minutes
const REGULAR_TIME = 15 * 60; // 15 minutes

function showModuleSelector() {
  document.getElementById('module-selector').style.display = 'block';
  document.getElementById('quiz-interface').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'none';
}

function startModule(moduleName) {
  goToSection('quiz');
  currentQuiz.module = moduleName;
  currentQuiz.isMock = false;
  currentQuiz.difficulty = 2;

  const allQ = QUESTION_BANK[moduleName] || [];
  currentQuiz.questions = selectAdaptiveQuestions(allQ, QUESTIONS_PER_SESSION, 2);
  initQuiz();
}

function startMockTest() {
  goToSection('quiz');
  currentQuiz.module = 'mock';
  currentQuiz.isMock = true;

  // 6 questions from each module (5 modules × 6 = 30)
  const allModules = ['math', 'physics', 'english', 'cognitive', 'aviation'];
  let mockQs = [];
  allModules.forEach(m => {
    const pool = QUESTION_BANK[m] || [];
    const shuffled = shuffleArray([...pool]);
    mockQs = mockQs.concat(shuffled.slice(0, 6));
  });
  currentQuiz.questions = shuffleArray(mockQs);
  initQuiz();
}

function selectAdaptiveQuestions(pool, count, startDifficulty) {
  // Weight questions by difficulty proximity to current level
  const byDiff = { 1: [], 2: [], 3: [] };
  pool.forEach(q => byDiff[q.difficulty].push(q));

  let selected = [];
  // Mix: ~30% easy, ~50% medium, ~20% hard for start
  const targets = {1: Math.ceil(count * 0.3), 2: Math.ceil(count * 0.5), 3: Math.ceil(count * 0.2)};

  [1, 2, 3].forEach(diff => {
    const shuffled = shuffleArray([...byDiff[diff]]);
    selected = selected.concat(shuffled.slice(0, targets[diff]));
  });

  // Fill remaining if needed
  if (selected.length < count) {
    const remaining = shuffleArray([...pool]).filter(q => !selected.find(s => s.id === q.id));
    selected = selected.concat(remaining.slice(0, count - selected.length));
  }

  return shuffleArray(selected).slice(0, count);
}

function initQuiz() {
  currentQuiz.currentIndex = 0;
  currentQuiz.score = 0;
  currentQuiz.answers = [];

  document.getElementById('module-selector').style.display = 'none';
  document.getElementById('quiz-interface').style.display = 'block';
  document.getElementById('quiz-results').style.display = 'none';

  // Set module badge
  const moduleBadge = document.getElementById('quiz-module-name');
  moduleBadge.textContent = currentQuiz.isMock ? '🎯 Full Mock ADAPT Test' : `📚 ${MODULE_NAMES[currentQuiz.module] || currentQuiz.module}`;

  // Total
  document.getElementById('q-total').textContent = currentQuiz.questions.length;

  // Start timer
  const timeLimit = currentQuiz.isMock ? MOCK_TIME : REGULAR_TIME;
  startTimer(timeLimit);

  renderQuestion();
  updateQuizProgress();
}

function renderQuestion() {
  const q = currentQuiz.questions[currentQuiz.currentIndex];
  if (!q) { endQuiz(); return; }

  document.getElementById('q-current').textContent = currentQuiz.currentIndex + 1;
  document.getElementById('q-category').textContent = q.category || '';
  document.getElementById('q-text').innerHTML = q.text;

  // Difficulty badge
  const diffBadge = document.getElementById('quiz-difficulty-badge');
  diffBadge.textContent = DIFFICULTY_NAMES[q.difficulty] || 'Medium';
  diffBadge.className = `difficulty-badge difficulty-${['','easy','medium','hard'][q.difficulty]}`;

  // Options
  const optionsGrid = document.getElementById('options-grid');
  const letters = ['A', 'B', 'C', 'D'];
  optionsGrid.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="selectOption(${i})" id="opt-${i}">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  // Reset feedback
  document.getElementById('answer-feedback').style.display = 'none';
  document.getElementById('answer-feedback').textContent = '';
  document.getElementById('btn-next').disabled = true;

  updateQuizProgress();
}

function selectOption(optionIndex) {
  // Only allow one selection
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => {
    if (b.classList.contains('selected') || b.classList.contains('correct') || b.classList.contains('wrong')) return;
  });

  // Check if already answered
  if (document.getElementById('btn-next').disabled === false) return;

  const q = currentQuiz.questions[currentQuiz.currentIndex];
  const isCorrect = optionIndex === q.correct;

  currentQuiz.answers.push({ questionId: q.id, selected: optionIndex, correct: isCorrect });

  if (isCorrect) {
    currentQuiz.score++;
    btns[optionIndex].classList.add('correct');
  } else {
    btns[optionIndex].classList.add('wrong');
    btns[q.correct].classList.add('correct');
  }

  // Disable all buttons
  btns.forEach(b => b.disabled = true);

  // Show feedback
  const feedback = document.getElementById('answer-feedback');
  feedback.style.display = 'block';
  feedback.className = `answer-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong>
    <br/>${q.explanation || ''}
  `;

  // Update live score
  document.getElementById('quiz-live-score').textContent = currentQuiz.score;

  // Adaptive difficulty
  adjustDifficulty(isCorrect);

  // Enable next
  document.getElementById('btn-next').disabled = false;
}

function adjustDifficulty(wasCorrect) {
  const recent = currentQuiz.answers.slice(-3);
  const recentCorrect = recent.filter(a => a.correct).length;

  if (wasCorrect && recentCorrect === 3 && currentQuiz.difficulty < 3) {
    currentQuiz.difficulty = Math.min(3, currentQuiz.difficulty + 1);
  } else if (!wasCorrect && currentQuiz.answers.slice(-2).every(a => !a.correct) && currentQuiz.difficulty > 1) {
    currentQuiz.difficulty = Math.max(1, currentQuiz.difficulty - 1);
  }
}

function nextQuestion() {
  currentQuiz.currentIndex++;
  if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function updateQuizProgress() {
  const total = currentQuiz.questions.length;
  const current = currentQuiz.currentIndex + 1;
  const pct = Math.round((current / total) * 100);
  document.getElementById('quiz-progress-bar').style.width = `${pct}%`;
}

function endQuiz() {
  clearInterval(currentQuiz.timerInterval);

  const total = currentQuiz.questions.length;
  const score = currentQuiz.score;
  const pct = Math.round((score / total) * 100);

  // Show results
  document.getElementById('quiz-interface').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'block';

  // Emoji based on score
  let emoji = '😔';
  if (pct >= 90) emoji = '🏆';
  else if (pct >= 75) emoji = '🎉';
  else if (pct >= 60) emoji = '👍';
  else if (pct >= 40) emoji = '📚';
  document.getElementById('results-icon').textContent = emoji;

  document.getElementById('results-title').textContent =
    pct >= 75 ? 'Excellent Work! ✈' :
    pct >= 50 ? 'Good Effort — Keep Practicing!' :
    'Keep Studying — You\'ll Get There!';

  document.getElementById('results-big-score').textContent = score;
  document.getElementById('results-total').textContent = total;
  document.getElementById('ring-pct').textContent = `${pct}%`;

  // Animate ring
  const offset = 314 - (314 * pct / 100);
  const ring = document.getElementById('results-ring');
  if (ring) {
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = pct >= 75 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444';
  }

  // Analysis
  const analysis = getResultsAnalysis(pct, currentQuiz.module);
  document.getElementById('results-analysis').innerHTML = analysis;

  // Save progress
  saveQuizScore(currentQuiz.module, pct);
  addActivity(`Completed ${MODULE_NAMES[currentQuiz.module] || 'Mock Test'}: ${score}/${total} (${pct}%)`, 'quiz');
  updateDashboard();
}

function getResultsAnalysis(pct, module) {
  let advice;
  if (pct >= 90) {
    advice = `🌟 <strong>Outstanding!</strong> You're ADAPT-test ready for ${MODULE_NAMES[module] || 'this module'}. Consider moving to harder practice or mock tests.`;
  } else if (pct >= 75) {
    advice = `✅ <strong>Strong performance!</strong> Review the questions you got wrong and you'll be fully ready. Practice the trickier concepts once more.`;
  } else if (pct >= 55) {
    advice = `📘 <strong>Moderate score.</strong> You have a solid foundation but need to focus on the harder concepts in this module. Retry with specific focus areas.`;
  } else {
    advice = `🎯 <strong>Needs more practice.</strong> Don't worry — review the explanations for each wrong answer and re-study the relevant theory. Consistency is key!`;
  }

  const moduleAdvice = {
    math: "Focus on: trigonometry (sin/cos/tan), speed-distance-time, and percentage/ratio problems.",
    physics: "Focus on: Bernoulli's principle, Newton's laws, gas laws, and the ISA atmosphere.",
    english: "Focus on: aviation phraseology, grammar tenses, and reading aviation documents.",
    cognitive: "Focus on: number series speed, spatial heading problems, and logical deductions.",
    aviation: "Focus on: DGCA requirements, airspace classification, and meteorology.",
    mock: "Review your weakest module and retake that module's dedicated practice test."
  };

  return `
    <p>${advice}</p>
    <br/>
    <p><strong>Study Focus:</strong> ${moduleAdvice[module] || moduleAdvice.mock}</p>
  `;
}

function saveQuizScore(module, pct) {
  const progress = getProgress();
  if (!progress.scores) progress.scores = {};
  if (!progress.scores[module]) progress.scores[module] = [];
  progress.scores[module].push(pct);
  // Keep last 5 scores
  if (progress.scores[module].length > 5) progress.scores[module].shift();
  saveProgress(progress);
}

function retryQuiz() {
  if (currentQuiz.isMock) {
    startMockTest();
  } else {
    startModule(currentQuiz.module);
  }
}

// ======================== TIMER ========================
function startTimer(seconds) {
  currentQuiz.timeLeft = seconds;
  clearInterval(currentQuiz.timerInterval);

  const timerEl = document.getElementById('quiz-timer');
  const wrapEl = document.getElementById('quiz-timer-wrap');

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  }

  if (timerEl) timerEl.textContent = formatTime(seconds);

  currentQuiz.timerInterval = setInterval(() => {
    currentQuiz.timeLeft--;
    if (timerEl) {
      timerEl.textContent = formatTime(currentQuiz.timeLeft);
      if (currentQuiz.timeLeft <= 60) {
        timerEl.classList.add('urgent');
      }
    }
    if (currentQuiz.timeLeft <= 0) {
      clearInterval(currentQuiz.timerInterval);
      endQuiz();
    }
  }, 1000);
}

// ======================== PI PREP RENDER ========================
function showPITab(tabName) {
  document.querySelectorAll('.pi-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll(`.pi-tab`).forEach(t => {
    if (t.textContent.trim().toLowerCase().includes(tabName.split('-')[0].toLowerCase()) ||
        t.getAttribute('onclick')?.includes(tabName)) {
      t.classList.add('active');
    }
  });

  // Set active tab properly
  document.querySelectorAll('.pi-tab').forEach(t => {
    const fn = t.getAttribute('onclick');
    if (fn && fn.includes(tabName)) t.classList.add('active');
    else t.classList.remove('active');
  });

  const container = document.getElementById('pi-content');
  const data = PI_DATA[tabName];
  if (!data) return;

  if (tabName === 'common-questions' || tabName === 'motivation') {
    container.innerHTML = `<h3 style="margin-bottom:1.5rem;color:var(--primary-dark);font-family:'Poppins',sans-serif;">${data.title}</h3>` +
      data.items.map((item, i) => `
        <div class="pi-question-card">
          <div class="pi-question">${item.question}</div>
          <div class="pi-tip">${item.tip}</div>
          <button class="btn-reveal" onclick="togglePIAnswer('pi-ans-${i}')">
            <i class="fas fa-eye"></i> Show Model Answer
          </button>
          <div class="pi-answer" id="pi-ans-${i}">${item.model_answer}</div>
        </div>
      `).join('');

  } else if (tabName === 'aviation-gk') {
    container.innerHTML = `<h3 style="margin-bottom:1.5rem;color:var(--primary-dark);font-family:'Poppins',sans-serif;">${data.title}</h3>` +
      data.items.map((item, i) => `
        <div class="avi-gk-card" onclick="toggleGK('gk-${i}')">
          <div class="avi-gk-header">
            <div class="avi-gk-q">${item.question}</div>
            <span class="avi-gk-cat">${item.category}</span>
            <i class="fas fa-chevron-down avi-gk-toggle" id="gk-icon-${i}"></i>
          </div>
          <div class="avi-gk-answer" id="gk-${i}">${item.answer}</div>
        </div>
      `).join('');

  } else if (tabName === 'sjt') {
    container.innerHTML = `
      <h3 style="margin-bottom:0.5rem;color:var(--primary-dark);font-family:'Poppins',sans-serif;">${data.title}</h3>
      <p style="color:var(--text-light);font-size:0.875rem;margin-bottom:1.5rem;">Choose the BEST response for each aviation scenario below. Think about CRM, safety culture, and professional standards.</p>
    ` + data.items.map((item, i) => `
        <div class="sjt-card">
          <div class="sjt-scenario">📋 ${item.scenario}</div>
          ${item.options.map((opt, j) => `
            <div class="sjt-option" id="sjt-${i}-${j}" onclick="selectSJT(${i}, ${j}, ${item.best})">
              <span class="sjt-option-label">${String.fromCharCode(65+j)}</span>
              <span>${opt.text}</span>
            </div>
          `).join('')}
          <div class="sjt-explanation" id="sjt-exp-${i}">
            <strong>✅ Best Answer: Option ${String.fromCharCode(65+item.best)}</strong><br/>
            ${item.explanation}
          </div>
        </div>
      `).join('');

  } else if (tabName === 'tips') {
    container.innerHTML = `
      <h3 style="margin-bottom:0.5rem;color:var(--primary-dark);font-family:'Poppins',sans-serif;">${data.title}</h3>
      <p style="color:var(--text-light);font-size:0.875rem;margin-bottom:1.5rem;">Key strategies to ace your Dunes Aviation personal interview and ADAPT assessment</p>
      <div class="tips-grid">
        ${data.tips.map(tip => `
          <div class="tip-card">
            <div class="tip-icon"><i class="${tip.icon}"></i></div>
            <h4>${tip.title}</h4>
            <p>${tip.content}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function togglePIAnswer(id) {
  const el = document.getElementById(id);
  el.classList.toggle('show');
  // Update button text
  const btn = el.previousElementSibling;
  if (el.classList.contains('show')) {
    btn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Model Answer';
  } else {
    btn.innerHTML = '<i class="fas fa-eye"></i> Show Model Answer';
  }
}

function toggleGK(id) {
  const el = document.getElementById(id);
  const icon = document.getElementById('gk-icon-' + id.replace('gk-',''));
  el.classList.toggle('show');
  if (icon) icon.style.transform = el.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0)';
}

function selectSJT(scenarioIdx, optionIdx, bestIdx) {
  // Remove previous selections for this scenario
  for (let j = 0; j < 4; j++) {
    const el = document.getElementById(`sjt-${scenarioIdx}-${j}`);
    if (el) el.classList.remove('selected', 'best-selected', 'wrong-selected');
  }

  const selected = document.getElementById(`sjt-${scenarioIdx}-${optionIdx}`);
  if (!selected) return;

  if (optionIdx === bestIdx) {
    selected.classList.add('best-selected');
  } else {
    selected.classList.add('wrong-selected');
    const bestEl = document.getElementById(`sjt-${scenarioIdx}-${bestIdx}`);
    if (bestEl) bestEl.classList.add('best-selected');
  }

  // Show explanation
  const exp = document.getElementById(`sjt-exp-${scenarioIdx}`);
  if (exp) exp.classList.add('show');

  // Disable further clicks
  for (let j = 0; j < 4; j++) {
    const el = document.getElementById(`sjt-${scenarioIdx}-${j}`);
    if (el) el.style.pointerEvents = 'none';
  }
}

// ======================== UTILITIES ========================
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ======================== INITIALIZATION ========================
document.addEventListener('DOMContentLoaded', () => {
  // Set initial active section
  updateDashboard();

  // Initialize streak logic
  const progress = getProgress();
  const today = new Date().toDateString();
  if (progress.lastVisit !== today) {
    if (progress.lastVisit === new Date(Date.now() - 86400000).toDateString()) {
      progress.streak = (progress.streak || 0) + 1;
    } else if (!progress.lastVisit) {
      progress.streak = 1;
    } else {
      progress.streak = 1; // Reset if not consecutive
    }
    progress.lastVisit = today;
    saveProgress(progress);
  }

  // Show active section from URL hash if present
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    goToSection(hash);
  }
});
