// =====================================================================
//  DUNES AVIATION ADAPT PREP HUB — Personal Interview Prep Data
// =====================================================================

const PI_DATA = {

  "common-questions": {
    title: "Common PI Questions",
    icon: "fas fa-question-circle",
    items: [
      {
        question: "Tell me about yourself.",
        tip: "Keep it focused on your aviation journey. Mention: education, why aviation, what you've done to prepare, and your goal.",
        model_answer: "I am [Name], currently in [Class 12 / Graduate]. I have always been fascinated by aviation since childhood. I have a strong background in Physics and Mathematics, scoring [X%] in my 12th boards with Physics and Maths as core subjects. I have completed my Class 2 Medical, done basic aeronautics reading, and I see Dunes Aviation Academy as the ideal launchpad for my CPL journey because of its DGCA-approved structured program and advanced fleet including the Diamond DA42."
      },
      {
        question: "Why do you want to become a pilot?",
        tip: "Be genuine and specific. Avoid clichés like 'I love to fly.' Talk about aviation as a career choice with depth.",
        model_answer: "Aviation has always been my calling. What excites me most is the blend of technical precision, teamwork, and responsibility that piloting demands. I've researched the commercial aviation industry in India — with over 500 aircraft expected to join Indian fleets by 2030 — and I believe now is the perfect time to build a career in it. Beyond career prospects, I genuinely love the technical challenge: understanding aerodynamics, meteorology, navigation, and air regulations makes every flight an intellectual exercise, not just a job."
      },
      {
        question: "Why Dunes Aviation Academy specifically?",
        tip: "Show you've done your research. Mention: DGCA approval, fleet (DA42 multi-engine), locations (Bhavnagar, Bhilwara), structured CPL program.",
        model_answer: "After thorough research, Dunes stands out for several reasons. First, it's DGCA-approved with a structured Ab Initio CPL program. The fleet includes the Diamond DA42 — a modern multi-engine aircraft that gives real-world commercial experience. The training locations at Bhavnagar and Bhilwara offer excellent airspace and weather consistency. Most importantly, Dunes integrates ground training and flying hours efficiently, and the 200-hour CPL requirement can be met within a structured timeline. I want a programme that makes me airline-ready, not just license-ready."
      },
      {
        question: "What are your strengths and weaknesses?",
        tip: "Pick strengths relevant to aviation (analytical thinking, discipline, focus under pressure). For weakness, pick something you're actively improving.",
        model_answer: "My strength is analytical problem-solving — I naturally break complex problems into components, which is crucial in cockpit decision-making. I'm also disciplined and respond well to structured environments. As for a weakness: I used to struggle with spatial reasoning in map navigation exercises, but I've been actively practicing aviation charts and using tools like ForeFlight to improve my navigation visualization skills."
      },
      {
        question: "Where do you see yourself in 5 years?",
        tip: "Be realistic: CPL → Type Rating → First Officer at an Indian airline. Mention airlines like IndiGo, Air India, Vistara.",
        model_answer: "In five years, I see myself having completed CPL and obtained my Type Rating, ideally on the Airbus A320 family. I would be working as a First Officer with an Indian carrier — possibly IndiGo or Air India — building hours towards my ATPL. By year 5, I aim to have 1,000+ total hours and be working actively towards a Captain upgrade. Dunes is the foundation of that journey."
      },
      {
        question: "How have you prepared for this selection process?",
        tip: "Show initiative: mention what you've studied, practiced (simulators, aptitude tests, medical, etc.)",
        model_answer: "I have prepared comprehensively. I've revised Physics (especially Bernoulli, Newton's laws, thermodynamics) and Mathematics (trigonometry, vectors, speed-distance-time) to DGCA CPL standard. I've been practicing ADAPT-style cognitive and psychometric exercises. I obtained my Class 2 Medical Certificate from a DGCA-approved AME. I've also researched the DGCA PARIKSHA portal exam structure and visited aviation forums to understand what the selection process expects."
      }
    ]
  },

  "motivation": {
    title: "Motivation & Behavioral Questions",
    icon: "fas fa-heart",
    items: [
      {
        question: "Describe a time you faced a challenge and overcame it.",
        tip: "Use the STAR method: Situation, Task, Action, Result. Link it to qualities needed in aviation.",
        model_answer: "During my Class 12 board exams, I was struggling with trigonometry — a subject I knew was critical for aviation. The situation was that my mock test score was 48%. My task was to improve significantly in 6 weeks. I created a focused daily study schedule, watched video lectures, and solved past papers daily. As a result, I scored 89% in my final board exam in Mathematics. This experience taught me that structured effort and discipline — qualities central to aviation — can overcome any technical challenge."
      },
      {
        question: "Tell me about a time you worked effectively in a team.",
        tip: "Pilots work in a crew. CRM (Crew Resource Management) is critical. Highlight communication and collaboration.",
        model_answer: "During a college project on aerodynamics, our group of four had conflicting ideas about the design approach. I initiated a structured discussion where everyone presented their ideas with data. We then voted on the most technically sound approach and assigned roles based on individual strengths. The project won best presentation. This taught me that effective communication and respecting diverse viewpoints — the foundation of good CRM — leads to better outcomes than individual dominance."
      },
      {
        question: "How do you perform under pressure?",
        tip: "Aviation demands clear thinking under stress. Give an example, and mention training yourself to stay calm.",
        model_answer: "I thrive under structured pressure. During my Class 12 Physics exam, I encountered an unfamiliar derivation worth 8 marks. Instead of panicking, I broke it down from first principles — Newton's laws to Bernoulli — and constructed a reasonable answer. I scored partial marks and passed with distinction. In aviation, where emergencies require calm, systematic decision-making (Aviate → Navigate → Communicate), this ability is essential. I've been deliberately practicing time-pressure cognitive exercises to further sharpen this skill."
      },
      {
        question: "Do you have any aviation experience?",
        tip: "Even if none, mention: research done, aviation books/films studied, simulator experience, any ATC visits, airshow attendance.",
        model_answer: "While I haven't flown an aircraft yet, I've pursued aviation deeply. I've logged several hours on Microsoft Flight Simulator studying instrument procedures and VFR navigation. I visited [local airport] for an ATC observation visit. I've read 'Stick and Rudder' by Wolfgang Langewiesche and studied DGCA's Air Navigation study guides. I've also completed online aeronautics modules from the FAA Safety website. This preparation has given me a strong theoretical foundation that I'm eager to translate into actual flight training."
      }
    ]
  },

  "aviation-gk": {
    title: "Aviation General Knowledge for PI",
    icon: "fas fa-plane",
    items: [
      {
        question: "What does DGCA stand for and what is its role?",
        answer: "DGCA = Directorate General of Civil Aviation. It is India's civil aviation regulator under the Ministry of Civil Aviation (MoCA). It regulates air transport services, airworthiness, pilot licensing, and safety oversight of Indian airspace.",
        category: "Regulation"
      },
      {
        question: "What is the difference between PPL, CPL, and ATPL?",
        answer: "PPL (Private Pilot License): Can fly non-commercially. Minimum 40-60 hrs. Age 17+.\nCPL (Commercial Pilot License): Can fly commercially for pay. Minimum 200 hrs. Age 18+. DGCA Class 1 medical.\nATPL (Airline Transport Pilot License): Full airline captain license. Minimum 1500 hrs. Age 21+.",
        category: "Licensing"
      },
      {
        question: "What are the four forces acting on an aircraft in flight?",
        answer: "1. LIFT – upward force generated by wings (Bernoulli + angle of attack)\n2. WEIGHT (Gravity) – downward force\n3. THRUST – forward force from engines\n4. DRAG – rearward aerodynamic resistance\nIn straight and level flight: Lift = Weight, Thrust = Drag",
        category: "Aerodynamics"
      },
      {
        question: "What is Bernoulli's Principle and how does it create lift?",
        answer: "Bernoulli's Principle states that in a fluid flow, where velocity is higher, pressure is lower. An aircraft wing (aerofoil) is curved on top and flatter below. Air flows faster over the top → lower pressure above, higher pressure below → net upward force = LIFT.",
        category: "Aerodynamics"
      },
      {
        question: "What are the main subjects in the DGCA CPL Ground Exam?",
        answer: "1. Air Navigation\n2. Aviation Meteorology\n3. Air Regulation\n4. Technical General (TG)\n5. Technical Specific (TS) — aircraft-type specific\n6. Radio Telephony (FRTOL)\nExams are conducted every quarter via the DGCA PARIKSHA portal.",
        category: "DGCA Exams"
      },
      {
        question: "What is ISA and why is it important?",
        answer: "ISA = International Standard Atmosphere. A reference model defining standard atmospheric conditions:\n• Sea level: 15°C, 1013.25 hPa, density 1.225 kg/m³\n• Lapse rate: 6.5°C per 1000m up to 11km (tropopause)\n• Temperature at 11km: −56.5°C (stratosphere = isothermal)\nISA is used to calibrate aircraft instruments and compare aircraft performance.",
        category: "Meteorology"
      },
      {
        question: "What is NOTAM?",
        answer: "NOTAM = Notice to Airmen. Official notices distributed before or during flight to pilots about changes/hazards along a route or at a location. E.g., runway closures, navigation aid outages, temporary airspace restrictions. Pilots must check NOTAMs during pre-flight planning.",
        category: "Air Regulations"
      },
      {
        question: "Name the three types of airports/aerodromes in India.",
        answer: "1. International Airports (e.g., DEL, BOM, MAA, BLR)\n2. Domestic Airports (e.g., Jodhpur, Bhavnagar, Bhilwara)\n3. Civil Enclaves at military airfields\nAirports Authority of India (AAI) manages most civil airports. Private airports: Mumbai T2, Delhi T2&T3 (DIAL/MIAL).",
        category: "Air Navigation"
      },
      {
        question: "What aircraft does Dunes Aviation use for training?",
        answer: "Dunes Aviation Academy's fleet includes:\n• Cessna C172 (single-engine, primary training)\n• Piper PA-28 (single-engine, intermediate)\n• Diamond DA42 (twin-engine, multi-engine rating, 15 hours CPL requirement)\nTotal CPL flying: 185 hrs SE + 15 hrs ME (DA42) + 20 hrs simulator",
        category: "Dunes Academy"
      }
    ]
  },

  "sjt": {
    title: "Situational Judgement Test (SJT)",
    icon: "fas fa-balance-scale",
    items: [
      {
        scenario: "During pre-flight, you notice a small crack in one of the aircraft panels. Your instructor says 'It's fine, we've flown with this before.' What do you do?",
        options: [
          { text: "Trust the instructor and proceed with the flight.", quality: "poor" },
          { text: "Politely raise the concern, request a proper engineering sign-off before flying.", quality: "best" },
          { text: "Refuse to fly without saying anything to the instructor.", quality: "poor" },
          { text: "Document it in the logbook but say nothing to the instructor.", quality: "average" }
        ],
        best: 1,
        explanation: "Aviation safety culture demands raising concerns through proper channels. A confident, respectful challenge is better than silent compliance or quiet documentation. The correct action is to politely request engineering sign-off — this demonstrates crew resource management (CRM) and safety-first attitude."
      },
      {
        scenario: "You are taxiing to the runway and realize you forgot to check a system during pre-flight checks. ATC has already given you take-off clearance and traffic is behind you. What do you do?",
        options: [
          { text: "Continue because you don't want to delay everyone.", quality: "poor" },
          { text: "Inform ATC you need to hold short, complete the missed check.", quality: "best" },
          { text: "Complete the check quickly while taxiing.", quality: "poor" },
          { text: "Wait until airborne to check the system.", quality: "poor" }
        ],
        best: 1,
        explanation: "Never compromise a safety check due to time pressure. Informing ATC and holding short is the correct, professional response. Aviation has zero tolerance for rushing safety procedures."
      },
      {
        scenario: "Your co-pilot seems agitated and is making errors during cruise. You suspect personal stress. What should you do?",
        options: [
          { text: "Ignore it — everyone has bad days.", quality: "poor" },
          { text: "Take over all tasks silently.", quality: "average" },
          { text: "Acknowledge their state, offer support, tactfully redistribute tasks, brief them to communicate openly.", quality: "best" },
          { text: "Report directly to the airline captain without talking to the co-pilot.", quality: "poor" }
        ],
        best: 2,
        explanation: "CRM (Crew Resource Management) is central to aviation. Address the human factor: empathetic communication, task redistribution, maintaining situational awareness together. Ignoring crew state is a major safety risk."
      },
      {
        scenario: "You're cleared for approach but spot unusual fog building ahead. ATC says the runway is clear but your observation suggests otherwise. What do you do?",
        options: [
          { text: "Trust ATC and proceed with approach as cleared.", quality: "average" },
          { text: "Report your observations to ATC, request updated weather, consider alternate if needed.", quality: "best" },
          { text: "Proceed and figure it out at lower altitude.", quality: "poor" },
          { text: "Immediately divert without informing ATC.", quality: "poor" }
        ],
        best: 1,
        explanation: "Pilot judgment and situational awareness are vital. ATC may not have real-time ground-level visibility. Communicating your observation, requesting updated ATIS/weather, and evaluating the alternate is the safest, most professional response."
      }
    ]
  },

  "tips": {
    title: "PI Tips & Strategies",
    icon: "fas fa-lightbulb",
    tips: [
      {
        icon: "fas fa-search",
        title: "Research Dunes Aviation Thoroughly",
        content: "Know: DGCA approval status, fleet (C172, PA28, DA42), locations (Bhavnagar, Bhilwara), program structure (185h SE + 15h ME + 20h SIM), eligibility (16+ start, 18+ CPL), and fee structure (~₹52.4L). Interviewers value candidates who show genuine interest."
      },
      {
        icon: "fas fa-user-tie",
        title: "Dress Code & Grooming",
        content: "Dress in formal business attire (shirt, tie/scarf, dark trousers). Keep grooming impeccable — aviation is a professional discipline. Carry all documents in a neat folder: 10th/12th certificates, medical, ID proof, passport-size photos."
      },
      {
        icon: "fas fa-comments",
        title: "Communication Style",
        content: "Speak clearly, confidently, and at a measured pace. Avoid filler words ('um', 'uh'). Use aviation phraseology where relevant but don't overdo it. If you don't know an answer, say: 'I don't know that specifically, but here's my understanding...' Never bluff."
      },
      {
        icon: "fas fa-heart",
        title: "Show Genuine Passion",
        content: "Interviewers can distinguish genuine passion from rehearsed answers. Speak about a specific aviation moment, book, or experience that inspired you. Mention 'Stick and Rudder' by Langewiesche, Amelia Earhart, or a specific Dunes achievement you read about."
      },
      {
        icon: "fas fa-question",
        title: "Prepare Smart Questions",
        content: "Always have 2-3 questions ready to ask the interviewer: 'What is the typical progression from CPL at Dunes to first airline placement?', 'How does Dunes prepare cadets for the DGCA multi-engine rating?', 'What sets Dunes graduates apart at airline interviews?'"
      },
      {
        icon: "fas fa-brain",
        title: "ADAPT Test Mental Prep",
        content: "The ADAPT test is computer-based (4 hours). Practice cognitive tests daily: number sequences, verbal reasoning, spatial puzzles. Play games that improve hand-eye coordination (flight simulators, joystick games). Ensure good sleep the night before. Time management is critical during the test."
      },
      {
        icon: "fas fa-file-medical",
        title: "Medical Readiness",
        content: "Class 2 medical is required before starting training. Book your examination with a DGCA-approved AME (Aviation Medical Examiner) in advance. Common disqualifiers: uncorrected vision beyond limits, color blindness, heart conditions. Check DGCA medical standards before applying."
      },
      {
        icon: "fas fa-book",
        title: "What to Study Before Interview",
        content: "1. Four Forces of Flight (Lift, Weight, Thrust, Drag)\n2. Bernoulli's Principle\n3. ISA standard atmosphere values\n4. DGCA CPL minimum requirements\n5. Phonetic alphabet (Alpha, Bravo, Charlie...)\n6. NATO/ICAO standard phraseology basics\n7. Basic Airspace classification (A to G)"
      }
    ]
  }
};
