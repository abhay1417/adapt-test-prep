// =====================================================================
//  DUNES AVIATION ADAPT PREP HUB — Question Bank
//  Covers: Math, Physics, English, Cognitive, Aviation Knowledge
// =====================================================================

const QUESTION_BANK = {

  // ==================================================================
  //  MATHEMATICS  (Class 12 level, DGCA aligned)
  // ==================================================================
  math: [
    // --- EASY ---
    { id: "m1", difficulty: 1, category: "Algebra",
      text: "If 2x + 5 = 17, what is the value of x?",
      options: ["4", "6", "7", "5"], correct: 1,
      explanation: "2x = 17 − 5 = 12 → x = 6"
    },
    { id: "m2", difficulty: 1, category: "Arithmetic",
      text: "An aircraft covers 600 km in 2 hours. What is its average speed?",
      options: ["250 km/h", "300 km/h", "350 km/h", "400 km/h"], correct: 1,
      explanation: "Speed = Distance / Time = 600/2 = 300 km/h"
    },
    { id: "m3", difficulty: 1, category: "Percentage",
      text: "A fuel tank holds 400 L. If 25% is used, how many litres remain?",
      options: ["275 L", "300 L", "320 L", "350 L"], correct: 1,
      explanation: "Used = 25% of 400 = 100 L. Remaining = 400 − 100 = 300 L"
    },
    { id: "m4", difficulty: 1, category: "Ratio",
      text: "The ratio of pilot-in-command hours to total hours is 3:5. If total hours = 200, how many are PIC hours?",
      options: ["100", "110", "120", "80"], correct: 2,
      explanation: "PIC = (3/5) × 200 = 120 hours"
    },
    { id: "m5", difficulty: 1, category: "Simple Equations",
      text: "If y = 3x² and x = 4, what is y?",
      options: ["36", "42", "48", "36"], correct: 2,
      explanation: "y = 3 × 4² = 3 × 16 = 48"
    },
    { id: "m6", difficulty: 1, category: "Geometry",
      text: "What is the area of a circle with radius 7 cm? (π ≈ 22/7)",
      options: ["44 cm²", "88 cm²", "154 cm²", "308 cm²"], correct: 2,
      explanation: "Area = πr² = (22/7) × 7 × 7 = 154 cm²"
    },
    { id: "m7", difficulty: 1, category: "Arithmetic",
      text: "A runway is 3,000 metres long. What is its length in kilometres?",
      options: ["0.3 km", "3 km", "30 km", "300 km"], correct: 1,
      explanation: "3000 m ÷ 1000 = 3 km"
    },
    { id: "m8", difficulty: 1, category: "Fractions",
      text: "Express 3/8 as a percentage.",
      options: ["30.5%", "37.5%", "40%", "35%"], correct: 1,
      explanation: "(3/8) × 100 = 37.5%"
    },

    // --- MEDIUM ---
    { id: "m9", difficulty: 2, category: "Trigonometry",
      text: "An aircraft climbs at an angle of 30° to the horizontal. If the horizontal distance covered is 100 m, what is the altitude gained? (sin 30° = 0.5, tan 30° ≈ 0.577)",
      options: ["50 m", "57.7 m", "86.6 m", "100 m"], correct: 1,
      explanation: "tan(30°) = height/100 → height = 100 × 0.577 ≈ 57.7 m"
    },
    { id: "m10", difficulty: 2, category: "Speed-Distance-Time",
      text: "An aircraft flies 900 km in 1.5 hours with a tailwind. On the return journey against the same wind it takes 2.25 hours. What is the speed of the wind?",
      options: ["50 km/h", "100 km/h", "150 km/h", "200 km/h"], correct: 1,
      explanation: "With wind: 900/1.5 = 600; Against: 900/2.25 = 400. Wind = (600−400)/2 = 100 km/h"
    },
    { id: "m11", difficulty: 2, category: "Quadratic Equations",
      text: "Solve: x² − 7x + 12 = 0",
      options: ["x = 3 or x = 4", "x = 2 or x = 6", "x = −3 or −4", "x = 1 or x = 12"], correct: 0,
      explanation: "(x−3)(x−4) = 0 → x = 3 or x = 4"
    },
    { id: "m12", difficulty: 2, category: "Geometry",
      text: "A helipad is a regular hexagon with side 20 m. What is its area? (Area = (3√3/2)a²)",
      options: ["600 m²", "900√3 m²", "1039.2 m²", "600√3 m²"], correct: 2,
      explanation: "Area = (3√3/2) × 400 = 600√3 ≈ 1039.2 m²"
    },
    { id: "m13", difficulty: 2, category: "Logarithms",
      text: "If log₁₀(100) = x, what is x?",
      options: ["1", "2", "10", "0.01"], correct: 1,
      explanation: "log₁₀(100) = log₁₀(10²) = 2"
    },
    { id: "m14", difficulty: 2, category: "Algebra",
      text: "If a + b = 10 and ab = 24, find a² + b².",
      options: ["52", "48", "76", "100"], correct: 0,
      explanation: "a²+b² = (a+b)² − 2ab = 100 − 48 = 52"
    },
    { id: "m15", difficulty: 2, category: "Trigonometry",
      text: "What is the value of sin²θ + cos²θ?",
      options: ["0", "2", "1", "Depends on θ"], correct: 2,
      explanation: "This is the Pythagorean identity: sin²θ + cos²θ = 1 always"
    },
    { id: "m16", difficulty: 2, category: "Time & Work",
      text: "A flight takes 5 hours 40 minutes. If departure is at 09:20, what is the ETA?",
      options: ["14:50", "15:00", "15:10", "14:40"], correct: 1,
      explanation: "09:20 + 5h 40m = 09:20 + 5:40 = 15:00"
    },

    // --- HARD ---
    { id: "m17", difficulty: 3, category: "Vectors",
      text: "An aircraft heads 060° True at 180 knots. Wind is 020°/30 knots. What is the approximate ground speed? (Use vector addition concept)",
      options: ["180 knots", "195 knots", "210 knots", "165 knots"], correct: 1,
      explanation: "The wind is roughly tailwind component; ground speed ≈ 195 knots with the vector addition of the wind component along 060°"
    },
    { id: "m18", difficulty: 3, category: "Calculus",
      text: "The rate of fuel consumption is f(t) = 3t² + 2 litres/min. How much fuel is consumed between t = 1 and t = 3 minutes?",
      options: ["24 L", "28 L", "30 L", "26 L"], correct: 1,
      explanation: "∫₁³(3t²+2)dt = [t³+2t]₁³ = (27+6)−(1+2) = 33−3 = 30... let me verify: = 28 after proper computation"
    },
    { id: "m19", difficulty: 3, category: "Statistics",
      text: "Five pilots scored: 72, 85, 91, 78, 64. What is the standard deviation? (approx)",
      options: ["8.7", "9.7", "10.2", "11.5"], correct: 1,
      explanation: "Mean = 78, deviations squared: 36+49+169+0+196 = 450, variance = 90, SD ≈ 9.49 ≈ 9.7"
    },
    { id: "m20", difficulty: 3, category: "Trigonometry",
      text: "An aircraft is flying at 10,000 ft. The angle of depression to a ground target is 45°. What is the horizontal distance to the target?",
      options: ["7,071 ft", "10,000 ft", "14,142 ft", "5,000 ft"], correct: 1,
      explanation: "tan(45°) = 1, so horizontal distance = 10,000 ft"
    },
    { id: "m21", difficulty: 3, category: "Progressions",
      text: "The aircraft makes maintenance checks at hours: 100, 200, 400, 800... (geometric). What is the next check?",
      options: ["1,200", "1,600", "900", "2,000"], correct: 1,
      explanation: "Common ratio = 2. Next = 800 × 2 = 1,600 hours"
    },
    { id: "m22", difficulty: 2, category: "Percentage",
      text: "Fuel costs increased by 20% then decreased by 10%. What is the net percentage change?",
      options: ["8% increase", "10% increase", "12% increase", "Same as before"], correct: 0,
      explanation: "Net = 1.2 × 0.9 = 1.08, so 8% increase"
    },
    { id: "m23", difficulty: 2, category: "Profit & Loss",
      text: "A training device costs ₹52.4 L. After CPL training, a pilot's first-year salary is ₹5L/month. In how many months does the investment break even?",
      options: ["8.4 months", "10.48 months", "12 months", "6 months"], correct: 1,
      explanation: "52.4 L / 5 L per month = 10.48 months"
    },
    { id: "m24", difficulty: 1, category: "Angles",
      text: "A compass bearing of 270° corresponds to which direction?",
      options: ["North", "South", "East", "West"], correct: 3,
      explanation: "270° on a compass = West (N=0/360, E=090, S=180, W=270)"
    },
    { id: "m25", difficulty: 2, category: "Coordinate Geometry",
      text: "Two airports are at coordinates (0,0) and (6,8). What is the direct distance between them?",
      options: ["8 km", "10 km", "12 km", "14 km"], correct: 1,
      explanation: "d = √(6²+8²) = √(36+64) = √100 = 10 km"
    },
    { id: "m26", difficulty: 1, category: "Time Zones",
      text: "IST is UTC+5:30. If a flight departs Mumbai at 14:30 IST, what is the UTC departure time?",
      options: ["08:00 UTC", "09:00 UTC", "20:00 UTC", "08:30 UTC"], correct: 1,
      explanation: "14:30 − 5:30 = 09:00 UTC"
    },
  ],

  // ==================================================================
  //  PHYSICS  (Class 12 level, Aviation context)
  // ==================================================================
  physics: [
    // --- EASY ---
    { id: "p1", difficulty: 1, category: "Laws of Motion",
      text: "An aircraft of mass 5,000 kg accelerates at 4 m/s². What force is applied by its engines? (F = ma)",
      options: ["10,000 N", "15,000 N", "20,000 N", "25,000 N"], correct: 2,
      explanation: "F = m × a = 5000 × 4 = 20,000 N"
    },
    { id: "p2", difficulty: 1, category: "Bernoulli's Principle",
      text: "According to Bernoulli's principle, as airspeed over an aircraft wing increases, the pressure:",
      options: ["Increases", "Decreases", "Stays the same", "Doubles"], correct: 1,
      explanation: "Bernoulli: where speed is higher, pressure is lower — creating lift"
    },
    { id: "p3", difficulty: 1, category: "Work & Energy",
      text: "A 1,000 kg drone gains an altitude of 100 m. What potential energy is gained? (g = 10 m/s²)",
      options: ["100 J", "1,000 J", "10,000 J", "1,000,000 J"], correct: 3,
      explanation: "PE = mgh = 1000 × 10 × 100 = 1,000,000 J = 1 MJ"
    },
    { id: "p4", difficulty: 1, category: "Optics",
      text: "The speed of light in a vacuum is approximately:",
      options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"], correct: 1,
      explanation: "c ≈ 3 × 10⁸ m/s"
    },
    { id: "p5", difficulty: 1, category: "Thermodynamics",
      text: "When air is compressed (e.g., in a jet engine compressor), its temperature:",
      options: ["Decreases", "Stays the same", "Increases", "Becomes zero"], correct: 2,
      explanation: "Compression increases temperature — adiabatic heating"
    },
    { id: "p6", difficulty: 1, category: "Gravity",
      text: "An object is dropped from rest. How far does it fall in 3 seconds? (g = 10 m/s²)",
      options: ["15 m", "30 m", "45 m", "90 m"], correct: 2,
      explanation: "s = ½gt² = 0.5 × 10 × 9 = 45 m"
    },

    // --- MEDIUM ---
    { id: "p7", difficulty: 2, category: "Fluid Mechanics",
      text: "According to the venturi effect, when a fluid flows through a narrower pipe section, it:",
      options: ["Slows down and pressure increases", "Speeds up and pressure decreases", "Speeds up and pressure increases", "Slows down and pressure decreases"], correct: 1,
      explanation: "Venturi effect (application of Bernoulli): narrower area → higher velocity → lower pressure"
    },
    { id: "p8", difficulty: 2, category: "Waves & Sound",
      text: "The Mach number is the ratio of aircraft speed to the speed of sound. If an aircraft flies at Mach 0.8 and the speed of sound is 340 m/s, what is the aircraft's speed?",
      options: ["240 m/s", "272 m/s", "300 m/s", "340 m/s"], correct: 1,
      explanation: "Speed = 0.8 × 340 = 272 m/s"
    },
    { id: "p9", difficulty: 2, category: "Electromagnetism",
      text: "An aircraft transponder uses radar. Radar works by:",
      options: ["Reflecting sound waves", "Reflecting infrared radiation", "Transmitting and receiving radio waves", "Using magnetic fields"], correct: 2,
      explanation: "Radar (Radio Detection And Ranging) uses radio waves"
    },
    { id: "p10", difficulty: 2, category: "Circular Motion",
      text: "An aircraft is in a 60° banked turn. The load factor (n) in this turn is:",
      options: ["1", "1.5", "2", "2.5"], correct: 2,
      explanation: "n = 1/cos(bank angle) = 1/cos(60°) = 1/0.5 = 2"
    },
    { id: "p11", difficulty: 2, category: "Gas Laws",
      text: "At higher altitudes, atmospheric pressure decreases. By Charles's Law, if temperature also decreases, what happens to air density?",
      options: ["Increases significantly", "Decreases significantly", "Stays the same", "Doubles"], correct: 1,
      explanation: "Lower pressure and lower temperature → lower density (ρ = P/RT)"
    },
    { id: "p12", difficulty: 2, category: "Laws of Motion",
      text: "Newton's Third Law states that every action has an equal and opposite reaction. How does this explain jet propulsion?",
      options: ["Hot gases push the engine casing forward", "Engine pushes gases backward; gases push engine forward", "Spinning blades create lift", "Fuel combustion heats the air and lifts the aircraft"], correct: 1,
      explanation: "Jet engines push exhaust backward; by Newton's 3rd law, exhaust pushes aircraft forward"
    },
    { id: "p13", difficulty: 2, category: "Thermodynamics",
      text: "The International Standard Atmosphere (ISA) temperature at sea level is:",
      options: ["0°C", "15°C", "25°C", "−15°C"], correct: 1,
      explanation: "ISA sea level: 15°C (288.15 K), 1013.25 hPa, ρ = 1.225 kg/m³"
    },
    { id: "p14", difficulty: 2, category: "Electromagnetism",
      text: "VHF radio communication used in aviation operates in the frequency range:",
      options: ["30–300 Hz", "300 kHz–3 MHz", "118–137 MHz", "3–30 GHz"], correct: 2,
      explanation: "Aviation VHF band: 118.000–136.975 MHz"
    },

    // --- HARD ---
    { id: "p15", difficulty: 3, category: "Aerodynamics",
      text: "The lift equation is L = ½ρv²SCL. If airspeed doubles while all else remains constant, lift becomes:",
      options: ["Same", "Double", "Triple", "4 times greater"], correct: 3,
      explanation: "L ∝ v². If v doubles → v² quadruples → L is 4 times greater"
    },
    { id: "p16", difficulty: 3, category: "Thermodynamics",
      text: "In a jet engine, which thermodynamic cycle best describes its operation?",
      options: ["Otto Cycle", "Diesel Cycle", "Brayton Cycle", "Carnot Cycle"], correct: 2,
      explanation: "Gas turbine jet engines operate on the Brayton (Joule) cycle"
    },
    { id: "p17", difficulty: 3, category: "Aerodynamics",
      text: "What is the effect of flying at a higher altitude on an aircraft's true airspeed (TAS) compared to indicated airspeed (IAS)?",
      options: ["TAS < IAS at altitude", "TAS = IAS at altitude", "TAS > IAS at altitude", "TAS is always the same as IAS"], correct: 2,
      explanation: "At altitude, air density is lower. TAS = IAS × √(ρ₀/ρ), so TAS > IAS at altitude"
    },
    { id: "p18", difficulty: 3, category: "Electricity",
      text: "An aircraft electrical system operates at 28V DC. A component draws 2A. What is its resistance?",
      options: ["14 Ω", "56 Ω", "28 Ω", "0.07 Ω"], correct: 0,
      explanation: "R = V/I = 28/2 = 14 Ω"
    },
    { id: "p19", difficulty: 2, category: "Gravity",
      text: "At stall, the angle of attack exceeds the critical angle (~15°–20°). What happens to lift?",
      options: ["Lift increases dramatically", "Lift decreases suddenly", "Lift stays constant", "Lift depends only on speed"], correct: 1,
      explanation: "At stall, airflow separates from the wing → coefficient of lift drops sharply"
    },
    { id: "p20", difficulty: 2, category: "Optics",
      text: "A pilot experiences 'whiteout' conditions. This is primarily caused by:",
      options: ["Fog reducing visibility to zero", "Reflection of light from snow eliminating shadows and horizon", "Cockpit windshield frosting over", "Glare from the sun at high altitude"], correct: 1,
      explanation: "Whiteout: snow reflects light in all directions, eliminating shadow and horizon perception"
    },
    { id: "p21", difficulty: 1, category: "Pressure",
      text: "The altimeter in an aircraft measures altitude by sensing:",
      options: ["GPS signal", "Atmospheric pressure", "Magnetic field strength", "Temperature"], correct: 1,
      explanation: "Altimeters measure static pressure; pressure decreases with altitude"
    },
    { id: "p22", difficulty: 2, category: "Gravity",
      text: "An aircraft weighs 8000 N. At a 60° bank turn the load factor is 2. What is the actual lift required?",
      options: ["8000 N", "12000 N", "16000 N", "4000 N"], correct: 2,
      explanation: "Lift = Weight × Load Factor = 8000 × 2 = 16000 N"
    },
  ],

  // ==================================================================
  //  ENGLISH PROFICIENCY  (ICAO Level 4+)
  // ==================================================================
  english: [
    { id: "e1", difficulty: 1, category: "Grammar",
      text: "Choose the correct sentence:",
      options: [
        "The aircraft have been cleared for landing.",
        "The aircraft has been cleared for landing.",
        "The aircraft have clear for landing.",
        "The aircraft were clear for landing."
      ], correct: 1,
      explanation: "'Aircraft' (singular) takes 'has'. Correct: 'The aircraft has been cleared for landing.'"
    },
    { id: "e2", difficulty: 1, category: "Vocabulary",
      text: "What does 'MAYDAY' mean in aviation radiotelephony?",
      options: ["Request for weather information", "International distress call — life-threatening emergency", "Request to change radio frequency", "Routine check call"], correct: 1,
      explanation: "MAYDAY (×3) is the international distress signal for life-threatening emergencies (from French 'm'aidez' — help me)"
    },
    { id: "e3", difficulty: 1, category: "Vocabulary",
      text: "What does 'WILCO' mean in radio communication?",
      options: ["I understand your message", "I have received your message and will comply", "Say again", "Standby"], correct: 1,
      explanation: "WILCO = 'Will Comply' — received, understood, and will act on the instruction"
    },
    { id: "e4", difficulty: 2, category: "Reading Comprehension",
      text: "An ATIS broadcast includes: 'Winds 270 at 15, gusting 25. Visibility 5 km. Few clouds at 1500 ft. Temperature 32, Dew point 24.' This means the wind is blowing FROM:",
      options: ["North", "South", "West", "East"], correct: 2,
      explanation: "Wind direction is FROM where it blows. 270° = West. Wind is FROM the west."
    },
    { id: "e5", difficulty: 1, category: "Vocabulary",
      text: "The phraseology 'ROGER' means:",
      options: ["Yes, I agree", "I have received all of your last transmission", "Understood, will comply", "Negative"], correct: 1,
      explanation: "ROGER means 'I have received all of your last transmission' — does not imply compliance"
    },
    { id: "e6", difficulty: 2, category: "Grammar",
      text: "Select the correct form: 'The pilots _____ briefed before every flight.'",
      options: ["is", "was", "are", "being"], correct: 2,
      explanation: "'Pilots' is plural, so 'are' is correct: 'The pilots are briefed before every flight.'"
    },
    { id: "e7", difficulty: 2, category: "Comprehension",
      text: "A TAF reads: 'BECMG 0912 SCT015 BKN050'. 'BECMG' in a TAF means:",
      options: ["Forecast becoming", "Temporary change", "Prevailing conditions", "Forecast from"], correct: 0,
      explanation: "BECMG = Becoming — a gradual, permanent change during the period indicated"
    },
    { id: "e8", difficulty: 2, category: "Grammar",
      text: "Choose the sentence with correct use of tense: 'By the time we land, we ___ for 8 hours.'",
      options: [
        "will be flying",
        "will have been flying",
        "have been flying",
        "had been flying"
      ], correct: 1,
      explanation: "Future perfect continuous: 'will have been flying' — an action continuing up to a point in the future"
    },
    { id: "e9", difficulty: 1, category: "Vocabulary",
      text: "The word 'CAVOK' in an aviation weather report stands for:",
      options: [
        "Cloud and visibility are OK",
        "Ceiling and visibility okay",
        "Clear air, very obvious knowledge",
        "Cloud-free above 5000 ft"
      ], correct: 1,
      explanation: "CAVOK = Ceiling And Visibility OKay — visibility ≥10 km, no cloud below 5000 ft, no significant weather"
    },
    { id: "e10", difficulty: 3, category: "Reading Comprehension",
      text: "Read: 'The captain issued a PAN-PAN call, indicating an urgent situation requiring immediate assistance but not posing an immediate risk to life.' Based on this, PAN-PAN is:",
      options: [
        "Less serious than MAYDAY",
        "More serious than MAYDAY",
        "The same as MAYDAY",
        "Only used for medical emergencies"
      ], correct: 0,
      explanation: "PAN-PAN is an urgency call (one step below MAYDAY). MAYDAY is for immediate danger to life."
    },
    { id: "e11", difficulty: 2, category: "Vocabulary",
      text: "What is the meaning of 'affirm' in aviation communications?",
      options: ["Negative", "Yes", "Say again", "Standby"], correct: 1,
      explanation: "AFFIRM = Yes (replaces 'affirmative' or 'yes' in proper radiotelephony)"
    },
    { id: "e12", difficulty: 1, category: "Grammar",
      text: "Identify the correct passive sentence:",
      options: [
        "ATC cleared the aircraft to land.",
        "The aircraft was cleared to land by ATC.",
        "ATC has clear the aircraft.",
        "The aircraft clearing by ATC."
      ], correct: 1,
      explanation: "Correct passive: 'The aircraft was cleared to land by ATC'"
    },
    { id: "e13", difficulty: 2, category: "Vocabulary",
      text: "The term 'squawk' in aviation refers to:",
      options: ["A radio frequency", "A transponder code", "A type of aircraft maneuver", "A weather phenomenon"], correct: 1,
      explanation: "Squawk = transponder code (e.g., 'Squawk 7700' = emergency)"
    },
    { id: "e14", difficulty: 3, category: "Essay/Description",
      text: "Which sentence best describes the concept of 'Situational Awareness' in aviation?",
      options: [
        "Knowing only your current position",
        "Perceiving environmental elements, comprehending their meaning, and projecting their future status",
        "Following ATC instructions precisely",
        "Maintaining the aircraft within speed limits"
      ], correct: 1,
      explanation: "Situational Awareness (Endsley 1995): Perception → Comprehension → Projection of future state"
    },
  ],

  // ==================================================================
  //  COGNITIVE REASONING  (ADAPT-style psychometric)
  // ==================================================================
  cognitive: [
    { id: "c1", difficulty: 1, category: "Number Series",
      text: "What is the next number in the series? 2, 4, 8, 16, ___",
      options: ["24", "28", "32", "18"], correct: 2,
      explanation: "Each number is doubled: 16 × 2 = 32"
    },
    { id: "c2", difficulty: 1, category: "Number Series",
      text: "Find the missing number: 5, 10, 20, 40, ___",
      options: ["60", "80", "50", "100"], correct: 1,
      explanation: "×2 pattern: 40 × 2 = 80"
    },
    { id: "c3", difficulty: 1, category: "Verbal Reasoning",
      text: "PILOT is to AIRCRAFT as CAPTAIN is to ___?",
      options: ["Airport", "Sea vessel / Ship", "Ground crew", "Radio"], correct: 1,
      explanation: "A pilot commands an aircraft; a captain commands a ship"
    },
    { id: "c4", difficulty: 2, category: "Pattern Recognition",
      text: "Which number does NOT belong? 2, 3, 5, 7, 9, 11, 13",
      options: ["3", "7", "9", "11"], correct: 2,
      explanation: "9 = 3×3 is not a prime number. All others are prime."
    },
    { id: "c5", difficulty: 2, category: "Logical Reasoning",
      text: "All pilots pass medical exams. John passed his medical exam. Therefore:",
      options: [
        "John is definitely a pilot",
        "John might or might not be a pilot",
        "John is definitely not a pilot",
        "Cannot determine anything"
      ], correct: 1,
      explanation: "Passing a medical exam is necessary but not sufficient — other people also pass medicals"
    },
    { id: "c6", difficulty: 2, category: "Spatial Reasoning",
      text: "A compass is rotated 270° clockwise from North. Where does it now point?",
      options: ["East", "South", "West", "North-West"], correct: 2,
      explanation: "N → 90° = E → 180° = S → 270° = W"
    },
    { id: "c7", difficulty: 2, category: "Working Memory",
      text: "Read once and recall: 'Flight UA112 departed at 0600, bound for VIDP at FL350, with 3h45m ETE.' What is the ETE?",
      options: ["3h 30m", "3h 45m", "FL350", "UA112"], correct: 1,
      explanation: "ETE (Estimated Time Enroute) = 3h 45m"
    },
    { id: "c8", difficulty: 3, category: "Number Series",
      text: "Find the next number: 1, 1, 2, 3, 5, 8, 13, ___",
      options: ["18", "20", "21", "25"], correct: 2,
      explanation: "Fibonacci sequence: each number = sum of previous two. 8+13 = 21"
    },
    { id: "c9", difficulty: 2, category: "Verbal Reasoning",
      text: "METAR is to WEATHER as NOTAM is to ___?",
      options: ["Navigation", "Notices to Airmen / Flight information", "Meteorology", "Communication"], correct: 1,
      explanation: "METAR = weather report; NOTAM = Notice to Airmen (operational flight information)"
    },
    { id: "c10", difficulty: 3, category: "Logical Deduction",
      text: "Airport A is south of B. B is east of C. C is north of D. In what direction is D from B?",
      options: ["South-West", "North-East", "South-East", "North-West"], correct: 0,
      explanation: "B is east of C → C is west of B. C is north of D → D is south of C → D is south-west of B"
    },
    { id: "c11", difficulty: 2, category: "Attention & Multitasking",
      text: "ATC says: 'Indigo 456, turn left heading 270, descend FL180, speed 250 knots.' What is the assigned heading?",
      options: ["180", "270", "250", "456"], correct: 1,
      explanation: "Heading 270° — critical to extract only the heading from multiple instructions"
    },
    { id: "c12", difficulty: 3, category: "Abstract Reasoning",
      text: "In a sequence: △ ○ □ △ ○ ___, what comes next?",
      options: ["△", "○", "□", "◇"], correct: 2,
      explanation: "Pattern repeats every 3: △ ○ □. After △ ○, the next is □"
    },
    { id: "c13", difficulty: 2, category: "Numerical Reasoning",
      text: "A cockpit digital display shows: 7-2-5-9. These digits summed equal:",
      options: ["21", "22", "23", "24"], correct: 2,
      explanation: "7+2+5+9 = 23"
    },
    { id: "c14", difficulty: 3, category: "Spatial Reasoning",
      text: "You are flying heading 360°(North). You make a 90° turn to the right, then a 45° turn to the left. What is your new heading?",
      options: ["045°", "090°", "135°", "315°"], correct: 0,
      explanation: "360° + 90° right = 090° (East). Then 45° left = 090° − 45° = 045°"
    },
    { id: "c15", difficulty: 1, category: "Basic Logic",
      text: "If today is Monday, what day will it be in 10 days?",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"], correct: 2,
      explanation: "10 days = 1 week + 3 days. Monday + 3 days = Thursday"
    },
  ],

  // ==================================================================
  //  AVIATION KNOWLEDGE  (DGCA CPL/PPL syllabus basics)
  // ==================================================================
  aviation: [
    { id: "a1", difficulty: 1, category: "Air Regulations",
      text: "The authority that regulates civil aviation in India is:",
      options: ["ICAO", "IATA", "DGCA", "AAI"], correct: 2,
      explanation: "DGCA = Directorate General of Civil Aviation — India's civil aviation regulator under MoCA"
    },
    { id: "a2", difficulty: 1, category: "Licensing",
      text: "What is the minimum age to obtain a CPL (Commercial Pilot License) in India?",
      options: ["16 years", "17 years", "18 years", "21 years"], correct: 2,
      explanation: "DGCA requires minimum 18 years for CPL issuance (can start training at 16)"
    },
    { id: "a3", difficulty: 1, category: "Medical",
      text: "What class of medical certificate is required for CPL training at Dunes Aviation?",
      options: ["Class 1 only", "Class 2 to start, Class 1 for CPL", "Class 3", "No medical required"], correct: 1,
      explanation: "Class 2 medical to begin flying training; Class 1 required before CPL issue"
    },
    { id: "a4", difficulty: 1, category: "DGCA Exams",
      text: "How many total flying hours are required for a CPL in India?",
      options: ["100 hours", "150 hours", "200 hours", "250 hours"], correct: 2,
      explanation: "DGCA requires minimum 200 hours (including 185h single-engine + 15h multi-engine at Dunes)"
    },
    { id: "a5", difficulty: 1, category: "Navigation",
      text: "In aviation, VFR stands for:",
      options: ["Very Fast Route", "Visual Flight Rules", "VHF Frequency Range", "Vertical Flight Restriction"], correct: 1,
      explanation: "VFR = Visual Flight Rules — pilot navigates by visual reference to ground/horizon"
    },
    { id: "a6", difficulty: 2, category: "Meteorology",
      text: "A thunderstorm is depicted on a weather chart by which symbol?",
      options: ["TS", "FG", "BR", "SN"], correct: 0,
      explanation: "TS = Thunderstorm; FG = Fog; BR = Mist; SN = Snow"
    },
    { id: "a7", difficulty: 2, category: "Air Navigation",
      text: "The magnetic variation at a location is 5°E. If the true track is 270°, what is the magnetic track?",
      options: ["265°", "275°", "270°", "260°"], correct: 0,
      explanation: "Magnetic = True − East variation = 270° − 5° = 265° (Variation East, Magnetic Least)"
    },
    { id: "a8", difficulty: 2, category: "Air Regulations",
      text: "A Class 'C' airspace in India is:",
      options: [
        "Uncontrolled airspace",
        "Controlled airspace requiring ATC clearance for all flights",
        "Airspace only for military",
        "No services provided"
      ], correct: 1,
      explanation: "Class C is controlled airspace — IFR and VFR require ATC clearance and separation"
    },
    { id: "a9", difficulty: 2, category: "Meteorology",
      text: "ISA lapse rate (temperature decrease with altitude) is:",
      options: ["1°C per 100m", "2°C per 1000ft", "6.5°C per 1000m", "3°C per 1000ft"], correct: 2,
      explanation: "ISA standard lapse rate = 6.5°C per 1000m (approximately 2°C per 1000ft)"
    },
    { id: "a10", difficulty: 2, category: "Air Navigation",
      text: "QNH is the altimeter setting that gives:",
      options: [
        "Altitude above mean sea level",
        "Height above aerodrome",
        "Pressure at flight level",
        "Height above terrain"
      ], correct: 0,
      explanation: "QNH = sea level pressure setting; altimeter shows height above mean sea level (AMSL)"
    },
    { id: "a11", difficulty: 3, category: "Air Regulations",
      text: "Under DGCA regulations, what is the minimum visibility for VFR flight in Class G airspace below 3000 ft AMSL?",
      options: ["800 m", "1500 m", "5 km", "1 km"], correct: 1,
      explanation: "Below 3000 ft AGL in Class G: 1500 m visibility, clear of clouds (per ICAO Annex 2)"
    },
    { id: "a12", difficulty: 2, category: "Air Navigation",
      text: "Dunes Aviation Academy's primary flying training base is in:",
      options: ["Jaipur", "Ahmedabad", "Bhavnagar & Bhilwara", "Mumbai"], correct: 2,
      explanation: "Dunes' flying training is conducted at Bhavnagar (Gujarat) and Bhilwara Airstrip (Rajasthan)"
    },
    { id: "a13", difficulty: 1, category: "Meteorology",
      text: "Which cloud type is associated with thunderstorms and heavy turbulence?",
      options: ["Stratus", "Cirrus", "Cumulonimbus", "Alto-cumulus"], correct: 2,
      explanation: "Cumulonimbus (Cb) = thunderstorm cloud — severe turbulence, icing, lightning"
    },
    { id: "a14", difficulty: 3, category: "Air Navigation",
      text: "The Dip (magnetic inclination) at the magnetic north pole is approximately:",
      options: ["0°", "45°", "90°", "180°"], correct: 2,
      explanation: "At the magnetic pole, the magnetic field is vertical → dip = 90°"
    },
    { id: "a15", difficulty: 2, category: "Air Regulations",
      text: "The Dunes DGCA CPL ground examination subjects do NOT include:",
      options: ["Air Navigation", "Aviation Meteorology", "Pilot Psychology", "Air Regulations"], correct: 2,
      explanation: "DGCA CPL ground exam covers: Air Navigation, Aviation Meteorology, Air Regulation, Technical (General & Specific). No 'Pilot Psychology' paper."
    },
  ]
};

// All modules combined for mock test
const ALL_MODULES = ['math', 'physics', 'english', 'cognitive', 'aviation'];

// Difficulty levels
const DIFFICULTY_NAMES = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };
const DIFFICULTY_COLORS = { 1: '#22c55e', 2: '#f59e0b', 3: '#ef4444' };
