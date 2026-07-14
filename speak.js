
// ==========================================
// 1. ACCESS CONTROL & FINGERPRINT SECURITY
// ==========================================
const SECURE_ALLOWED_KEYS = [
  "WThWMk01NTA=", "UjRCOVEzMTI=", "SzFXN1o4NDU=", "VDNENVg2MTk=", "TTZQMUg4NzI=",
  "RjlZM1cyMTA=", "QjJWOEs1NDM=", "SDRNMVo3NjA=", "QzhGNVAyMTk=", "WDNUOVE2NTQ=",
  "UzdSMlc4MTA=", "TjFLNUQ0MzI=", "UDlGM0c3NjU=", "VzJCOEMxMDQ=", "SjZWME41NDI=",
  "TDRUOVoyMTM=", "RzNIN1k2NTQ=", "RDlDMU04NzA=", "VjVLMlIxNDM=", "UThQNFQzMTk=",
  "UDZBMks3NDM=", "VzdDMU41OTA=", "RzRGOFMyMTA=", "WjlNM1I1NDA=", "VjJYNks4OTE=",
  "TDFRNEI3NjU=", "SjdSMlQ5MDE=", "SzNONVc4MTI=", "RDZWMFM0Mzk=", "QjlIM0YyNTE=",
  "WTRQOFo2MTU=", "TTJUNlI4OTA=", "UTFENVY0MzI=", "RzhYM0I3NjU=", "SzlQMk00MTA=",
  "WjRXMUY4OTA=", "RjZWM1MyMTk=", "TjhENUs0MzE=", "UjJNN1E2NTQ=", "QzFKOVQ4NTI=",
  "TDNQOVk4MTI=", "WDdSMkI2NTQ=", "UTRXMUg1NzY=", "VDJCOFg5MDE=", "SzdWMU40MzI=",
  "UDhEMko1NjA=", "UzRZOUUwMw==", "TTNXN1I1NDI=", "RzhQMlQ2MTA=", "WjFNOUs4NDM=",
  "WDRCN1YyMTk=", "TjNXMUo1NjQ=", "QzhHNFMyMTA=", "RjZUMk44OTU=", "TDNGOVk1MTI=",
  "SDFNN0Q2MzQ=", "UDRLMlc4MTU=", "VDlSMUI1NDI=", "VjNaOEMxOTA=", "SjZONEYzMjE=",
  "RzFTNlU0ODk=", "TThDNUszMTA=", "VjNIOUIyMTU=", "TDZZMVo4NDM=", "UjlQNFc1MjE=",
  "RjJCOE02MTQ=", "WDFLN1A5NTA=", "TjhGM1YyMTk=", "VzRDMVo3ODY=", "TDlENUgyMTA=",
  "SzNUOEY1NDA=", "UDZNMlA4MTc=", "SjFWOVg1NDM=", "RDhCNFcyMTk=", "SDJZN1o2MTQ=",
  "RzlTM1I0NTA=", "QzFYN004OTI=", "RjhQMlQ2MTA=", "QjRON1c1MjM=", "UzlNMlY0MTU=",
  "TjJUMVc2NDU=", "WjdRNEY4OTA=", "SzJQOFY0NTY=", "SjlGMlM2MTA=", "RzNNNUM3MTk=",
  "RDhWMVg0MjM=", "VDRRMk44MTU=", "UjNIOVo1NDA=", "QjdLMk00MzE=", "UDFXNlM4NzI=",
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

// ==========================================
// 2. DATA MATRIX: 10-SET MEPT SPEAKING
// ==========================================
const examSets = {
    set1: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself and tell me where you live.", image: "" },
        { type: "short", timeLimit: 50, prompt: "Why do you want to become a seafarer?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What is your target rank on board, and what are the main duties?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What are your hobbies or interests in your free time?", image: "" },
        { type: "short", timeLimit: 50, prompt: "How do you feel about working with a multicultural crew?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the fire-fighting drill being performed on deck, including the equipment and PPE used.", image: "set1_firefight.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'In very hot weather, seafarers should be allowed to not wear heavy boilersuits or safety shoes to prevent heatstroke.' What is your position?", image: "" }
    ],
    set2: [
        { type: "short", timeLimit: 50, prompt: "Please state your full name and Passport number.", image: "" },
        { type: "short", timeLimit: 50, prompt: "Who encouraged or inspired you to join the maritime industry?", image: "" },
        { type: "short", timeLimit: 50, prompt: "How will you handle being away from your family for many months?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What is the most important quality of a good seafarer, in your opinion?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What is your long-term goal in this career?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the mooring operation at the forward station, including the PPE and safety precautions.", image: "set2_mooring.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'If a crewmember falls overboard, you should jump into the water immediately to save him before you lose sight of him.' Do you agree?", image: "" }
    ],
    set3: [
        { type: "short", timeLimit: 50, prompt: "Please introduce yourself and state your date of birth.", image: "" },
        { type: "short", timeLimit: 50, prompt: "Seafaring is a hard and stressful job. Why do you still want to do it?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Where did you complete your pre-sea and BST training?", image: "" },
        { type: "short", timeLimit: 50, prompt: "If a company offers you a contract that is longer than usual, will you accept it?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What department will you work in, and what is your current knowledge about it?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Explain the meaning of the 'Snap-Back Zone' markings and why seafarers must avoid this area during mooring.", image: "set3_snapback.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'You are busy, and you just need to enter a pump room for 2 minutes to check a gauge. It is okay to enter without a permit as long as you are quick.' Do you agree?", image: "" }
    ],
    set4: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself and mention the type of ship you prefer to work on.", image: "" },
        { type: "short", timeLimit: 50, prompt: "What is your strongest quality that will make you a good seafarer?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Seafaring involves a lot of teamwork. Can you give an example of how you work in a team?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What is your current English proficiency level for maritime work?", image: "" },
        { type: "short", timeLimit: 50, prompt: "If your superior asks you to do something that is not safe, what will you do?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the watchkeeping duties in the Engine Control Room and the importance of monitoring machinery parameters.", image: "set4_ecr.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Port State Control (PSC) is just trouble. Seafarers should hide any problems from the inspectors to avoid ship detention.' What is your view?", image: "" }
    ],
    set5: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself and state your father's name.", image: "" },
        { type: "short", timeLimit: 50, prompt: "What are your career aspirations for the next 5 years?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Seafarers face rough sea conditions. Are you physically and mentally ready?", image: "" },
        { type: "short", timeLimit: 50, prompt: "How do you spend your free time while you are waiting for a ship contract?", image: "" },
        { type: "short", timeLimit: 50, prompt: "If a crewmember from another country disrespects your culture, how will you respond?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the CPR (Cardiopulmonary Resuscitation) procedure being performed and explain why first aid training is essential at sea.", image: "set5_cpr.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Safety Management System (SMS) paperwork is a waste of time. It is better to just focus on the physical job and skip the forms.' Argue your position.", image: "" }
    ],
    set6: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself and tell me about your hometown.", image: "" },
        { type: "short", timeLimit: 50, prompt: "If this is your first ship, what are you most looking forward to? (or describe your previous ship experience).", image: "" },
        { type: "short", timeLimit: 50, prompt: "What are your salary expectations, and how do you plan to utilize your income?", image: "" },
        { type: "short", timeLimit: 50, prompt: "How do you usually cope with sea sickness, bad weather, or high stress on board?", image: "" },
        { type: "short", timeLimit: 50, prompt: "How important is it to maintain a good professional relationship with the Chief Officer or Chief Engineer?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the abandon ship drill, specifically the launching of the lifeboat and the correct use of the life jacket.", image: "set6_lifeboat.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Social media and mobile phones should be completely banned on board to keep the crew focused on safety.' Do you agree or disagree?", image: "" }
    ],
    set7: [
        { type: "short", timeLimit: 50, prompt: "Please state your full name and current residential address.", image: "" },
        { type: "short", timeLimit: 50, prompt: "Can you describe any shore-based job or previous sea experience you have had?", image: "" },
        { type: "short", timeLimit: 50, prompt: "In your opinion, who has the ultimate responsibility for safety on board a ship?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What do you do to keep yourself physically fit during a long sea voyage?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What do you know about garbage segregation and waste management according to MARPOL?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Explain how to correctly use a portable fire extinguisher (PASS method) on a small fire in the galley.", image: "set7_extinguisher.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'On a busy turnaround day, it is acceptable to skip the daily safety inspection rounds to save time.' What is your argument?", image: "" }
    ],
    set8: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself including your age and nationality.", image: "" },
        { type: "short", timeLimit: 50, prompt: "Why did you choose this specific rank (e.g., OS, AB, Oiler, 3rd Officer) to apply for?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Can you briefly explain the 'Chain of Command' on a merchant vessel?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Tell me about a 'near-miss' accident you have witnessed or heard about. How could it have been prevented?", image: "" },
        { type: "short", timeLimit: 50, prompt: "What does 'STCW' stand for, and why is this convention critical for your career?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the potential safety hazards in the galley and the importance of wearing correct PPE while cooking.", image: "set8_galley.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Crew members should be allowed to keep a small amount of alcohol in their cabins to relax after long working hours.' Do you support this?", image: "" }
    ],
    set9: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself and describe your educational background.", image: "" },
        { type: "short", timeLimit: 50, prompt: "What specifically attracts you to deep-sea shipping or offshore work?", image: "" },
        { type: "short", timeLimit: 50, prompt: "When the ship is berthing, how do you communicate with the Pilot effectively?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Describe an emergency drill (fire, man overboard, or abandon ship) that you have actively participated in.", image: "" },
        { type: "short", timeLimit: 50, prompt: "How do you ensure that a proper lookout is maintained while you are on navigational watch?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the bridge navigation equipment, including ECDIS and Radar, and how they assist in collision avoidance.", image: "set9_bridge.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'When a Pilot is on board, the Master is completely relieved of all navigational responsibility.' Do you agree with this statement?", image: "" }
    ],
    set10: [
        { type: "short", timeLimit: 50, prompt: "Introduce yourself and tell me about your family background.", image: "" },
        { type: "short", timeLimit: 50, prompt: "What do you understand about MARPOL Annex V regarding the discharge of garbage at sea?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Seafaring can be lonely. How do you handle boredom and isolation during long voyages?", image: "" },
        { type: "short", timeLimit: 50, prompt: "Why is it vital to complete a 'pre-arrival checklist' before entering a foreign port?", image: "" },
        { type: "short", timeLimit: 50, prompt: "If you receive multiple conflicting orders from senior officers, how would you prioritize your tasks?", image: "" },
        { type: "picture", timeLimit: 120, prompt: "Look at the picture. Describe the correct procedure for discharging ballast water and the environmental risks of oil spills during bunkering.", image: "set10_environment.png" },
        { type: "debate", timeLimit: 120, prompt: "Marlins Debate: 'Regular crew safety drills are simply for passing inspections and do not actually prepare us for real emergencies.' Argue your position.", image: "" }
    ]
};

// ==========================================
// 3. GLOBAL CONFIGURATIONS & STATE MANAGEMENT
// ==========================================
let currentActiveSet = [];
let currentIndex = 0;
let timerInterval = null;
let cumulativeWordCount = 0;

let speechSynth = window.speechSynthesis;
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognizer = speechRecognition ? new speechRecognition() : null;

const authScreen = document.getElementById('auth-screen');
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const finishScreen = document.getElementById('finish-screen');
const keyInput = document.getElementById('activation-key-input');
const authError = document.getElementById('auth-error');
const deviceLockError = document.getElementById('device-lock-error');
const setGrid = document.getElementById('set-selector-grid');

const btnNext = document.getElementById('btn-next');
const qNumber = document.getElementById('question-number');
const timerDisplay = document.getElementById('timer-display');
const timerBar = document.getElementById('timer-bar');
const qPrompt = document.getElementById('question-prompt');
const studentSpeech = document.getElementById('student-speech');
const examPic = document.getElementById('exam-picture');
const aiAvatar = document.getElementById('ai-avatar');
const exStatus = document.getElementById('examiner-status');

const gradeBadge = document.getElementById('grade-badge');
const gradeTitle = document.getElementById('grade-title');
const gradeDesc = document.getElementById('grade-desc');
const statVocab = document.getElementById('stat-vocab');
const statGrammar = document.getElementById('stat-grammar');
const statFluency = document.getElementById('stat-fluency');

// ==========================================
// 4. HELPER FUNCTION: Get MALE Voice (Any Device)
// ==========================================
function getMaleVoice() {
    const voices = speechSynth.getVoices();
    if (!voices || voices.length === 0) return null;

    const preferredVoices = [
        'Google UK English Male',
        'Google US English Male',
        'Microsoft David Desktop',
        'Microsoft David',
        'Alex',
        'Samantha'
    ];

    for (let pref of preferredVoices) {
        const found = voices.find(v => v.name.includes(pref));
        if (found) {
            console.log(`✅ AI Male Voice Selected: ${found.name} (${found.lang})`);
            return found;
        }
    }

    const maleByName = voices.find(v => v.name.toLowerCase().includes('male'));
    if (maleByName) {
        console.log(`✅ AI Male Voice Selected (by name): ${maleByName.name}`);
        return maleByName;
    }

    const nonFemale = voices.find(v => !v.name.toLowerCase().includes('female'));
    if (nonFemale) {
        console.log(`✅ AI Voice Selected (Non-Female): ${nonFemale.name}`);
        return nonFemale;
    }

    console.log(`✅ AI Voice Selected (Fallback): ${voices[0].name}`);
    return voices[0];
}

// ==========================================
// 5. FUNCTIONAL LOGIC & APP FLOW
// ==========================================
// ==========================================
// VERIFY ACTIVATION (Debug Version with Reset)
// ==========================================
function verifySecureActivation() {
    const entered = keyInput.value.trim().toUpperCase();
    const currentDevice = generateDeviceFingerprint();

    authError.classList.add('hidden');
    deviceLockError.classList.add('hidden');

    // ရှိပြီးသား Reset Button ဟောင်းရှိရင် ဖျက်ပစ်မယ်
    const oldResetBtn = document.getElementById('custom-reset-btn');
    if (oldResetBtn) oldResetBtn.remove();

    console.log("🔑 ရိုက်ထည့်ထားတဲ့ Key:", entered);
    const encodedEntered = btoa(entered);
    console.log("🔐 Base64 ပြောင်းပြီးသား Key:", encodedEntered);
    console.log("📋 ခွင့်ပြုထားတဲ့ Key စာရင်း:", SECURE_ALLOWED_KEYS);

    if (SECURE_ALLOWED_KEYS.includes(encodedEntered)) {
        console.log("✅ Key မှန်ပါတယ်။");
        const savedDeviceForThisKey = localStorage.getItem(`lock_${entered}`);
        console.log("💻 ဒီ Key အတွက် သိမ်းထားတဲ့ Device:", savedDeviceForThisKey);
        console.log("📱 လက်ရှိသုံးနေတဲ့ Device:", currentDevice);

        // Device Lock စစ်ဆေးခြင်း
        if (savedDeviceForThisKey && savedDeviceForThisKey !== currentDevice) {
            console.warn("⚠️ Device မတူညီတာကြောင့် Lock ဖြစ်နေပါတယ်။");
            deviceLockError.classList.remove('hidden');
            deviceLockError.innerText = "⚠️ ဒီ Key ကို အခြားစက်မှာ သုံးထားပါတယ်။ အောက်က 'Reset Lock' ကိုနှိပ်ပြီး ဒီစက်မှာ ပြန်ဝင်ပါ။";

            // Reset Button ကို ထည့်ပေးမယ်
            const resetBtn = document.createElement('button');
            resetBtn.id = 'custom-reset-btn';
            resetBtn.innerText = "🔄 Reset Lock & Login (ဒီစက်တွင် ဝင်ရန်)";
            resetBtn.className = "mt-3 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl w-full transition";
            resetBtn.onclick = () => {
                localStorage.removeItem(`lock_${entered}`);
                localStorage.setItem(`lock_${entered}`, currentDevice);
                localStorage.setItem('session_active', 'true');
                authScreen.classList.add('hidden');
                startScreen.classList.remove('hidden');
                initResponsiveDashboard();
            };
            deviceLockError.parentNode.appendChild(resetBtn);
            return;
        }

        // Lock မရှိရင် ပုံမှန်ဝင်ခွင့်ပြုမယ်
        localStorage.setItem(`lock_${entered}`, currentDevice);
        localStorage.setItem('session_active', 'true');
        authScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        initResponsiveDashboard();
    } else {
        console.error("❌ Key မှားနေပါတယ်။ စစ်ဆေးပါ။");
        authError.classList.remove('hidden');
        authError.innerText = "❌ Activation Key မှားနေပါတယ်။ စစ်ဆေးပြီး ပြန်ရိုက်ပါ။ (စာလုံးအကြီးအသေး သေချာစစ်ပါ)";
    }
}

function lockAppAccess() {
    localStorage.removeItem('session_active');
    startScreen.classList.add('hidden');
    authScreen.classList.remove('hidden');
    keyInput.value = '';
}

function initResponsiveDashboard() {
    setGrid.innerHTML = '';
    for (let i = 1; i <= 10; i++) { 
        const btn = document.createElement('button');
        btn.className = "bg-slate-700 hover:bg-sky-600 text-white font-bold py-3 px-2 rounded-xl text-xs md:text-sm shadow-sm transition active:scale-95 cursor-pointer text-center";
        btn.innerText = `⚓ Set ${i}`;
        btn.onclick = () => launchSelectedSet(`set${i}`);
        setGrid.appendChild(btn);
    }
}

if (recognizer) {
    recognizer.continuous = true;
    recognizer.interimResults = true;
    recognizer.lang = 'en-US';
    recognizer.onresult = (event) => {
        let text = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
        }
        studentSpeech.innerText = text;
    };
}

btnNext.addEventListener('click', () => nextQuestion());

function launchSelectedSet(setName) {
    currentActiveSet = examSets[setName];
    currentIndex = 0;
    cumulativeWordCount = 0;
    startScreen.classList.add('hidden');
    examScreen.classList.remove('hidden');
    loadQuestion(currentIndex);
}

function loadQuestion(index) {
    if (index >= currentActiveSet.length) {
        processMarlinsGradeMetric();
        return;
    }

    clearInterval(timerInterval);
    if (recognizer) { try { recognizer.stop(); } catch (e) {} }
    studentSpeech.innerText = "Awaiting audio examiner clearance...";

    let currentQ = currentActiveSet[index];
    qNumber.innerText = `Q ${index + 1}/${currentActiveSet.length}`;
    qPrompt.innerText = currentQ.prompt;
    timerDisplay.innerText = formatTime(currentQ.timeLimit);
    timerBar.style.width = '100%';

    if (currentQ.image) {
        examPic.src = currentQ.image;
        examPic.classList.remove('hidden');
        aiAvatar.classList.add('hidden');
    } else {
        examPic.classList.add('hidden');
        aiAvatar.classList.remove('hidden');
    }

    triggerAIExaminerVoice(currentQ.prompt, currentQ.timeLimit);
}

// ==========================================
// 6. AI EXAMINER VOICE - MALE & CLEAR (ANDROID PITCH FIX)
// ==========================================
function triggerAIExaminerVoice(text, limit) {
    exStatus.innerText = "Examiner reading... (1/2)";
    
    const maleVoice = getMaleVoice();
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    // *** အဓိက ပြင်ဆင်ချက် ***
    // Android ဖြစ်ရင် Pitch ကို 0.65 ထိ နိမ့်ချပြီး အမျိုးသားအသံပုံစံ ပြောင်းလဲပေးပါမယ်။
    let selectedPitch = isAndroid ? 0.65 : 1.0;
    
    if (isAndroid) {
        console.log("📢 Android တွေ့ရှိပါပြီ။ Pitch ကို 0.65 သို့ နိမ့်ချပါမည်။");
    }

    // ၁။ ပထမအကြိမ် ဖတ်ခြင်း
    let speak1 = new SpeechSynthesisUtterance(text);
    speak1.lang = 'en-US';
    speak1.rate = 0.9;          // ပြတ်သားအောင် နှေးထား
    speak1.pitch = selectedPitch; // Android ဆို 0.65, တခြား 1.0
    speak1.volume = 1;
    if (maleVoice) speak1.voice = maleVoice;

    speak1.onend = () => {
        setTimeout(() => {
            // ၂။ ဒုတိယအကြိမ် ဖတ်ခြင်း (ပြန်ကြားခြင်း)
            exStatus.innerText = "Examiner repeating... (2/2)";
            let speak2 = new SpeechSynthesisUtterance(text);
            speak2.lang = 'en-US';
            speak2.rate = 0.9;
            speak2.pitch = selectedPitch; // ဒီမှာလည်း Pitch အတူတူပဲ
            speak2.volume = 1;
            if (maleVoice) speak2.voice = maleVoice;

            speak2.onend = () => {
                exStatus.innerText = "🎤 SPEAK NOW";
                studentSpeech.innerText = "Listening to voice input...";
                runCountdown(limit);
                if (recognizer) { try { recognizer.start(); } catch (e) {} }
            };
            speechSynth.speak(speak2);
        }, 1000);
    };
    speechSynth.speak(speak1);
}

function runCountdown(seconds) {
    let timeLeft = seconds;
    let total = seconds;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = formatTime(timeLeft);
        let percent = (timeLeft / total) * 100;
        timerBar.style.width = `${percent}%`;

        if (timeLeft <= 0) {
            captureCurrentSpeechLength();
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    speechSynth.cancel();
    captureCurrentSpeechLength();
    currentIndex++;
    loadQuestion(currentIndex);
}

function captureCurrentSpeechLength() {
    const rawText = studentSpeech.innerText;
    if (rawText && !rawText.includes("Awaiting") && !rawText.includes("Listening")) {
        const words = rawText.trim().split(/\s+/).length;
        cumulativeWordCount += words;
    }
}

function processMarlinsGradeMetric() {
    examScreen.classList.add('hidden');
    finishScreen.classList.remove('hidden');
    if (recognizer) { try { recognizer.stop(); } catch (e) {} }

    if (cumulativeWordCount >= 120) {
        gradeBadge.className = "w-20 h-20 mx-auto flex items-center justify-center rounded-full text-4xl font-extrabold text-slate-950 shadow-inner bg-emerald-400";
        gradeBadge.innerText = "A";
        gradeTitle.innerText = "Grade A - Professional Pass";
        gradeDesc.innerText = "The candidate displays strong syntax flow, deep vocabulary control and natural delivery matching technical crew requirements.";
        statVocab.innerText = "Broad Technical Spectrum";
        statGrammar.innerText = "Highly Cohesive & Standard";
        statFluency.innerText = "Continuous Structure (>120 Words)";
    } else if (cumulativeWordCount >= 50 && cumulativeWordCount < 120) {
        gradeBadge.className = "w-20 h-20 mx-auto flex items-center justify-center rounded-full text-4xl font-extrabold text-slate-950 shadow-inner bg-sky-400";
        gradeBadge.innerText = "B";
        gradeTitle.innerText = "Grade B - Operational Pass";
        gradeDesc.innerText = "Clear functional understanding. Can convey basic emergency actions, though sentence length is slightly restricted.";
        statVocab.innerText = "Functional Maritime Terms";
        statGrammar.innerText = "Adequate Structure";
        statFluency.innerText = "Intermittent Pauses (50-120 Words)";
    } else {
        gradeBadge.className = "w-20 h-20 mx-auto flex items-center justify-center rounded-full text-4xl font-extrabold text-slate-950 shadow-inner bg-rose-400";
        gradeBadge.innerText = "C";
        gradeTitle.innerText = "Grade C - Development Required";
        gradeDesc.innerText = "Speech structure requires core enhancement. Review safe execution prompts and work on vocabulary extension routines.";
        statVocab.innerText = "Limited / Basic Terms Only";
        statGrammar.innerText = "Fragmented Clauses";
        statFluency.innerText = "Needs Expansion (<50 Words)";
    }
}

function resetToDashboard() {
    finishScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    initResponsiveDashboard();
}

function formatTime(secs) {
    let m = Math.floor(secs / 60).toString().padStart(2, '0');
    let s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

window.onload = () => {
    speechSynth.getVoices();
    
    if (localStorage.getItem('session_active') === 'true') {
        authScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        initResponsiveDashboard();
    }
};

speechSynth.onvoiceschanged = () => {
    speechSynth.getVoices();
};

// ==========================================
// 7. ANDROID MICROPHONE & VOICE FIX (အောက်ဆုံးမှာ ထားရမယ်)
// ==========================================
// Android အတွက် Microphone သန့်ရှင်းရေး
async function forceAndroidMicrophone() {
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (!isAndroid) return;

    console.log("📱 Android ဖုန်းတွေ့ရှိပါပြီ။ မိုက်ကို အတင်းသန့်ရှင်းနေပါ...");
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        const track = stream.getAudioTracks()[0];
        if (track) {
            track.stop();
        }
        console.log("✅ Android Microphone သန့်ရှင်းပြီးပါပြီ။");
        setTimeout(() => {
            if (document.getElementById('student-speech')) {
                document.getElementById('student-speech').innerText = "🎤 မိုက်အဆင်သင့်ဖြစ်ပါပြီ။ စကားပြောနိုင်ပါပြီ။";
            }
        }, 500);

    } catch (error) {
        console.warn("⚠️ Android မိုက်သန့်ရှင်းရေးမအောင်မြင်ပါ:", error);
        alert("⚠️ မိုက်ခရိုဖုန်းခွင့်ပြုချက် မရပါ။ Settings > Permissions မှာ Microphone ကို Allow ပေးပါ။");
    }
}

// Section 6 က triggerAIExaminerVoice ကို ပြန်အုပ်ပြီး Android အတွက် မိုက်သန့်ရှင်းမှု ထည့်ပေးခြင်း
const originalTriggerAIForAndroid = triggerAIExaminerVoice;
triggerAIExaminerVoice = function(text, limit) {
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    if (isAndroid) {
        forceAndroidMicrophone().then(() => {
            setTimeout(() => {
                originalTriggerAIForAndroid.call(this, text, limit);
            }, 800);
        });
    } else {
        originalTriggerAIForAndroid.call(this, text, limit);
    }
};
