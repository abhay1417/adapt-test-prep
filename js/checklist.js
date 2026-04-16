// =====================================================================
//  DUNES AVIATION ADAPT PREP HUB — Admission Checklist
// =====================================================================

const CHECKLIST_DATA = [
  {
    category: "Academic Requirements",
    icon: "fas fa-graduation-cap",
    color: "#3b82f6",
    items: [
      { id: "cl1", text: "Class 10 Certificate / Marksheet (attested copy)", detail: "Required for SPL/PPL eligibility" },
      { id: "cl2", text: "Class 12 Certificate with Physics & Mathematics", detail: "Minimum requirement for CPL program at Dunes" },
      { id: "cl3", text: "Class 12 Marksheet showing 50%+ in Physics & Maths", detail: "No minimum % specified by Dunes, but competitive benchmark is 60%+" },
      { id: "cl4", text: "English medium school certificate / English proficiency proof", detail: "ICAO Level 4 English required for CPL" },
    ]
  },
  {
    category: "Medical Requirements",
    icon: "fas fa-stethoscope",
    color: "#22c55e",
    items: [
      { id: "cl5", text: "Book appointment with a DGCA-approved AME (Aviation Medical Examiner)", detail: "Find AMEs via DGCA website at dgca.gov.in" },
      { id: "cl6", text: "Obtain Class 2 Medical Certificate (for starting training)", detail: "Required before first solo flight" },
      { id: "cl7", text: "Eye test: Vision correction within DGCA limits (6/6 corrected or better)", detail: "Glasses/contacts may be permitted up to certain prescriptions" },
      { id: "cl8", text: "Colour Vision Test: Pass Ishihara plates test (no colour blindness)", detail: "Colour blindness may disqualify for CPL" },
      { id: "cl9", text: "ENT (Ear, Nose, Throat) clearance", detail: "Hearing must meet aviation medical standards" },
    ]
  },
  {
    category: "Registration & Documents",
    icon: "fas fa-id-card",
    color: "#f59e0b",
    items: [
      { id: "cl10", text: "Valid Indian Passport (or apply for one)", detail: "Passport is required for international flight operations and medical" },
      { id: "cl11", text: "Aadhaar Card", detail: "For identity verification during admission process" },
      { id: "cl12", text: "6 passport-size photographs (white background)", detail: "Required for applications, ID cards, DGCA registration" },
      { id: "cl13", text: "Create DGCA eGCA account at ecaa.dgca.gov.in", detail: "All licensing and exam registrations go through eGCA portal" },
      { id: "cl14", text: "Apply for DGCA Computer Number (Registration number for ground exams)", detail: "Register at Pariksha portal: pariksha.dgca.gov.in" },
    ]
  },
  {
    category: "Financial Preparation",
    icon: "fas fa-rupee-sign",
    color: "#8b5cf6",
    items: [
      { id: "cl15", text: "Arrange CPL course fee (~₹52.4 L Ab Initio / Only Flying varies)", detail: "Dunes fee: check admissions.dunesaviation.in for latest figures" },
      { id: "cl16", text: "Budget for DGCA exam fees (per paper, per attempt)", detail: "DGCA charges nominal fees per paper attempt via Pariksha portal" },
      { id: "cl17", text: "Budget for Class 1 Medical examination (required before CPL issue)", detail: "Class 1 medical is more comprehensive and costs more than Class 2" },
      { id: "cl18", text: "Explore DCGANON, bank loans, aviation finance options", detail: "Axis Bank, HDFC, and SBI offer pilot training loans" },
    ]
  },
  {
    category: "Test Preparation",
    icon: "fas fa-brain",
    color: "#ef4444",
    items: [
      { id: "cl19", text: "Complete Maths module practice (target 70%+)", detail: "Trigonometry, vectors, speed-distance-time are commonly tested" },
      { id: "cl20", text: "Complete Physics module practice (target 70%+)", detail: "Bernoulli, Newton's laws, gas laws, aerodynamics" },
      { id: "cl21", text: "Complete English Proficiency practice (ICAO Level 4)", detail: "Grammar, comprehension, vocabulary, phraseology" },
      { id: "cl22", text: "Complete Cognitive Reasoning practice (ADAPT-style)", detail: "Number series, verbal reasoning, spatial awareness" },
      { id: "cl23", text: "Complete Full 30-question Mock ADAPT Test", detail: "Timed simulation of full ADAPT-style assessment" },
      { id: "cl24", text: "Score 80%+ on Overall Readiness Meter before appearing for actual ADAPT", detail: "Benchmark for selection test readiness" },
    ]
  },
  {
    category: "Personal Interview Preparation",
    icon: "fas fa-comments",
    color: "#06b6d4",
    items: [
      { id: "cl25", text: "Prepare 60-second self-introduction (practiced out loud)", detail: "Should cover: name, education, why aviation, why Dunes" },
      { id: "cl26", text: "Research Dunes Aviation Academy fully (fleet, fees, locations, faculty)", detail: "Visit dunesaviation.in and read all course pages" },
      { id: "cl27", text: "Know all four forces of flight and Bernoulli's principle", detail: "Almost always asked in aviation interview" },
      { id: "cl28", text: "Memorize ICAO phonetic alphabet (Alpha to Zulu)", detail: "May be asked to read out a callsign or word using phonetics" },
      { id: "cl29", text: "Prepare 3 questions to ask the interviewer", detail: "Shows research, engagement and serious intent" },
      { id: "cl30", text: "Practice with SJT (Situational Judgement) scenarios", detail: "CRM and safety judgment are tested at interview" },
    ]
  },
  {
    category: "Final Pre-Assessment Day",
    icon: "fas fa-rocket",
    color: "#10b981",
    items: [
      { id: "cl31", text: "Organize all documents in a neat folder/file", detail: "Originals + photocopies of everything" },
      { id: "cl32", text: "Plan route to Dunes venue (Bhavnagar / Bhilwara / Ahmedabad ground school)", detail: "Arrive 30 min early" },
      { id: "cl33", text: "Get a full night's sleep (8 hours) before the ADAPT test", detail: "Cognitive performance degrades significantly without proper sleep" },
      { id: "cl34", text: "Eat a proper meal before the test", detail: "Avoid heavy foods. Brain needs glucose for cognitive tests." },
      { id: "cl35", text: "Bring water, ID proof, and stationery to the test centre", detail: "Check Dunes' specific requirements for test day materials" },
    ]
  }
];

function renderChecklist() {
  const container = document.getElementById('checklist-content');
  const progress = getProgress();
  const checked = progress.checklist || [];

  const totalItems = CHECKLIST_DATA.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = checked.length;
  const pct = Math.round((checkedCount / totalItems) * 100);

  let html = `
    <div class="checklist-overview">
      <div class="checklist-progress-card">
        <div class="checklist-pct-display">${pct}%</div>
        <div class="checklist-pct-label">Admission Readiness</div>
        <div class="checklist-progress-bar-wrap">
          <div class="checklist-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="checklist-count">${checkedCount} of ${totalItems} tasks completed</div>
      </div>
    </div>
  `;

  CHECKLIST_DATA.forEach(category => {
    const catChecked = category.items.filter(item => checked.includes(item.id)).length;
    const catPct = Math.round((catChecked / category.items.length) * 100);

    html += `
      <div class="checklist-category">
        <div class="checklist-cat-header" style="border-left: 4px solid ${category.color}">
          <div class="cat-title">
            <i class="${category.icon}" style="color:${category.color}"></i>
            <h3>${category.category}</h3>
          </div>
          <div class="cat-progress">
            <span style="color:${category.color}">${catChecked}/${category.items.length}</span>
            <div class="cat-mini-bar">
              <div class="cat-mini-fill" style="width:${catPct}%; background:${category.color}"></div>
            </div>
          </div>
        </div>
        <div class="checklist-items">
    `;

    category.items.forEach(item => {
      const isDone = checked.includes(item.id);
      html += `
        <div class="checklist-item ${isDone ? 'checked' : ''}" onclick="toggleChecklistItem('${item.id}')">
          <div class="check-box ${isDone ? 'checked' : ''}">
            ${isDone ? '<i class="fas fa-check"></i>' : ''}
          </div>
          <div class="check-content">
            <div class="check-text">${item.text}</div>
            <div class="check-detail">${item.detail}</div>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

function toggleChecklistItem(itemId) {
  const progress = getProgress();
  if (!progress.checklist) progress.checklist = [];
  const idx = progress.checklist.indexOf(itemId);
  if (idx === -1) {
    progress.checklist.push(itemId);
    addActivity(`Completed checklist item ✓`, 'checklist');
  } else {
    progress.checklist.splice(idx, 1);
  }
  saveProgress(progress);
  renderChecklist();
  updateDashboard();
}
