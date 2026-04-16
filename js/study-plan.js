// =====================================================================
//  DUNES AVIATION ADAPT PREP HUB — 30-Day Study Plan
// =====================================================================

const STUDY_PLAN = {
  1: [
    { day: 1, theme: "📐 Maths Foundation", subjects: ["Basic Algebra & Equations", "Percentage, Ratio, Proportion"], tasks: ["Complete 10 Maths Easy questions", "Revise percentage formula"], time: "2 hrs" },
    { day: 2, theme: "⚛️ Physics Foundations", subjects: ["Newton's 3 Laws of Motion", "Basic Forces: Lift, Weight, Thrust, Drag"], tasks: ["Complete 10 Physics Easy questions", "Draw force diagram for aircraft"], time: "2.5 hrs" },
    { day: 3, theme: "✈️ Aviation Intro", subjects: ["What is DGCA?", "PPL vs CPL vs ATPL", "Dunes Academy program overview"], tasks: ["Read Aviation GK cards", "Complete 5 Aviation questions"], time: "2 hrs" },
    { day: 4, theme: "🔤 English Basics", subjects: ["Aviation vocabulary (MAYDAY, WILCO, ROGER)", "Phonetic alphabet A-Z"], tasks: ["Complete 8 English Easy questions", "Learn 10 aviation vocabulary terms"], time: "1.5 hrs" },
    { day: 5, theme: "🧠 Cognitive Warmup", subjects: ["Number series basics", "Simple pattern recognition"], tasks: ["Complete 10 Cognitive Easy questions", "Practice 5-minute mental maths"], time: "2 hrs" },
    { day: 6, theme: "📐 Maths: Speed, Distance, Time", subjects: ["Speed-Distance-Time problems", "Aviation-context word problems"], tasks: ["Solve 15 Speed-Distance-Time problems", "Complete Medium Maths quiz"], time: "2.5 hrs" },
    { day: 7, theme: "📊 Review Week 1", subjects: ["Review all mistakes", "Full 10-question mini-mock"], tasks: ["Redo all incorrectly answered questions", "Take mini mock test", "Update progress in dashboard"], time: "3 hrs" },
  ],
  2: [
    { day: 8, theme: "🌡️ Physics: Aerodynamics", subjects: ["Bernoulli's Principle", "Lift equation: L = ½ρv²SCL", "Stall and critical angle of attack"], tasks: ["Complete 10 Physics Medium questions", "Draw and explain Bernoulli on aerofoil"], time: "2.5 hrs" },
    { day: 9, theme: "📐 Maths: Trigonometry", subjects: ["sin, cos, tan basics", "Climb angle calculations", "Compass bearing problems"], tasks: ["Solve 15 trigonometry problems", "Complete Medium Maths quiz"], time: "3 hrs" },
    { day: 10, theme: "🌦️ Meteorology Basics", subjects: ["ISA standard atmosphere", "Cloud types (CB, Stratus, Cirrus)", "METAR and TAF basics"], tasks: ["Read Aviation GK - Meteorology cards", "Complete 8 Aviation Medium questions"], time: "2 hrs" },
    { day: 11, theme: "🔤 English: Comprehension", subjects: ["Reading METAR weather reports", "ATIS broadcast interpretation", "Grammar: passive voice"], tasks: ["Complete 10 English Medium questions", "Decode 3 sample METARs"], time: "2 hrs" },
    { day: 12, theme: "🧠 Cognitive: Verbal Reasoning", subjects: ["Analogies and relationships", "Logical deduction", "Aviation-context reasoning"], tasks: ["Complete 12 Cognitive Medium questions", "10-minute daily crossword puzzle"], time: "2.5 hrs" },
    { day: 13, theme: "✈️ Air Navigation Basics", subjects: ["Magnetic variation (Variation East, Magnetic Least)", "QNH, QFE, QNE", "VFR vs IFR"], tasks: ["Complete 10 Aviation Medium questions", "Practice compass bearing calculations"], time: "2.5 hrs" },
    { day: 14, theme: "📊 Review Week 2 + Mock", subjects: ["Full 20-question mock test", "Performance analysis"], tasks: ["Take full 20Q mock test", "Review all wrong answers with explanations", "Adjust study focus for Week 3"], time: "3 hrs" },
  ],
  3: [
    { day: 15, theme: "⚛️ Physics: Thermodynamics", subjects: ["Gas laws (Boyle's, Charles's)", "Brayton cycle (jet engine)", "ISA temperature lapse rate"], tasks: ["Complete 12 Physics Hard questions", "Explain Brayton cycle in own words"], time: "3 hrs" },
    { day: 16, theme: "📐 Maths: Vectors & Navigation", subjects: ["Wind velocity vectors", "Ground speed calculations", "Coordinate geometry distances"], tasks: ["Solve 15 vector problems", "Complete Hard Maths quiz section"], time: "3 hrs" },
    { day: 17, theme: "🧠 Cognitive: Spatial Reasoning", subjects: ["3D rotation visualization", "Map reading exercises", "Heading and bearing conversions"], tasks: ["Complete 12 Cognitive Hard questions", "Practice heading calculation exercises"], time: "2.5 hrs" },
    { day: 18, theme: "🎙️ PI Prep: Motivation Questions", subjects: ["Why aviation?", "Why Dunes?", "STAR method for behavioral questions"], tasks: ["Read all Motivation PI cards", "Practice 3 answers out loud (record yourself)"], time: "2 hrs" },
    { day: 19, theme: "✈️ Air Regulations Deep Dive", subjects: ["Airspace classification A-G", "Class 2 and Class 1 medical requirements", "CPL minimum flying hours"], tasks: ["Complete 12 Aviation Hard questions", "Read DGCA CPL requirements summary"], time: "2.5 hrs" },
    { day: 20, theme: "🔤 English: ICAO Level 4", subjects: ["Formal English for interviews", "Aviation phraseology", "Complex tense structures"], tasks: ["Complete 12 English Hard questions", "Write a 200-word essay: 'Why I want to be a pilot'"], time: "2.5 hrs" },
    { day: 21, theme: "📊 Review Week 3 + Full Mock", subjects: ["Full 30-question ADAPT Mock Test", "Detailed performance review"], tasks: ["Take Full 30Q Timed Mock Test", "Identify weakest module", "Double down on weak area"], time: "3.5 hrs" },
  ],
  4: [
    { day: 22, theme: "🎙️ PI Prep: Common Questions", subjects: ["Self-introduction", "Strengths & Weaknesses", "5-year plan"], tasks: ["Practice full PI Q&A session", "Record and review your answers"], time: "2 hrs" },
    { day: 23, theme: "⚖️ Situational Judgement Prep", subjects: ["CRM (Crew Resource Management)", "Safety culture scenarios", "Decision-making under pressure"], tasks: ["Complete all 4 SJT scenarios", "Understand the 'best' reasoning for each"], time: "2 hrs" },
    { day: 24, theme: "🔄 Weakest Module Day", subjects: ["Focus entirely on your weakest subject"], tasks: ["Complete full module test for weakest subject", "Re-read explanations for all wrong answers"], time: "3 hrs" },
    { day: 25, theme: "📐⚛️ Maths & Physics Revision", subjects: ["Quick revision: all key formulas", "Maths: Trigonometry, Vectors", "Physics: Lift equation, Mach number, Gas laws"], tasks: ["Create a formula cheat-sheet (for memory)", "Complete 15 mixed questions from both subjects"], time: "3 hrs" },
    { day: 26, theme: "✈️🔤 Aviation GK + English Final", subjects: ["Complete Aviation GK cards review", "All English vocabulary and phraseology"], tasks: ["Re-read all Aviation GK cards", "Complete English practice test", "Test yourself on phonetic alphabet"], time: "2.5 hrs" },
    { day: 27, theme: "🧠 Cognitive Blitz", subjects: ["Full cognitive reasoning workout", "Number series speed challenge", "Spatial + logical reasoning"], tasks: ["Complete 20 Cognitive questions in 20 minutes", "Practice 5-minute reaction games"], time: "2.5 hrs" },
    { day: 28, theme: "🎙️ Final PI Simulation", subjects: ["Mock PI with all question types", "Aviation GK questions", "Situational judgement"], tasks: ["Full practice PI session (30 minutes)", "Answer all PI tips checklist items", "Review Dunes Aviation website for latest info"], time: "3 hrs" },
    { day: 29, theme: "📋 Checklist Review", subjects: ["Documents preparation", "Medical check confirmation", "Application status verification"], tasks: ["Complete all Admission Checklist items", "Prepare document folder", "Confirm Class 2 medical status"], time: "2 hrs" },
    { day: 30, theme: "🚀 Final Full ADAPT Mock", subjects: ["Complete timed full mock test", "Final performance analysis", "Mental preparation for actual test"], tasks: ["Take Full 30Q Timed Mock Test", "Review score and readiness meter", "Rest and prepare mentally for the real assessment"], time: "4 hrs" },
  ]
};

function renderStudyPlan(week) {
  const days = STUDY_PLAN[week];
  const container = document.getElementById('study-plan-content');
  const progress = getProgress();

  let html = `<div class="study-days-grid">`;
  days.forEach(day => {
    const isCompleted = progress.studyDays && progress.studyDays.includes(day.day);
    const isToday = !isCompleted && day.day === getNextIncompleteDay(progress.studyDays || []);
    html += `
      <div class="study-day-card ${isCompleted ? 'completed' : ''} ${isToday ? 'today' : ''}">
        <div class="study-day-header">
          <div class="day-number ${isCompleted ? 'done' : ''}">
            ${isCompleted ? '<i class="fas fa-check-circle"></i>' : `Day ${day.day}`}
          </div>
          <div class="day-time"><i class="fas fa-clock"></i> ${day.time}</div>
        </div>
        <h4 class="day-theme">${day.theme}</h4>
        <div class="day-subjects">
          ${day.subjects.map(s => `<span class="subject-tag">${s}</span>`).join('')}
        </div>
        <div class="day-tasks">
          <strong>Today's Tasks:</strong>
          <ul>
            ${day.tasks.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <div class="day-actions">
          ${isCompleted
            ? `<button class="btn-day-done" onclick="undayComplete(${day.day})"><i class="fas fa-undo"></i> Undo</button>`
            : `<button class="btn-day-start ${isToday ? 'btn-today' : ''}" onclick="markDayComplete(${day.day})">
                ${isToday ? '✅ Complete Day' : '<i class="fas fa-check"></i> Mark Done'}
               </button>`
          }
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function getNextIncompleteDay(completedDays) {
  for (let i = 1; i <= 30; i++) {
    if (!completedDays.includes(i)) return i;
  }
  return null;
}

function markDayComplete(dayNum) {
  const progress = getProgress();
  if (!progress.studyDays) progress.studyDays = [];
  if (!progress.studyDays.includes(dayNum)) {
    progress.studyDays.push(dayNum);
    saveProgress(progress);
    addActivity(`Completed Study Day ${dayNum} ✅`, 'study');
    updateDashboard();
  }
  const activeWeek = parseInt(document.querySelector('.week-tab.active').textContent.replace('Week ', ''));
  showWeek(activeWeek);
  updateStudyPlanStats();
}

function undayComplete(dayNum) {
  const progress = getProgress();
  if (progress.studyDays) {
    progress.studyDays = progress.studyDays.filter(d => d !== dayNum);
    saveProgress(progress);
    updateDashboard();
  }
  const activeWeek = parseInt(document.querySelector('.week-tab.active').textContent.replace('Week ', ''));
  showWeek(activeWeek);
  updateStudyPlanStats();
}

function updateStudyPlanStats() {
  const progress = getProgress();
  const daysCompleted = (progress.studyDays || []).length;
  const el1 = document.getElementById('days-completed');
  const el2 = document.getElementById('plan-streak-display');
  if (el1) el1.textContent = daysCompleted;
  if (el2) el2.textContent = progress.streak || 0;
}

function showWeek(weekNum) {
  document.querySelectorAll('.week-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i + 1 === weekNum);
  });
  renderStudyPlan(weekNum);
  updateStudyPlanStats();
}

