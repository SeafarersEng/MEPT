hereဈ/* ============================================================
   speak.js (UPDATED - Audio Recording + Voice to Text)
   ============================================================ */

// ============================================================
// 1. SECURE KEYS & DEVICE FINGERPRINT
// ============================================================
const SECURE_ALLOWED_KEYS = [
  "WThWMk01NTA=", "UjRCOVEzMTI=", "SzFXN1o4NDU=", "VDNENVg2MTk=", "TTZQMUg4NzI=",
  "RjlZM1cyMTA=", "QjJWOEs1NDM=", "SDRNMVo3NjA=", "QzhGNVAyMTk=", "WDNUOVE2NTQ=",
  "UzdSMlc4MTA=", "TjFLNUQ0MzI=", "UDlGM0c3NjU=", "VzJCOEMxMDQ=", "SjZWME41NDI=",
  "TDRUOVoyMTM=", "RzNIN1k2NTQ=", "RDlDMU04NzA=", "VjVLMlIxNDM=", "UThQNFQzMTk=",
  "UDZBMks3NDM=", "VzdDMU41OTA=", "RzRGOFMyMTA=", "WjlNM1I1NDA=", "VjJYNks4OTE=",
  "TDFRNEI3NjU=", "SjdSMlQ5MDE=", "SzNONVc4MTI=", "RDZWMFM0Mzk=", "QjlIM0YyNTE=",
  "WTRQOFo2MTU=", "TTJUNlI4OTA=", "UTFENVY0MzI=", "RzhYM0I3NjU=", "SzlQMk00MTA=",
  "WjRXMUY4OTA=", "RjZWM1MyMTk=", "TjhENUs0MzE=", "RjJNN1E2NTQ=", "QzFKOVQ4NTI=",
  "TDNQOVk4MTI=", "WDdSMkI2NTQ=", "UTRXMUg1NzY=", "VDJCOFg5MDE=", "SzdWMU40MzI=",
  "UDhEMko1NjA=", "UzRZOUUwMw==", "TTNXN1I1NDI=", "RzhQMlQ2MTA=", "WjFNOUs4NDM=",
  "WDRCN1YyMTk=", "TjNXMUo1NjQ=", "QzhHNFMyMTA=", "RjZUMk44OTU=", "TDNGOVk1MTI=",
  "SDFNN0Q2MzQ=", "UDRLMlc4MTU=", "VDlSMUI1NDI=", "VjNaOEMxOTA=", "SjZONEYzMjE=",
  "RzFTNlU0ODk=", "MThDNUszMTA=", "VjNIOUIyMTU=", "TDZZMVo4NDM=", "UjlQNFc1MjE=",
  "RjJCOE02MTQ=", "WDFLN1A5NTA=", "TjhGM1YyMTk=", "WzRDMVo3ODY=", "TDlENUgyMTA=",
  "SzNUOEY1NDA=", "UDZNMlA4MTc=", "SjFWOVg1NDM=", "RDhCNFcyMTk=", "SDJZN1o2MTQ=",
  "RzlTM1I0NTA=", "QzFYN004OTI=", "RjhQMlQ2MTA=", "QjRON1c1MjM=", "UzlNMlY0MTU=",
  "TjJUMVc2NDU=", "WjdRNEY4OTA=", "SzJQOFY0NTY=", "SjlGMlM2MTA=", "RzNNNUM3MTk=",
  "RDhWMVg0MjM=", "VDRRMk44MTU=", "RjNIOVo1NDA=", "QjdLMk00MzE=", "UDFXNlM4NzI=",
  "WThHMU4zNTQ=", "RjRSOUI2MTA=", "TTJYN0s4OTE=", "UzZQM0M1NDI=", "NjlUMUY4MzA=",
  "VzhWMlE2NTQ=", "SzRCOVoxMDM=", "TDdNM0g1NDI=", "WDFEOVA4NjA=", "WjZGMkM3NDM="
];

function generateDeviceFingerprint() {
  let navigator_info = window.navigator.userAgent + window.navigator.language + window.screen.colorDepth;
  let hash = 0;
  for (let i = 0; i < navigator_info.length; i++) {
    hash = (hash << 5) - hash + navigator_info.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

function verifySecureActivation() {
  const entered = keyInput.value.trim().toUpperCase();
  const currentDevice = generateDeviceFingerprint();
  authError.classList.add('hidden');
  deviceLockError.classList.add('hidden');

  const oldResetBtn = document.getElementById('custom-reset-btn');
  if (oldResetBtn) oldResetBtn.remove();

  const encodedEntered = btoa(entered);

  if (SECURE_ALLOWED_KEYS.includes(encodedEntered)) {
    const savedDeviceForThisKey = localStorage.getItem(`lock_${entered}`);

    if (savedDeviceForThisKey && savedDeviceForThisKey !== currentDevice) {
      deviceLockError.classList.remove('hidden');
      deviceLockError.innerText = "🔒 ဒီ Activation Key ကို အခြားစက်တွင် သုံးထားပြီးဖြစ်ပါတယ်။ ကျေးဇူးပြု၍ သင့်ကိုယ်ပိုင် Key ကိုသာ သုံးပါ။";
      return;
    }

    localStorage.setItem(`lock_${entered}`, currentDevice);
    localStorage.setItem('session_active', 'true');
    authScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    initResponsiveDashboard();
  } else {
    authError.classList.remove('hidden');
    authError.innerText = "❌ Activation Key မှားနေပါတယ်။ စစ်ဆေးပြီး ပြန်ရိုက်ပါ။";
  }
}

function lockAppAccess() {
  localStorage.removeItem('session_active');
  startScreen.classList.add('hidden');
  authScreen.classList.remove('hidden');
  keyInput.value = '';
}

// ============================================================
// 2. EXAM SETS (အရင်အတိုင်း)
// ============================================================
const examSets = {
  set1: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself and tell me where you live.", image: "", keywords: ["introduce", "name", "live", "hometown", "where"] },
    { type: "short", timeLimit: 50, prompt: "Why do you want to become a seafarer?", image: "", keywords: ["seafarer", "maritime", "why", "become", "sailor", "career"] },
    { type: "short", timeLimit: 50, prompt: "What is your target rank on board, and what are the main duties?", image: "", keywords: ["rank", "duties", "target", "officer", "responsibilities"] },
    { type: "short", timeLimit: 50, prompt: "What are your hobbies or interests in your free time?", image: "", keywords: ["hobbies", "interests", "free", "time", "enjoy"] },
    { type: "short", timeLimit: 50, prompt: "How do you feel about working with a multicultural crew?", image: "", keywords: ["multicultural", "crew", "culture", "work", "different"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the fire-fighting drill being performed on deck, including the equipment and PPE used.", image: "set1_firefight.png", keywords: ["fire", "fighting", "drill", "deck", "equipment", "ppe", "extinguisher"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'In very hot weather, seafarers should be allowed to not wear heavy boilersuits or safety shoes to prevent heatstroke.' What is your position?", image: "", keywords: ["hot", "weather", "heatstroke", "boilersuit", "safety", "shoes", "prevent"] }
  ],
  set2: [
    { type: "short", timeLimit: 50, prompt: "Please state your full name and Passport number.", image: "", keywords: ["name", "passport", "number", "full", "state"] },
    { type: "short", timeLimit: 50, prompt: "Who encouraged or inspired you to join the maritime industry?", image: "", keywords: ["encouraged", "inspired", "maritime", "industry", "who"] },
    { type: "short", timeLimit: 50, prompt: "How will you handle being away from your family for many months?", image: "", keywords: ["away", "family", "months", "handle", "manage", "miss"] },
    { type: "short", timeLimit: 50, prompt: "What is the most important quality of a good seafarer, in your opinion?", image: "", keywords: ["quality", "good", "seafarer", "important", "opinion", "trait"] },
    { type: "short", timeLimit: 50, prompt: "What is your long-term goal in this career?", image: "", keywords: ["long-term", "goal", "career", "future", "plan"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the mooring operation at the forward station, including the PPE and safety precautions.", image: "set2_mooring.png", keywords: ["mooring", "operation", "forward", "station", "ppe", "safety", "precautions"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'If a crewmember falls overboard, you should jump into the water immediately to save him before you lose sight of him.' Do you agree?", image: "", keywords: ["overboard", "jump", "water", "save", "sight", "agree"] }
  ],
  set3: [
    { type: "short", timeLimit: 50, prompt: "Please introduce yourself and state your date of birth.", image: "", keywords: ["introduce", "name", "date", "birth", "state"] },
    { type: "short", timeLimit: 50, prompt: "Seafaring is a hard and stressful job. Why do you still want to do it?", image: "", keywords: ["hard", "stressful", "why", "want", "job", "still"] },
    { type: "short", timeLimit: 50, prompt: "Where did you complete your pre-sea and BST training?", image: "", keywords: ["completed", "pre-sea", "bst", "training", "where"] },
    { type: "short", timeLimit: 50, prompt: "If a company offers you a contract that is longer than usual, will you accept it?", image: "", keywords: ["contract", "longer", "accept", "offer", "usual"] },
    { type: "short", timeLimit: 50, prompt: "What department will you work in, and what is your current knowledge about it?", image: "", keywords: ["department", "knowledge", "work", "current", "role"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Explain the meaning of the 'Snap-Back Zone' markings and why seafarers must avoid this area during mooring.", image: "set3_snapback.png", keywords: ["snap-back", "zone", "markings", "avoid", "mooring", "danger"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'You are busy, and you just need to enter a pump room for 2 minutes to check a gauge. It is okay to enter without a permit as long as you are quick.' Do you agree?", image: "", keywords: ["pump", "room", "permit", "check", "gauge", "agree", "safety"] }
  ],
  set4: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself and mention the type of ship you prefer to work on.", image: "", keywords: ["introduce", "ship", "type", "prefer", "work"] },
    { type: "short", timeLimit: 50, prompt: "What is your strongest quality that will make you a good seafarer?", image: "", keywords: ["strongest", "quality", "good", "seafarer", "trait"] },
    { type: "short", timeLimit: 50, prompt: "Seafaring involves a lot of teamwork. Can you give an example of how you work in a team?", image: "", keywords: ["teamwork", "example", "team", "work", "together"] },
    { type: "short", timeLimit: 50, prompt: "What is your current English proficiency level for maritime work?", image: "", keywords: ["english", "proficiency", "level", "maritime", "work"] },
    { type: "short", timeLimit: 50, prompt: "If your superior asks you to do something that is not safe, what will you do?", image: "", keywords: ["superior", "not safe", "unsafe", "do", "refuse", "report"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the watchkeeping duties in the Engine Control Room and the importance of monitoring machinery parameters.", image: "set4_ecr.png", keywords: ["watchkeeping", "engine", "control", "room", "monitoring", "machinery", "parameters"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Port State Control (PSC) is just trouble. Seafarers should hide any problems from the inspectors to avoid ship detention.' What is your view?", image: "", keywords: ["psc", "port", "state", "control", "hide", "inspectors", "detention"] }
  ],
  set5: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself and state your father's name.", image: "", keywords: ["introduce", "father", "name", "state"] },
    { type: "short", timeLimit: 50, prompt: "What are your career aspirations for the next 5 years?", image: "", keywords: ["career", "aspirations", "next", "years", "future"] },
    { type: "short", timeLimit: 50, prompt: "Seafarers face rough sea conditions. Are you physically and mentally ready?", image: "", keywords: ["rough", "sea", "conditions", "physically", "mentally", "ready"] },
    { type: "short", timeLimit: 50, prompt: "How do you spend your free time while you are waiting for a ship contract?", image: "", keywords: ["free", "time", "waiting", "contract", "spend"] },
    { type: "short", timeLimit: 50, prompt: "If a crewmember from another country disrespects your culture, how will you respond?", image: "", keywords: ["crewmember", "another", "country", "disrespects", "culture", "respond"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the CPR (Cardiopulmonary Resuscitation) procedure being performed and explain why first aid training is essential at sea.", image: "set5_cpr.png", keywords: ["cpr", "cardiopulmonary", "resuscitation", "first", "aid", "training", "essential"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Safety Management System (SMS) paperwork is a waste of time. It is better to just focus on the physical job and skip the forms.' Argue your position.", image: "", keywords: ["sms", "safety", "management", "paperwork", "waste", "forms", "skip"] }
  ],
  set6: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself and tell me about your hometown.", image: "", keywords: ["introduce", "hometown", "city", "village", "tell"] },
    { type: "short", timeLimit: 50, prompt: "If this is your first ship, what are you most looking forward to? (or describe your previous ship experience).", image: "", keywords: ["first", "ship", "looking", "forward", "previous", "experience"] },
    { type: "short", timeLimit: 50, prompt: "What are your salary expectations, and how do you plan to utilize your income?", image: "", keywords: ["salary", "expectations", "plan", "utilize", "income"] },
    { type: "short", timeLimit: 50, prompt: "How do you usually cope with sea sickness, bad weather, or high stress on board?", image: "", keywords: ["cope", "sea", "sickness", "bad", "weather", "stress"] },
    { type: "short", timeLimit: 50, prompt: "How important is it to maintain a good professional relationship with the Chief Officer or Chief Engineer?", image: "", keywords: ["professional", "relationship", "chief", "officer", "engineer", "important"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the abandon ship drill, specifically the launching of the lifeboat and the correct use of the life jacket.", image: "set6_lifeboat.png", keywords: ["abandon", "ship", "drill", "lifeboat", "launching", "life", "jacket"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Social media and mobile phones should be completely banned on board to keep the crew focused on safety.' Do you agree or disagree?", image: "", keywords: ["social", "media", "mobile", "phones", "banned", "focused", "safety"] }
  ],
  set7: [
    { type: "short", timeLimit: 50, prompt: "Please state your full name and current residential address.", image: "", keywords: ["name", "residential", "address", "current", "full"] },
    { type: "short", timeLimit: 50, prompt: "Can you describe any shore-based job or previous sea experience you have had?", image: "", keywords: ["shore-based", "job", "previous", "sea", "experience"] },
    { type: "short", timeLimit: 50, prompt: "In your opinion, who has the ultimate responsibility for safety on board a ship?", image: "", keywords: ["opinion", "ultimate", "responsibility", "safety", "captain", "master"] },
    { type: "short", timeLimit: 50, prompt: "What do you do to keep yourself physically fit during a long sea voyage?", image: "", keywords: ["physically", "fit", "long", "voyage", "exercise"] },
    { type: "short", timeLimit: 50, prompt: "What do you know about garbage segregation and waste management according to MARPOL?", image: "", keywords: ["garbage", "segregation", "waste", "management", "marpol", "disposal"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Explain how to correctly use a portable fire extinguisher (PASS method) on a small fire in the galley.", image: "set7_extinguisher.png", keywords: ["portable", "fire", "extinguisher", "pass", "method", "galley", "small", "fire"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'On a busy turnaround day, it is acceptable to skip the daily safety inspection rounds to save time.' What is your argument?", image: "", keywords: ["turnaround", "skip", "daily", "safety", "inspection", "rounds", "save", "time"] }
  ],
  set8: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself including your age and nationality.", image: "", keywords: ["introduce", "age", "nationality", "country", "name"] },
    { type: "short", timeLimit: 50, prompt: "Why did you choose this specific rank (e.g., OS, AB, Oiler, 3rd Officer) to apply for?", image: "", keywords: ["choose", "rank", "os", "ab", "oiler", "officer", "apply"] },
    { type: "short", timeLimit: 50, prompt: "Can you briefly explain the 'Chain of Command' on a merchant vessel?", image: "", keywords: ["chain", "command", "merchant", "vessel", "explain"] },
    { type: "short", timeLimit: 50, prompt: "Tell me about a 'near-miss' accident you have witnessed or heard about. How could it have been prevented?", image: "", keywords: ["near-miss", "accident", "witnessed", "prevented", "avoid"] },
    { type: "short", timeLimit: 50, prompt: "What does 'STCW' stand for, and why is this convention critical for your career?", image: "", keywords: ["stcw", "stand", "convention", "critical", "career", "training"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the potential safety hazards in the galley and the importance of wearing correct PPE while cooking.", image: "set8_galley.png", keywords: ["safety", "hazards", "galley", "cooking", "ppe", "correct", "wearing"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Crew members should be allowed to keep a small amount of alcohol in their cabins to relax after long working hours.' Do you support this?", image: "", keywords: ["alcohol", "cabins", "relax", "long", "working", "hours", "support"] }
  ],
  set9: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself and describe your educational background.", image: "", keywords: ["introduce", "educational", "background", "school", "degree"] },
    { type: "short", timeLimit: 50, prompt: "What specifically attracts you to deep-sea shipping or offshore work?", image: "", keywords: ["attracts", "deep-sea", "shipping", "offshore", "work"] },
    { type: "short", timeLimit: 50, prompt: "When the ship is berthing, how do you communicate with the Pilot effectively?", image: "", keywords: ["berthing", "communicate", "pilot", "effectively", "bridge"] },
    { type: "short", timeLimit: 50, prompt: "Describe an emergency drill (fire, man overboard, or abandon ship) that you have actively participated in.", image: "", keywords: ["emergency", "drill", "fire", "overboard", "abandon", "participated"] },
    { type: "short", timeLimit: 50, prompt: "How do you ensure that a proper lookout is maintained while you are on navigational watch?", image: "", keywords: ["lookout", "maintained", "navigational", "watch", "ensure"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the bridge navigation equipment, including ECDIS and Radar, and how they assist in collision avoidance.", image: "set9_bridge.png", keywords: ["bridge", "navigation", "equipment", "ecdis", "radar", "collision", "avoidance"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'When a Pilot is on board, the Master is completely relieved of all navigational responsibility.' Do you agree with this statement?", image: "", keywords: ["pilot", "master", "relieved", "navigational", "responsibility", "agree"] }
  ],
  set10: [
    { type: "short", timeLimit: 50, prompt: "Introduce yourself and tell me about your family background.", image: "", keywords: ["introduce", "family", "background", "parents", "siblings"] },
    { type: "short", timeLimit: 50, prompt: "What do you understand about MARPOL Annex V regarding the discharge of garbage at sea?", image: "", keywords: ["marpol", "annex", "discharge", "garbage", "sea", "plastic"] },
    { type: "short", timeLimit: 50, prompt: "Seafaring can be lonely. How do you handle boredom and isolation during long voyages?", image: "", keywords: ["lonely", "boredom", "isolation", "handle", "voyages"] },
    { type: "short", timeLimit: 50, prompt: "Why is it vital to complete a 'pre-arrival checklist' before entering a foreign port?", image: "", keywords: ["vital", "pre-arrival", "checklist", "entering", "foreign", "port"] },
    { type: "short", timeLimit: 50, prompt: "If you receive multiple conflicting orders from senior officers, how would you prioritize your tasks?", image: "", keywords: ["conflicting", "orders", "senior", "prioritize", "tasks"] },
    { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the correct procedure for discharging ballast water and the environmental risks of oil spills during bunkering.", image: "set10_environment.png", keywords: ["ballast", "water", "discharging", "environmental", "oil", "spills", "bunkering"] },
    { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Regular crew safety drills are simply for passing inspections and do not actually prepare us for real emergencies.'
