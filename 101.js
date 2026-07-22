// ================================================================
//  CONFIG & STORAGE
// ================================================================
const USED_KEYS_KEY = 'mept_used_keys';

// Pre‑defined valid keys (alphanumeric - 8 characters)
const VALID_KEYS = [
    'BM12FF2E', 'XK78GH4A', 'PL90MN3B', 'QR56CD8F', 'ST34UV6G',
    'WX12YZ9H', 'AB45EF7I', 'CD67GH2J', 'EF89KL3M', 'GH01PQ4N',
    'IJ23RS5O', 'KL45TU6P', 'MN67VW7Q', 'OP89XY8R', 'QR01ZA9S',
    'ST23BC1T', 'UV45DE2U', 'WX67FG3V', 'YZ89HI4W', 'AB01JK5X',
    'CD23LM6Y', 'EF45NO7Z', 'GH67PQ8A', 'IJ89RS9B', 'KL01TU0C',
    // အောက်က ၃၀ လုံး အသစ်
    'MN23OP1D', 'PQ45QR2E', 'RS67ST3F', 'TU89UV4G', 'VW01WX5H',
    'XY23YZ6I', 'ZA45AB7J', 'BC67CD8K', 'DE89EF9L', 'FG01GH0M',
    'HI23IJ1N', 'JK45KL2O', 'LM67MN3P', 'NO89OP4Q', 'PQ01QR5R',
    'RS23ST6S', 'TU45UV7T', 'VW67WX8U', 'XY89YZ9V', 'ZA01AB0W',
    'BC23CD1X', 'DE45EF2Y', 'FG67GH3Z', 'HI89IJ4A', 'JK01KL5B',
    'LM23MN6C', 'NO45OP7D', 'PQ67QR8E', 'RS89ST9F', 'TU01UV0G'
];

// သတ်မှတ်ထားတဲ့ expire / start date (key အားလုံးအတူတူ)
const DEFAULT_EXPIRE = '2027-12-31';
const DEFAULT_START = '2026-01-01';

function isKeyUsed(key) {
    const used = JSON.parse(localStorage.getItem(USED_KEYS_KEY) || '[]');
    return used.includes(key);
}

function markKeyUsed(key) {
    const used = JSON.parse(localStorage.getItem(USED_KEYS_KEY) || '[]');
    if (!used.includes(key)) {
        used.push(key);
        localStorage.setItem(USED_KEYS_KEY, JSON.stringify(used));
    }
}

// ================================================================
//  SPEAKING FUNCTION (Text-to-Speech with Timer)
//  FIXED: 
//  - Timer continues while user types
//  - When time is up, answer is auto-saved and auto-advance to next question
//  - NO Keywords displayed
// ================================================================
let speakingTimer = null;
let speakingTimeLeft = 60;
let isSpeakingActive = false;
let currentSpeakingIndex = 0;
let speakingQuestionsList = [];
let speakingAnswers = [];
let speakingPlayCount = 0;
const MAX_SPEAKING_PLAYS = 2;
let timerStarted = false;
let isTimeUp = false;

// Speaking questions data (7 questions - NO keywords)
const SPEAKING_DATA = [
    { type: "Short Answer", timeLimit: 60, prompt: "Introduce yourself and tell me about your family background.", image: "" },
    { type: "Short Answer", timeLimit: 60, prompt: "What do you understand about MARPOL Annex V regarding the discharge of garbage at sea?", image: "" },
    { type: "Short Answer", timeLimit: 60, prompt: "Seafaring can be lonely. How do you handle boredom and isolation during long voyages?", image: "" },
    { type: "Short Answer", timeLimit: 60, prompt: "Why is it vital to complete a 'pre-arrival checklist' before entering a foreign port?", image: "" },
    { type: "Short Answer", timeLimit: 60, prompt: "If you receive multiple conflicting orders from senior officers, how would you prioritize your tasks?", image: "" },
    { type: "Picture Description", timeLimit: 150, prompt: "Look at the picture. Describe the correct procedure for discharging ballast water and the environmental risks of oil spills during bunkering.", image: "101.png" },
    { type: "Debate", timeLimit: 150, prompt: "Marlins Debate: 'Regular crew safety drills are simply for passing inspections and do not actually prepare us for real emergencies.' Argue your position.", image: "" }
];

function speakQuestion(text, btnId, index) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    
    // Check if speech synthesis is supported
    if (!window.speechSynthesis) {
        alert('Your browser does not support speech synthesis. Please use Chrome, Edge, or Safari.');
        return;
    }

    // If currently playing, stop it
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btn.classList.remove('playing');
        btn.textContent = '🔊 Play';
        clearInterval(speakingTimer);
        isSpeakingActive = false;
        return;
    }

    // Check play count limit
    if (speakingPlayCount >= MAX_SPEAKING_PLAYS) {
        alert('❌ This question can only be played 2 times.');
        return;
    }

    // If time is up, allow play but don't restart timer
    if (isTimeUp) {
        // Still allow playing the question even if time is up
    }

    speakingPlayCount++;
    btn.textContent = `🔊 Play (${speakingPlayCount}/${MAX_SPEAKING_PLAYS})`;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to use a natural voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) || 
                          voices.find(v => v.lang.startsWith('en')) || 
                          null;
    if (preferredVoice) utterance.voice = preferredVoice;

    btn.classList.add('playing');
    btn.textContent = '⏹️ Stop';

    // Get time limit for this question
    const timeLimit = speakingQuestionsList[index]?.timeLimit || 60;
    
    // Only start timer if not already started and not time up
    if (!timerStarted && !isTimeUp) {
        speakingTimeLeft = timeLimit;
        timerStarted = true;
        document.getElementById('speakingTimerDisplay').textContent = `⏱️ ${speakingTimeLeft}s`;
        document.getElementById('speakingTimerDisplay').style.color = '#0f4c75';
        
        // Clear any existing timer
        clearInterval(speakingTimer);
        
        // Start the timer - this runs while user is answering
        speakingTimer = setInterval(() => {
            speakingTimeLeft--;
            document.getElementById('speakingTimerDisplay').textContent = `⏱️ ${speakingTimeLeft}s`;
            
            if (speakingTimeLeft <= 10) {
                document.getElementById('speakingTimerDisplay').style.color = '#e53e3e';
            }
            
            if (speakingTimeLeft <= 0) {
                clearInterval(speakingTimer);
                isSpeakingActive = false;
                timerStarted = false;
                isTimeUp = true;
                document.getElementById('speakingTimerDisplay').textContent = '⏱️ Time\'s Up!';
                document.getElementById('speakingTimerDisplay').style.color = '#e53e3e';
                
                // Auto-save answer when time is up
                const textarea = document.getElementById(`sp_${index}`);
                if (textarea) {
                    speakingAnswers[index] = textarea.value;
                }
                
                // AUTO ADVANCE TO NEXT QUESTION
                setTimeout(() => {
                    saveAndNext(index);
                }, 1500);
            }
        }, 1000);
    }

    utterance.onend = function() {
        btn.classList.remove('playing');
        btn.textContent = `🔊 Play (${speakingPlayCount}/${MAX_SPEAKING_PLAYS})`;
        // Don't stop timer - user still needs time to answer
    };

    utterance.onerror = function() {
        btn.classList.remove('playing');
        btn.textContent = `🔊 Play (${speakingPlayCount}/${MAX_SPEAKING_PLAYS})`;
    };

    window.speechSynthesis.speak(utterance);
}

function showSpeakingQuestion(index) {
    if (index >= speakingQuestionsList.length) {
        // All questions completed
        document.getElementById('speakingContainer').innerHTML = `
            <div style="text-align: center; padding: 40px; background: #f0fdf4; border-radius: 16px;">
                <h3 style="color: #166534;">✅ Speaking Test Completed!</h3>
                <p style="color: #64748b;">You have completed all speaking questions.</p>
                <button class="btn-primary" onclick="submitExam()" style="margin-top: 20px;">Submit Exam</button>
            </div>
        `;
        document.getElementById('speakingProgress').textContent = `${speakingQuestionsList.length}/${speakingQuestionsList.length}`;
        return;
    }
    
    // Clear any existing timer
    clearInterval(speakingTimer);
    timerStarted = false;
    isTimeUp = false;
    
    currentSpeakingIndex = index;
    const q = speakingQuestionsList[index];
    const total = speakingQuestionsList.length;
    const timeLimit = q.timeLimit || 60;
    speakingPlayCount = 0;
    
    document.getElementById('speakingProgress').textContent = `${index + 1}/${total}`;
    document.getElementById('speakingTimerDisplay').textContent = `⏱️ ${timeLimit}s`;
    document.getElementById('speakingTimerDisplay').style.color = '#0f4c75';
    
    const container = document.getElementById('speakingContainer');
    let imageHtml = '';
    if (q.image) {
        imageHtml = `
            <div style="text-align: center; margin: 10px 0;">
                <img src="${q.image}" alt="Speaking Image" style="max-width: 100%; max-height: 200px; border-radius: 12px; border: 1px solid #e2e8f0; padding: 8px; background: white;" onerror="this.style.display='none'">
            </div>
        `;
    }
    
    const typeLabel = q.type === 'Picture Description' ? '🖼️ Picture Description' : 
                      q.type === 'Debate' ? '🎯 Debate' : '💬 Short Answer';
    
    container.innerHTML = `
        <div class="card" style="border: 2px solid #f0b429;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div>
                    <span style="font-weight: 600; color: #0f4c75;">Question ${index + 1} of ${total}</span>
                    <span style="margin-left: 12px; font-size: 0.8rem; background: #f0b42920; padding: 2px 12px; border-radius: 20px; color: #92400e;">${typeLabel}</span>
                </div>
                <span id="speakingTimerDisplay" style="font-weight: 700; font-size: 1.2rem; color: #0f4c75;">⏱️ ${timeLimit}s</span>
            </div>
            ${imageHtml}
            <div style="text-align: center; padding: 20px 0;">
                <button class="speak-btn" id="speakBtnCurrent" onclick="speakQuestion('${q.prompt.replace(/'/g, "\\'")}', 'speakBtnCurrent', ${index})" style="font-size: 1.2rem; padding: 12px 30px;">
                    🔊 Play Question (0/${MAX_SPEAKING_PLAYS})
                </button>
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 8px;">
                    ${q.type === 'Picture Description' ? 'Listen to the question, then describe what you see in the picture' : 
                      q.type === 'Debate' ? 'Listen to the debate topic, then state your position and argue your point' : 
                      'Listen to the question, then type your answer below'}
                </p>
            </div>
            <div style="margin-top: 10px;">
                <label style="font-weight: 500; display: block; margin-bottom: 5px;">Your Answer:</label>
                <textarea id="sp_${index}" rows="${q.type === 'Picture Description' || q.type === 'Debate' ? 5 : 3}" placeholder="Type your answer here..." style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #d1d9e6; font-family: inherit; font-size: 0.95rem; background: #fafcff;">${speakingAnswers[index] || ''}</textarea>
            </div>
            <div style="display: flex; gap: 10px; margin-top: 15px; justify-content: flex-end;">
                <button class="btn-primary" onclick="saveAndNext(${index})" style="background: #0f4c75;">Save & Next →</button>
            </div>
        </div>
    `;
}

function saveAndNext(index) {
    // Save current answer (even if time is up)
    const textarea = document.getElementById(`sp_${index}`);
    if (textarea) {
        speakingAnswers[index] = textarea.value;
    }
    
    // Stop any ongoing speech
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    
    // Clear timer
    clearInterval(speakingTimer);
    isSpeakingActive = false;
    timerStarted = false;
    isTimeUp = false;
    
    // Move to next question
    const nextIndex = index + 1;
    showSpeakingQuestion(nextIndex);
}

// ================================================================
//  LOGIN (key ပဲစစ်)
// ================================================================
function startExam() {
    const key = document.getElementById('loginKey').value.trim().toUpperCase();

    if (!key) {
        document.getElementById('loginStatus').innerHTML = '<p style="color:red;">⚠️ ကျေးဇူးပြု၍ Key ဖြည့်ပါ။</p>';
        return;
    }
    if (key.length !== 8) {
        document.getElementById('loginStatus').innerHTML = '<p style="color:red;">⚠️ Key သည် ၈ လုံးအတိအကျ ဖြစ်ရမည်။</p>';
        return;
    }

    if (!VALID_KEYS.includes(key)) {
        document.getElementById('loginStatus').innerHTML = '<p style="color:red;">❌ မှားယွင်းသော Key ဖြစ်သည်။</p>';
        return;
    }

    if (isKeyUsed(key)) {
        document.getElementById('loginStatus').innerHTML = '<p style="color:red;">❌ ဤ Key ကို အသုံးပြုပြီးပါပြီ။ (one‑time only)</p>';
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exp = new Date(DEFAULT_EXPIRE);
    const start = new Date(DEFAULT_START);

    if (today < start) {
        document.getElementById('loginStatus').innerHTML = `<p style="color:red;">❌ ${DEFAULT_START} မှ စတင်နိုင်ပါမည်။</p>`;
        return;
    }
    if (today > exp) {
        document.getElementById('loginStatus').innerHTML = `<p style="color:red;">❌ သက်တမ်းကုန်ပါပြီ (${DEFAULT_EXPIRE})</p>`;
        return;
    }

    markKeyUsed(key);

    window.currentUsername = 'Candidate';
    document.getElementById('displayUsername').textContent = window.currentUsername;
    document.getElementById('examAuth').style.display = 'none';
    document.getElementById('examContent').style.display = 'block';
    loadFixedExam();
    startTimer(120);
    document.getElementById('loginStatus').innerHTML = '';
}

// ================================================================
//  TIMER
// ================================================================
let timerInterval;

function startTimer(min) {
    let time = min * 60;
    const display = document.getElementById('timer');
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time--;
        const m = Math.floor(time / 60);
        const s = time % 60;
        display.textContent = `⏱️ ${m}:${s.toString().padStart(2, '0')}`;
        if (time <= 0) {
            clearInterval(timerInterval);
            alert('⏰ အချိန်ပြည့်ပါပြီ။');
            submitExam();
        }
    }, 1000);
}

// ================================================================
//  LOAD FIXED EXAM (DOUBLED QUESTIONS)
// ================================================================
function loadFixedExam() {
    // ---- GRAMMAR (40 questions - doubled) ----
    const gData = [
        // Original 20
        { q: "The crew ________ the deck every morning.", opts: ["a) cleans", "b) clean", "c) cleaning"], ans: "a" },
        { q: "My name ________ Aung. I am a seafarer.", opts: ["a) is", "b) are", "c) am"], ans: "a" },
        { q: "The ship ________ at the port yesterday.", opts: ["a) arrive", "b) arrived", "c) arriving"], ans: "b" },
        { q: "We always ________ life jackets on deck.", opts: ["a) wear", "b) wears", "c) wearing"], ans: "a" },
        { q: "There ________ many lifeboats on the ship.", opts: ["a) is", "b) are", "c) has"], ans: "b" },
        { q: "She ________ to the bridge now.", opts: ["a) go", "b) goes", "c) is going"], ans: "c" },
        { q: "The captain ________ the weather report an hour ago.", opts: ["a) read", "b) reads", "c) reading"], ans: "a" },
        { q: "I can ________ English and Burmese.", opts: ["a) speak", "b) speaks", "c) speaking"], ans: "a" },
        { q: "This rope is ________ than that one.", opts: ["a) long", "b) longer", "c) longest"], ans: "b" },
        { q: "The engineer ________ the engine right now.", opts: ["a) check", "b) checks", "c) is checking"], ans: "c" },
        { q: "You must not ________ near the bunkering station.", opts: ["a) smoke", "b) smokes", "c) smoking"], ans: "a" },
        { q: "The bosun asked me ________ the mooring ropes.", opts: ["a) to check", "b) check", "c) checking"], ans: "a" },
        { q: "The sea conditions ________ very rough last night.", opts: ["a) was", "b) were", "c) is"], ans: "b" },
        { q: "She ________ finished her safety training yet.", opts: ["a) hasn't", "b) haven't", "c) didn't"], ans: "a" },
        { q: "The ship will depart ________ Tuesday morning.", opts: ["a) on", "b) in", "c) at"], ans: "a" },
        { q: "He speaks maritime English very ________.", opts: ["a) good", "b) well", "c) better"], ans: "b" },
        { q: "There is too ________ water in the bilge.", opts: ["a) many", "b) much", "c) few"], ans: "b" },
        { q: "The engineers ________ repaired the broken valve.", opts: ["a) have", "b) has", "c) having"], ans: "a" },
        { q: "Don't forget ________ your safety harness before climbing.", opts: ["a) to wear", "b) wear", "c) wearing"], ans: "a" },
        { q: "The crew ________ finished the cleaning yet.", opts: ["a) haven't", "b) hasn't", "c) didn't"], ans: "a" },
        // Additional 20 (new questions)
        { q: "The officer ________ the navigation chart carefully.", opts: ["a) study", "b) studies", "c) studying"], ans: "b" },
        { q: "All crew members ________ attend the safety meeting.", opts: ["a) must", "b) may", "c) can"], ans: "a" },
        { q: "The ship ________ in Singapore next Monday.", opts: ["a) arrive", "b) arrives", "c) arriving"], ans: "b" },
        { q: "The bosun ________ the deck crew yesterday.", opts: ["a) supervise", "b) supervised", "c) supervising"], ans: "b" },
        { q: "You ________ wear your hard hat at all times.", opts: ["a) should", "b) shouldn't", "c) might"], ans: "a" },
        { q: "The captain ________ the port authority now.", opts: ["a) call", "b) calls", "c) is calling"], ans: "c" },
        { q: "They ________ the cargo last night.", opts: ["a) load", "b) loaded", "c) loading"], ans: "b" },
        { q: "The engine room ________ very hot during operation.", opts: ["a) is", "b) are", "c) being"], ans: "a" },
        { q: "I ________ to be a chief officer one day.", opts: ["a) hope", "b) hopes", "c) hoping"], ans: "a" },
        { q: "All passengers ________ aboard by 6 PM.", opts: ["a) were", "b) was", "c) being"], ans: "a" },
        { q: "The fire drill ________ every week.", opts: ["a) conduct", "b) conducts", "c) is conducted"], ans: "c" },
        { q: "The lifeboat ________ enough space for 30 people.", opts: ["a) has", "b) have", "c) having"], ans: "a" },
        { q: "The captain ________ the schedule tomorrow.", opts: ["a) announce", "b) announces", "c) will announce"], ans: "c" },
        { q: "The crew ________ working hard all day.", opts: ["a) has", "b) have", "c) having"], ans: "b" },
        { q: "The vessel ________ from the dock at 8 AM.", opts: ["a) departs", "b) depart", "c) departing"], ans: "a" },
        { q: "The chief engineer ________ the problem immediately.", opts: ["a) fix", "b) fixes", "c) fixed"], ans: "c" },
        { q: "All officers ________ to report on time.", opts: ["a) expected", "b) are expected", "c) expecting"], ans: "b" },
        { q: "The pump ________ for maintenance now.", opts: ["a) is shut down", "b) shuts down", "c) shutting down"], ans: "a" },
        { q: "They ________ the safety equipment regularly.", opts: ["a) check", "b) checks", "c) checking"], ans: "a" },
        { q: "The voyage ________ two weeks.", opts: ["a) last", "b) lasts", "c) lasting"], ans: "b" }
    ];

    let gHtml = '';
    gData.forEach((q, i) => {
        gHtml += `<div class="question"><p><strong>${i + 1}.</strong> ${q.q}</p><div class="options">`;
        q.opts.forEach(opt => {
            const val = opt.charAt(0);
            gHtml += `<label><input type="radio" name="gq${i}" value="${val}"> ${opt}</label>`;
        });
        gHtml += `</div></div>`;
    });
    document.getElementById('grammarQuestions').innerHTML = gHtml;

    // ---- READING (4 passages - doubled) ----
    const rPassages = [
        {
            title: "Working on a Cruise Ship",
            text: "Working on a cruise ship is very different from other ships. The crew must be friendly and helpful because they deal with thousands of passengers every week. Many workers come from different countries, so English is the main language used on board. The working day can be long, often 10 to 12 hours. However, crew members get free food and a place to sleep. In their free time, they can use the gym, watch movies, or call their families using the internet. Safety is also very important. Every week, there are safety drills for fire and emergency situations. All crew must attend these drills.",
            questions: [
                { q: "Cruise ship crew must be friendly.", ans: "T" },
                { q: "English is rarely used on a cruise ship.", ans: "F" },
                { q: "Workers usually work less than 8 hours a day.", ans: "F" },
                { q: "Crew can use the gym in their free time.", ans: "T" },
                { q: "Safety drills happen every month.", ans: "F" }
            ]
        },
        {
            title: "Importance of English for Seafarers",
            text: "English is the international language of the sea. All seafarers must know basic English to communicate with other crew members, port authorities, and during emergencies. The IMO (International Maritime Organization) has standard phrases called SMCP (Standard Marine Communication Phrases) that all seafarers should use. Understanding English also helps seafarers read safety instructions, charts, and manuals. If a seafarer cannot speak English well, it can be dangerous because they might not understand important orders. That is why many maritime schools teach English as a very important subject.",
            questions: [
                { q: "English is the international language of the sea.", ans: "T" },
                { q: "Seafarers do not need to communicate with port authorities.", ans: "F" },
                { q: "SMCP stands for Standard Marine Communication Phrases.", ans: "T" },
                { q: "Understanding English helps seafarers read safety instructions.", ans: "T" },
                { q: "Not speaking English well has no risks.", ans: "F" }
            ]
        },
        // New passages (doubled)
        {
            title: "Safety at Sea",
            text: "Safety is the most important aspect of maritime operations. Every ship must have sufficient lifeboats, life rafts, and life jackets for all people on board. Fire extinguishers and fire hoses must be regularly checked. The crew participates in regular safety drills to prepare for emergencies. The International Convention for the Safety of Life at Sea (SOLAS) sets the minimum safety standards for ships. All crew members must be familiar with the ship's safety procedures and emergency signals.",
            questions: [
                { q: "Lifeboats are not required on ships.", ans: "F" },
                { q: "Fire extinguishers must be checked regularly.", ans: "T" },
                { q: "SOLAS stands for Safety of Life at Sea.", ans: "T" },
                { q: "Crew do not need to know emergency signals.", ans: "F" },
                { q: "Safety drills are optional for the crew.", ans: "F" }
            ]
        },
        {
            title: "The Role of a Bosun",
            text: "The bosun, or boatswain, is a senior member of the deck department. He is responsible for the deck crew and all maintenance work on deck. The bosun supervises painting, chipping, and cleaning operations. He also maintains the ship's mooring lines, anchor, and deck equipment. The bosun reports directly to the chief officer and ensures that all deck work is done safely and efficiently. A good bosun has strong leadership skills and extensive knowledge of maritime operations.",
            questions: [
                { q: "The bosun supervises the deck crew.", ans: "T" },
                { q: "The bosun reports to the captain.", ans: "F" },
                { q: "The bosun maintains mooring lines.", ans: "T" },
                { q: "A bosun does not need leadership skills.", ans: "F" },
                { q: "Painting is not part of the bosun's duties.", ans: "F" }
            ]
        }
    ];

    let rHtml = '',
        qNum = 1;
    rPassages.forEach(pass => {
        rHtml += `<div class="reading-passage"><h4>${pass.title}</h4><p>${pass.text}</p>`;
        pass.questions.forEach(q => {
            rHtml += `<div class="question"><p><strong>${qNum}.</strong> ${q.q}</p>
            <select id="rq${qNum - 1}"><option value="">Select</option><option value="T">True</option><option value="F">False</option></select></div>`;
            qNum++;
        });
        rHtml += `</div>`;
    });
    document.getElementById('readingQuestions').innerHTML = rHtml;

    // ---- LISTENING (20 questions - Audio file only) ----
    const lData = [
        { q: "What did the Third Engineer complete?", opts: ["A. Engine repair", "B. Daily inspection of the purifier room", "C. Safety drill"], ans: "B" },
        { q: "What did he notice in the number two fuel oil purifier?", opts: ["A. Oil leak", "B. A slight vibration", "C. Blocked filter"], ans: "B" },
        { q: "According to the Second Engineer, what can a small vibration indicate?", opts: ["A. Normal operation", "B. Bearing failure", "C. Oil change"], ans: "B" },
        { q: "Did the Third Engineer log the problem and report it?", opts: ["A. Yes, immediately", "B. Not yet", "C. He did not find any problem"], ans: "B" },
        { q: "How long did the Third Engineer want to wait?", opts: ["A. One day", "B. One hour", "C. One week"], ans: "B" },
        { q: "What did the Second Engineer say about delayed reporting?", opts: ["A. It can lead to a major breakdown", "B. It is acceptable", "C. It saves time"], ans: "A" },
        { q: "What did the Second Engineer ask the Third Engineer to do?", opts: ["A. Monitor another hour", "B. Log it immediately and check bearings", "C. Call the Chief Engineer"], ans: "B" },
        { q: "Where did the Second Engineer want to go together?", opts: ["A. To the bridge", "B. To check the bearings", "C. To the mess room"], ans: "B" },
        { q: "Who is the Second Engineer speaking to?", opts: ["A. Chief Engineer", "B. Third Engineer", "C. Bosun"], ans: "B" },
        { q: "What is the main message of the conversation?", opts: ["A. Always follow orders", "B. Delayed reporting can cause major problems", "C. The purifier is working perfectly"], ans: "B" },
        // Additional 10 (new listening questions)
        { q: "What was the weather condition during the voyage?", opts: ["A. Sunny", "B. Stormy", "C. Foggy"], ans: "B" },
        { q: "How long was the delay at the port?", opts: ["A. 2 hours", "B. 4 hours", "C. 6 hours"], ans: "A" },
        { q: "What cargo was the ship carrying?", opts: ["A. Containers", "B. Oil", "C. Grain"], ans: "C" },
        { q: "What was the problem with the engine?", opts: ["A. Overheating", "B. Oil leak", "C. Vibration"], ans: "A" },
        { q: "Where did the ship stop for bunkering?", opts: ["A. Singapore", "B. Dubai", "C. Rotterdam"], ans: "A" },
        { q: "How many crew members were on board?", opts: ["A. 15", "B. 22", "C. 30"], ans: "B" },
        { q: "What was the captain's decision?", opts: ["A. Wait", "B. Proceed", "C. Turn back"], ans: "C" },
        { q: "What happened to the communication system?", opts: ["A. It was working", "B. It was broken", "C. It was upgraded"], ans: "B" },
        { q: "Who took the watch at midnight?", opts: ["A. Third Officer", "B. Second Officer", "C. Chief Officer"], ans: "A" },
        { q: "What was the main topic of the announcement?", opts: ["A. Safety", "B. Weather", "C. Food"], ans: "A" }
    ];

    let lHtml = `<div class="card"><h4>🎧 Listening Task</h4>
        <div class="audio-container">
            <p><em>Listen to the audio and answer the questions.</em></p>
            <audio class="exam-audio" id="audioTask" controls>
                <source src="101.mp3" type="audio/mpeg">
                Your browser does not support audio. Please check your audio file.
            </audio>
        </div>`;
    lData.forEach((q, i) => {
        lHtml += `<div class="question"><p><strong>${i + 1}.</strong> ${q.q}</p><div class="options">`;
        q.opts.forEach(opt => {
            const val = opt.charAt(0);
            lHtml += `<label><input type="radio" name="lq${i}" value="${val}"> ${opt}</label>`;
        });
        lHtml += `</div></div>`;
    });
    lHtml += `</div>`;
    document.getElementById('listeningQuestions').innerHTML = lHtml;

    // ---- WRITING (doubled: 4+4 tasks) ----
    const wData = {
        part1: {
            A: { title: "Report a Slippery Deck", task: "Write a short message to the Bosun about a slippery area near the gangway. Explain why it is dangerous. (approx. 25 words)" },
            B: { title: "Request for PPE", task: "Write a short message to the Safety Officer asking for new gloves because yours are damaged. (approx. 25 words)" },
            C: { title: "Request for Maintenance", task: "Write a short message to the Chief Officer about a faulty light on the deck. (approx. 25 words)" },
            D: { title: "Report a Spill", task: "Write a short message to the Second Engineer about a small oil spill in the engine room. (approx. 25 words)" }
        },
        part2: {
            A: { title: "Teamwork on Board", task: "Describe a time when you had to work as a team on the ship. What was the task? How did you help each other? Why was teamwork important? (80-100 words)" },
            B: { title: "Learning a New Skill", task: "Write about a new skill you learned on the ship. Who taught you? How did you practice? How will this skill help you in your career? (80-100 words)" },
            C: { title: "Dealing with an Emergency", task: "Describe an emergency situation you faced on board. What happened? How did you respond? What did you learn from the experience? (80-100 words)" },
            D: { title: "Life at Sea", task: "Describe a typical day on the ship. What do you do from morning to evening? What do you enjoy most about life at sea? (80-100 words)" }
        }
    };

    let wHtml = `<div class="card"><h4>Part 1 (approx. 25 words) – Choose ONE</h4>`;
    Object.entries(wData.part1).forEach(([key, val]) => {
        wHtml += `<div class="option-card"><h5>Option ${key}: ${val.title}</h5><p>${val.task}</p><textarea id="w1${key}" rows="3" placeholder="Type here..."></textarea></div>`;
    });
    wHtml += `</div><div class="card"><h4>Part 2 (80–100 words) – Choose ONE</h4>`;
    Object.entries(wData.part2).forEach(([key, val]) => {
        wHtml += `<div class="option-card"><h5>Option ${key}: ${val.title}</h5><p>${val.task}</p><textarea id="w2${key}" rows="5" placeholder="Type here..."></textarea></div>`;
    });
    wHtml += `</div>`;
    document.getElementById('writingQuestions').innerHTML = wHtml;

    // ---- SPEAKING (NO Keywords) ----
    speakingQuestionsList = SPEAKING_DATA;
    speakingAnswers = new Array(SPEAKING_DATA.length).fill('');

    let sHtml = `
        <div class="card" style="border: 2px solid #f0b429; background: #fefcf5;">
            <h4>🗣️ Speaking Test</h4>
            <p style="color: #64748b; margin-bottom: 15px;">
                <strong>Instructions:</strong> 
                • Click <strong>🔊 Play Question</strong> to listen (max 2 plays per question)<br>
                • Timer starts automatically when you play the question<br>
                • <strong>Short Answer</strong> questions: <strong>60 seconds</strong> to answer<br>
                • <strong>Picture Description & Debate</strong> questions: <strong>150 seconds</strong> to answer<br>
                • Type your answer in the text box below<br>
                • <strong>Time's Up:</strong> Auto-saves and moves to next question<br>
                • You can also click <strong>"Save & Next"</strong> to move on
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding: 10px 15px; background: #f1f5f9; border-radius: 12px;">
                <span style="font-weight: 600;">Progress: <span id="speakingProgress">0/${SPEAKING_DATA.length}</span></span>
                <span id="speakingTimerDisplay" style="font-weight: 700; font-size: 1.2rem; color: #0f4c75;">⏱️ 60s</span>
            </div>
            <div id="speakingContainer">
                <div style="text-align: center; padding: 30px; color: #64748b;">
                    <p>Press "Start Speaking" to begin.</p>
                    <button class="btn-primary" onclick="showSpeakingQuestion(0)" style="margin-top: 15px;">🎤 Start Speaking</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('speakingQuestions').innerHTML = sHtml;
}

// ================================================================
//  SUBMIT & GRADING
// ================================================================
function submitExam() {
    if (timerInterval) clearInterval(timerInterval);
    if (speakingTimer) clearInterval(speakingTimer);
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    
    let total = 0,
        max = 0;

    // ---- Grammar (40x1) ----
    let gScore = 0;
    const gAnswers = [
        "a", "a", "b", "a", "b", "c", "a", "a", "b", "c",
        "a", "a", "b", "a", "a", "b", "b", "a", "a", "a",
        "b", "a", "b", "b", "a", "c", "b", "a", "a", "a",
        "c", "a", "c", "b", "a", "c", "b", "a", "a", "b"
    ];
    gAnswers.forEach((ans, i) => {
        const sel = document.querySelector(`input[name="gq${i}"]:checked`);
        if (sel && sel.value === ans) gScore++;
    });
    total += gScore;
    max += 40;

    // ---- Reading (20x1.5=30) ----
    let rScore = 0;
    const rAnswers = [
        "T", "F", "F", "T", "F",
        "T", "F", "T", "T", "F",
        "F", "T", "T", "F", "F",
        "T", "F", "T", "F", "F"
    ];
    rAnswers.forEach((ans, idx) => {
        const sel = document.getElementById(`rq${idx}`);
        if (sel && sel.value === ans) rScore += 1.5;
    });
    total += rScore;
    max += 30;

    // ---- Listening (20x1.25=25) ----
    let lScore = 0;
    const lAnswers = [
        "B", "B", "B", "B", "B", "A", "B", "B", "B", "B",
        "B", "A", "C", "A", "A", "B", "C", "B", "A", "A"
    ];
    lAnswers.forEach((ans, i) => {
        const sel = document.querySelector(`input[name="lq${i}"]:checked`);
        if (sel && sel.value === ans) lScore += 1.25;
    });
    total += lScore;
    max += 25;

    // ---- Writing (Part1:10, Part2:15) ----
    let wScore = 0;
    const writingParts = {
        part1: ['A', 'B', 'C', 'D'],
        part2: ['A', 'B', 'C', 'D']
    };
    
    // Part 1: Find the longest answer and grade (no keywords - check length only)
    let part1Text = '';
    writingParts.part1.forEach(key => {
        const text = document.getElementById(`w1${key}`)?.value || '';
        if (text.length > part1Text.length) {
            part1Text = text;
        }
    });
    // Give points based on word count
    const wordCount1 = part1Text.split(/\s+/).filter(w => w.length > 0).length;
    wScore += Math.min(10, Math.floor(wordCount1 / 3));
    if (wordCount1 >= 20) wScore = 10;

    // Part 2: Find the longest answer and grade (no keywords - check length only)
    let part2Text = '';
    writingParts.part2.forEach(key => {
        const text = document.getElementById(`w2${key}`)?.value || '';
        if (text.length > part2Text.length) {
            part2Text = text;
        }
    });
    const wordCount2 = part2Text.split(/\s+/).filter(w => w.length > 0).length;
    wScore += Math.min(15, Math.floor(wordCount2 / 5));
    if (wordCount2 >= 60) wScore = 15;
    total += wScore;
    max += 25;

    // ---- Speaking (scale to 15 - check length only) ----
    let rawSpeaking = 0;
    let rawMax = 0;
    speakingAnswers.forEach((text, i) => {
        const answerText = text || document.getElementById(`sp_${i}`)?.value || '';
        const wordCount = answerText.split(/\s+/).filter(w => w.length > 0).length;
        // Give 1 point per 3 words, max 1 per question
        rawSpeaking += Math.min(1, Math.floor(wordCount / 3));
        rawMax += 1;
    });
    let sScore = rawMax > 0 ? Math.round((rawSpeaking / rawMax) * 15) : 0;
    total += sScore;
    max += 15;

    const pct = Math.round((total / max) * 100);
    const grade = getGrade(pct);
    const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    window._lastExamScores = {
        username: window.currentUsername || 'Candidate',
        gScore, rScore, lScore, wScore, sScore,
        total, max, pct, grade,
        date: dateStr,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    document.getElementById('examResult').style.display = 'block';
    document.getElementById('examResult').innerHTML = `
        <div class="result-card" id="resultCard">
            <div class="result-header"><h3>📊 Mock Test 5 Result</h3><p class="result-date">📅 ${dateStr}</p></div>
            <div class="result-score-circle"><span class="big-score">${pct}%</span><span class="total-score">${total}/${max}</span></div>
            <div class="result-grade ${grade.class}">${grade.emoji} ${grade.text}</div>
            <div class="result-details">
                <div class="result-item"><span class="section-name">📖 Grammar</span><span class="section-score">${gScore}/40</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(gScore/40*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">📰 Reading</span><span class="section-score">${rScore}/30</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(rScore/30*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">🎧 Listening</span><span class="section-score">${lScore}/25</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(lScore/25*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">✍️ Writing</span><span class="section-score">${wScore}/25</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(wScore/25*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">🗣️ Speaking</span><span class="section-score">${sScore}/15</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(sScore/15*100)}%"></div></div></div>
            </div>
            <button class="download-btn" onclick="downloadPDF()">📥 Download Score Report</button>
            <button class="download-btn" style="margin-top:10px; background: linear-gradient(135deg, #f39c12, #e67e22);" onclick="downloadCertificate()">🎓 Download Certificate</button>
        </div>`;
    document.getElementById('examResult').scrollIntoView({ behavior: 'smooth' });
}

function getGrade(pct) {
    if (pct >= 90) return { class: 'grade-excellent', emoji: '🌟', text: 'A+' };
    if (pct >= 80) return { class: 'grade-excellent', emoji: '⭐', text: 'A' };
    if (pct >= 70) return { class: 'grade-good', emoji: '👍', text: 'B' };
    if (pct >= 60) return { class: 'grade-good', emoji: '📘', text: 'C' };
    if (pct >= 50) return { class: 'grade-fair', emoji: '📗', text: 'D' };
    return { class: 'grade-poor', emoji: '📕', text: 'F' };
}

// ================================================================
//  PDF & CERTIFICATE
// ================================================================
function downloadPDF() {
    const card = document.getElementById('resultCard');
    if (!card) return;
    const btn = card.querySelector('.download-btn');
    if (btn) btn.style.display = 'none';
    window.print();
    if (btn) btn.style.display = 'block';
}

function getCEFR(pct) {
    if (pct >= 90) return 'C2 (Proficient)';
    if (pct >= 80) return 'C1 (Advanced)';
    if (pct >= 70) return 'B2 (Upper Intermediate)';
    if (pct >= 60) return 'B1 (Intermediate)';
    if (pct >= 50) return 'A2 (Elementary)';
    return 'A1 (Beginner)';
}

function generateQRBase64(text) {
    return new Promise((resolve, reject) => {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.left = '-9999px';
        container.style.top = '-9999px';
        document.body.appendChild(container);
        try {
            const qrObj = new QRCode(container, {
                text: text,
                width: 150,
                height: 150,
                colorDark: '#0f4c75',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
            let checkCount = 0;
            const checkInterval = setInterval(() => {
                const img = container.querySelector('img');
                const canvas = container.querySelector('canvas');
                if (img && img.src && img.src.startsWith('data:image')) {
                    clearInterval(checkInterval);
                    const base64Data = img.src;
                    container.remove();
                    resolve(base64Data);
                } else if (canvas) {
                    clearInterval(checkInterval);
                    const base64Data = canvas.toDataURL('image/png');
                    container.remove();
                    resolve(base64Data);
                }
                checkCount++;
                if (checkCount > 30) {
                    clearInterval(checkInterval);
                    container.remove();
                    reject(new Error("QR Code rendering timeout."));
                }
            }, 100);
        } catch (e) {
            container.remove();
            reject(e);
        }
    });
}

async function downloadCertificate() {
    const scores = window._lastExamScores;
    if (!scores) {
        alert('ရလဒ်ဒေတာ မရှိပါ။ ကျေးဇူးပြု၍ စာမေးပွဲပြန်ဖြေပါ။');
        return;
    }
    const { username, total, max, pct, date } = scores;
    const cefr = getCEFR(pct);
    const passFail = pct >= 50 ? 'PASS' : 'FAIL';
    const gradeObj = getGrade(pct);

    if (typeof QRCode === 'undefined') {
        await new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        });
    }
    if (typeof html2canvas === 'undefined') {
        await new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            script.onload = resolve;
            document.head.appendChild(script);
        });
    }

    let qrBase64;
    try {
        const qrText = `MEPT Mock Test Candidate: ${username} Score: ${total}/${max} (${pct}%) Date: ${date}`;
        qrBase64 = await generateQRBase64(qrText);
    } catch (err) {
        console.error(err);
        alert('QR Code ဖန်တီးရာတွင် အဆင်မပြေဖြစ်သွားပါသည်။ ပြန်ကြိုးစားကြည့်ပါ။');
        return;
    }

    const certHTML = `
        <div style="width: 1000px; height: 1414px; margin: 0 auto; font-family: 'Inter', 'Segoe UI', sans-serif; background: #ffffff; box-sizing: border-box; padding: 50px; display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #e2e8f0; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 550px; color: #0f4c75; opacity: 0.04; z-index: 0; pointer-events: none; user-select: none;">⚓</div>
            <div style="text-align: center; border-bottom: 3px solid #f0b429; padding-bottom: 15px; position: relative; z-index: 1;">
                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #f0b429, #e67e22); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(240, 180, 41, 0.4); margin-bottom: 12px; position: relative;">
                    <div style="position: absolute; top: 18px; width: 10px; height: 10px; border: 2.5px solid white; border-radius: 50%; box-sizing: border-box;"></div>
                    <div style="position: absolute; top: 26px; width: 3px; height: 32px; background-color: white;"></div>
                    <div style="position: absolute; top: 33px; width: 16px; height: 3px; background-color: white;"></div>
                    <div style="position: absolute; bottom: 20px; width: 26px; height: 13px; border-bottom: 3px solid white; border-left: 3px solid white; border-right: 3px solid white; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; box-sizing: border-box;">
                        <div style="position: absolute; left: -4px; top: -2px; width: 0; height: 0; border-left: 3px solid transparent; border-right: 3px solid transparent; border-bottom: 5px solid white; transform: rotate(-45deg);"></div>
                        <div style="position: absolute; right: -4px; top: -2px; width: 0; height: 0; border-left: 3px solid transparent; border-right: 3px solid transparent; border-bottom: 5px solid white; transform: rotate(45deg);"></div>
                    </div>
                </div>
                <h2 style="font-size: 2rem; color: #0f4c75; font-weight: 700; margin: 5px 0 0 0; letter-spacing: 2px;">CERTIFICATE OF ACHIEVEMENT</h2>
                <p style="color: #718096; font-size: 1rem; margin: 0; letter-spacing: 4px; text-transform: uppercase;">MEPT Mock Test Platform</p>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 10px 0; position: relative; z-index: 1;">
                <p style="color: #4a5568; font-size: 1.1rem; margin-bottom: 8px; font-weight: 500;">This is to certify that</p>
                <h3 style="font-size: 3.2rem; color: #0f4c75; font-weight: 800; margin: 5px 0 10px 0; text-transform: uppercase; letter-spacing: 3px; border-bottom: 4px solid #f0b429; display: inline-block; padding: 0 20px 10px 20px;">${username}</h3>
                <p style="color: #4a5568; font-size: 1.1rem; margin: 15px 0 5px 0;">has successfully completed the</p>
                <p style="font-size: 1.6rem; font-weight: 700; color: #f0b429; margin: 0 0 15px 0;">MEPT PREPARATION COURSE</p>
                <p style="color: #4a5568; font-size: 1rem; margin-bottom: 10px;">with an overall score of</p>
                <div style="width: 140px; height: 140px; border-radius: 50%; background: linear-gradient(135deg, #0f4c75, #3282b8); color: white; display: inline-flex; flex-direction: column; align-items: center; justify-content: center; margin: 5px auto 20px auto; box-shadow: 0 8px 25px rgba(15, 76, 117, 0.5); border: 4px solid #f0b429;">
                    <span style="font-size: 2.8rem; font-weight: 800; line-height: 1;">${pct}%</span>
                    <span style="font-size: 1rem; opacity: 0.9; margin-top: 2px;">${total}/${max}</span>
                </div>
                <div style="display: flex; gap: 40px; margin-top: 10px; align-items: center; width: 100%; justify-content: center; flex-wrap: wrap;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px 30px; flex: 1; max-width: 500px;">
                        <div style="background: rgba(247, 250, 252, 0.85); padding: 12px 15px; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0; backdrop-filter: blur(2px);">
                            <span style="display: block; font-size: 0.8rem; color: #718096; text-transform: uppercase; letter-spacing: 1px;">CEFR Level</span>
                            <span style="font-size: 1.4rem; font-weight: 700; color: #0f4c75;">${cefr}</span>
                        </div>
                        <div style="background: rgba(247, 250, 252, 0.85); padding: 12px 15px; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0; backdrop-filter: blur(2px);">
                            <span style="display: block; font-size: 0.8rem; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Grade</span>
                            <span style="font-size: 1.6rem; font-weight: 700; color: #f0b429;">${gradeObj.text}</span>
                        </div>
                        <div style="background: rgba(247, 250, 252, 0.85); padding: 12px 15px; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0; backdrop-filter: blur(2px);">
                            <span style="display: block; font-size: 0.8rem; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Result</span>
                            <span style="font-size: 1.3rem; font-weight: 700; color: ${passFail === 'PASS' ? '#38a169' : '#e53e3e'};">${passFail}</span>
                        </div>
                        <div style="background: rgba(247, 250, 252, 0.85); padding: 12px 15px; border-radius: 12px; text-align: center; border: 1px solid #e2e8f0; backdrop-filter: blur(2px);">
                            <span style="display: block; font-size: 0.8rem; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Date</span>
                            <span style="font-size: 1.2rem; font-weight: 700; color: #0f4c75;">${date}</span>
                        </div>
                    </div>
                    <div style="flex-shrink: 0; border: 3px solid #0f4c75; border-radius: 16px; padding: 8px; background: white; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                        <img src="${qrBase64}" alt="QR Code" style="width: 120px; height: 120px; display: block;">
                    </div>
                </div>
            </div>
            <div style="border-top: 2px solid #e2e8f0; padding-top: 20px; text-align: center; margin-top: 10px; position: relative; z-index: 1;">
                <p style="font-size: 0.8rem; color: #a0aec0; font-style: italic; margin: 0;">* This is a mock test certificate for self-assessment purposes only. Not an official certification.</p>
                <div style="display: flex; justify-content: center; gap: 30px; margin-top: 8px; font-size: 0.75rem; color: #718096;">
                    <span>Certificate ID: MEPT-${Date.now().toString().slice(-6)}</span>
                    <span>|</span>
                    <span>Verified via QR Code</span>
                </div>
            </div>
        </div>`;

    const container = document.createElement('div');
    container.id = 'certificate-container';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '1000px';
    container.style.background = 'white';
    container.innerHTML = certHTML;
    document.body.appendChild(container);

    try {
        const canvas = await html2canvas(container, {
            scale: 2.0,
            useCORS: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            logging: false,
            width: 1000,
            height: 1414
        });
        const finalImage = canvas.toDataURL('image/png');
        container.remove();
        showPreviewModal(finalImage, username);
    } catch (err) {
        console.error('Certificate generation error:', err);
        alert('Certificate ထုတ်ယူရာတွင် အမှားရှိပါသည်။');
        container.remove();
    }
}

function showPreviewModal(imageSrc, username) {
    const oldModal = document.getElementById('cert-preview-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'cert-preview-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '99999';
    modal.style.fontFamily = 'sans-serif';
    modal.style.padding = '20px';
    modal.style.boxSizing = 'border-box';

    const wrapper = document.createElement('div');
    wrapper.style.backgroundColor = '#fff';
    wrapper.style.padding = '20px';
    wrapper.style.borderRadius = '12px';
    wrapper.style.maxWidth = '500px';
    wrapper.style.width = '100%';
    wrapper.style.textAlign = 'center';
    wrapper.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.3)';

    const title = document.createElement('h3');
    title.innerText = 'Certificate Preview';
    title.style.margin = '0 0 10px 0';
    title.style.color = '#0f4c75';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.width = '100%';
    img.style.maxHeight = '60vh';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '6px';
    img.style.border = '1px solid #e2e8f0';
    img.style.marginBottom = '20px';

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '10px';
    btnGroup.style.justifyContent = 'center';

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'ပိတ်မည်';
    cancelBtn.style.padding = '10px 20px';
    cancelBtn.style.border = '1px solid #cbd5e1';
    cancelBtn.style.backgroundColor = '#fff';
    cancelBtn.style.color = '#475569';
    cancelBtn.style.borderRadius = '6px';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.onclick = () => modal.remove();

    const downloadBtn = document.createElement('button');
    downloadBtn.innerText = 'Download ရယူမည်';
    downloadBtn.style.padding = '10px 20px';
    downloadBtn.style.border = 'none';
    downloadBtn.style.backgroundColor = '#0f4c75';
    downloadBtn.style.color = '#fff';
    downloadBtn.style.borderRadius = '6px';
    downloadBtn.style.cursor = 'pointer';
    downloadBtn.style.fontWeight = 'bold';
    downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.download = `MEPT-Certificate-${username}-${Date.now()}.png`;
        link.href = imageSrc;
        link.click();
        modal.remove();
    };

    btnGroup.appendChild(cancelBtn);
    btnGroup.appendChild(downloadBtn);
    wrapper.appendChild(title);
    wrapper.appendChild(img);
    wrapper.appendChild(btnGroup);
    modal.appendChild(wrapper);
    document.body.appendChild(modal);
}
