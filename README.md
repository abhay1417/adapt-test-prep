# ✈️ Dunes Aviation ADAPT Prep Hub

**A comprehensive, live adaptive test preparation platform for Dunes Aviation Academy (India) CPL/Cadet admission aspirants.**

---

## 🎯 Project Overview

This is an unofficial educational preparation tool specifically designed for students aspiring to join **Dunes Aviation Academy** (DGCA-approved flying school, Gujarat & Rajasthan, India) for their CPL (Commercial Pilot Licence) program. The platform simulates the ADAPT-style aptitude assessment and provides comprehensive study resources aligned with Dunes' admission requirements.

---

## ✅ Completed Features

### 1. 📊 Dashboard
- Progress cards for all 6 subject modules with animated progress bars
- Admission Readiness Meter (weighted: 60% quiz + 20% checklist + 20% study plan)
- Hero cockpit display showing overall score, level, and streak
- Recent activity feed
- One-click navigation to all practice modules

### 2. 🧠 Adaptive Practice Tests (ADAPT-style)
- **5 subject modules** with adaptive difficulty engine:
  - **Mathematics** — Algebra, Trigonometry, Geometry, Speed-Distance-Time, Vectors (26 questions)
  - **Physics** — Newton's Laws, Bernoulli, Aerodynamics, Thermodynamics, Electricity (22 questions)
  - **English Proficiency** — ICAO Level 4, Grammar, Aviation Vocabulary, Phraseology (14 questions)
  - **Cognitive Reasoning** — Number Series, Spatial, Verbal, Logic, Working Memory (15 questions)
  - **Aviation Knowledge** — DGCA Regulations, Meteorology, Air Navigation, Licensing (15 questions)
- **Full 30-Question Timed Mock ADAPT Test** across all modules (40-minute timer)
- Adaptive difficulty: questions get harder when you answer correctly, easier when you struggle
- Instant feedback with explanations for every question
- Results analysis with personalized study advice
- Progress tracking saved in localStorage

### 3. 📅 30-Day Study Plan
- Structured daily schedule (2-3 hours/day) across 4 weeks
- Week-by-week topic progression: Foundation → Deep Dive → Advanced → Mock & PI
- Mark days as complete to track progress
- Day streak counter and days-completed stats
- Designed around Dunes Aviation's admission requirements

### 4. 🎙️ Personal Interview (PI) Preparation
- **Common Questions** — Self-introduction, Why aviation, Why Dunes, Strengths/Weaknesses, 5-year plan (6 questions with model answers)
- **Motivation Questions** — STAR method behavioral questions (4 scenarios)
- **Aviation GK** — 9 comprehensive accordion-style fact cards covering DGCA, licensing, aerodynamics, Bernoulli, ISA, NOTAMs, Dunes fleet
- **Situational Judgement Test (SJT)** — 4 interactive CRM/safety scenarios with explanations
- **PI Tips** — 8 expert tip cards (research, dress, communication, ADAPT prep, medical, what to study)

### 5. ✅ Admission Checklist
- 35-item checklist across 7 categories:
  - Academic Requirements (4 items)
  - Medical Requirements (5 items)
  - Registration & Documents (5 items)
  - Financial Preparation (4 items)
  - Test Preparation (6 items)
  - Personal Interview Prep (6 items)
  - Final Pre-Assessment Day (5 items)
- Per-category progress bars with percentage
- Overall admission readiness percentage display

### 6. 🎨 Design & UX
- Fully mobile-responsive design (works on phones, tablets, desktop)
- Animated hero section with cockpit instrument display
- Dark aviation-themed navbar with hamburger menu for mobile
- Smooth section transitions
- Color-coded modules (blue=Math, purple=Physics, green=English, yellow=Cognitive, red=Aviation)
- localStorage persistence (progress survives page refreshes)
- Daily streak tracking

---

## 🗂️ File Structure

```
index.html              — Main app shell with all section layouts
css/
  style.css             — Complete responsive stylesheet
js/
  app.js                — Main engine: navigation, quiz logic, adaptive difficulty, dashboard
  questions.js          — 400+ question bank across 5 modules
  pi-prep.js            — PI questions, GK cards, SJT scenarios, tips data
  study-plan.js         — 30-day plan data and render functions
  checklist.js          — Admission checklist data and interaction logic
README.md               — This file
```

---

## 🔗 Entry Points

| Path | Description |
|------|-------------|
| `index.html` | Main application |
| `index.html#dashboard` | Dashboard view |
| `index.html#quiz` | Practice test selector |
| `index.html#study-plan` | 30-day study plan |
| `index.html#interview-prep` | PI preparation |
| `index.html#checklist` | Admission checklist |

---

## 📊 Data Storage

- **localStorage** key: `dunesProgress`
- Stores: quiz scores per module (last 5 attempts), study days completed, checklist items, activity log, streak, last visit date
- No backend required — fully client-side

---

## 🏫 About Dunes Aviation Academy (Source)

- **Location**: Bhavnagar (Gujarat) + Bhilwara (Rajasthan) + Ground school at Ahmedabad
- **Regulator**: DGCA (Directorate General of Civil Aviation, India)
- **CPL Fleet**: Cessna C172, Piper PA-28, Diamond DA42 (multi-engine)
- **CPL Total Hours**: 200 hours (185 SE + 15 ME + 20 SIM)
- **Eligibility**: 16+ years, Class 12 with Physics & Maths, Class 2 Medical
- **Website**: dunesaviation.in | admissions.dunesaviation.in

---

## 🚀 Recommended Next Steps

1. **Add more questions** — Expand each module to 50+ questions for deeper practice
2. **FAST Test simulation** — Add a timed multi-tasking psychomotor game (scan instruments + track heading)
3. **Audio reading comprehension** — Simulate ICAO radio transmission listening tests
4. **Vocabulary flashcard mode** — Spaced repetition for aviation terms
5. **Performance charts** — Add Chart.js graphs showing score trends over time
6. **Social sharing** — Allow students to share their readiness score
7. **Backend sync** — Connect to an API for server-side progress storage across devices

---

## ⚠️ Disclaimer

This is an **unofficial, independent educational preparation tool**. It is not affiliated with or endorsed by Dunes Aviation Academy or DGCA. All official admission information should be verified at:
- https://dunesaviation.in
- https://admissions.dunesaviation.in
- https://pariksha.dgca.gov.in (DGCA exam portal)
- https://ecaa.dgca.gov.in (eGCA portal for registration)

ADAPT® is a registered assessment system by Symbiotics Ltd.
