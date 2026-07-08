const STORAGE_KEY = 'mept_all_users';

async function startExam() {
    const username = document.getElementById('loginUsername').value.trim();
    const key = document.getElementById('loginKey').value.trim();
    if (!username || !key) {
        document.getElementById('loginStatus').innerHTML = '<p style="color:red;">⚠️ ဖြည့်ပါ</p>';
        return;
    }

    let user = null;
    try {
        const response = await fetch('users.json');
        const remoteUsers = await response.json();
        user = remoteUsers.find(u => u.username === username && u.password === key);
    } catch (e) { console.log('users.json not available'); }
    if (!user) {
        const localUsers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        user = localUsers.find(u => u.username === username && u.password === key);
    }
    if (!user) {
        document.getElementById('loginStatus').innerHTML = '<p style="color:red;">❌ မှားယွင်းနေပါသည်</p>';
        return;
    }

    const today = new Date(); today.setHours(0,0,0,0);
    const exp = new Date(user.expireDate);
    const start = user.startDate ? new Date(user.startDate) : null;
    if (start && today < start) {
        document.getElementById('loginStatus').innerHTML = `<p style="color:red;">❌ ${user.startDate} မှ စတင်နိုင်ပါမည်</p>`;
        return;
    }
    if (today > exp) {
        document.getElementById('loginStatus').innerHTML = `<p style="color:red;">❌ သက်တမ်းကုန်ပါပြီ (${user.expireDate})</p>`;
        return;
    }

    window.currentUsername = username;
    document.getElementById('examAuth').style.display = 'none';
    document.getElementById('examContent').style.display = 'block';
    loadFixedExam();
    startTimer(120);
}
// ======================== TIMER ========================
let timerInterval;
function startTimer(min) {
    let time = min * 60;
    const display = document.getElementById('timer');
    timerInterval = setInterval(() => {
        time--;
        const m = Math.floor(time/60);
        const s = time%60;
        display.textContent = `⏱️ ${m}:${s.toString().padStart(2,'0')}`;
        if (time <= 0) { clearInterval(timerInterval); alert('⏰ အချိန်ပြည့်ပါပြီ'); submitExam(); }
    }, 1000);
}

// ======================== FIXED QUESTIONS DATA ========================
const grammarQuestions = [
    { q:"The crew ________ the deck every morning.", opts:["a) cleans","b) clean","c) cleaning"], ans:"a" },
    { q:"My name ________ Aung. I am a seafarer.", opts:["a) is","b) are","c) am"], ans:"a" },
    { q:"The ship ________ at the port yesterday.", opts:["a) arrive","b) arrived","c) arriving"], ans:"b" },
    { q:"We always ________ life jackets on deck.", opts:["a) wear","b) wears","c) wearing"], ans:"a" },
    { q:"There ________ many lifeboats on the ship.", opts:["a) is","b) are","c) has"], ans:"b" },
    { q:"She ________ to the bridge now.", opts:["a) go","b) goes","c) is going"], ans:"c" },
    { q:"The captain ________ the weather report an hour ago.", opts:["a) read","b) reads","c) reading"], ans:"a" },
    { q:"I can ________ English and Burmese.", opts:["a) speak","b) speaks","c) speaking"], ans:"a" },
    { q:"This rope is ________ than that one.", opts:["a) long","b) longer","c) longest"], ans:"b" },
    { q:"The engineer ________ the engine right now.", opts:["a) check","b) checks","c) is checking"], ans:"c" },
    { q:"You must not ________ near the bunkering station.", opts:["a) smoke","b) smokes","c) smoking"], ans:"a" },
    { q:"The bosun asked me ________ the mooring ropes.", opts:["a) to check","b) check","c) checking"], ans:"a" },
    { q:"The sea conditions ________ very rough last night.", opts:["a) was","b) were","c) is"], ans:"b" },
    { q:"She ________ finished her safety training yet.", opts:["a) hasn't","b) haven't","c) didn't"], ans:"a" },
    { q:"The ship will depart ________ Tuesday morning.", opts:["a) on","b) in","c) at"], ans:"a" },
    { q:"He speaks maritime English very ________.", opts:["a) good","b) well","c) better"], ans:"b" },
    { q:"There is too ________ water in the bilge.", opts:["a) many","b) much","c) few"], ans:"b" },
    { q:"The engineers ________ repaired the broken valve.", opts:["a) have","b) has","c) having"], ans:"a" },
    { q:"Don't forget ________ your safety harness before climbing.", opts:["a) to wear","b) wear","c) wearing"], ans:"a" },
    { q:"The crew ________ finished the cleaning yet.", opts:["a) haven't","b) hasn't","c) didn't"], ans:"a" }
];

const readingPassages = [
    {
        title: "Working on a Cruise Ship",
        text: "Working on a cruise ship is very different from other ships. The crew must be friendly and helpful because they deal with thousands of passengers every week. Many workers come from different countries, so English is the main language used on board. The working day can be long, often 10 to 12 hours. However, crew members get free food and a place to sleep. In their free time, they can use the gym, watch movies, or call their families using the internet. Safety is also very important. Every week, there are safety drills for fire and emergency situations. All crew must attend these drills.",
        questions: [
            {q:"Cruise ship crew must be friendly.", ans:"T"},
            {q:"English is rarely used on a cruise ship.", ans:"F"},
            {q:"Workers usually work less than 8 hours a day.", ans:"F"},
            {q:"Crew can use the gym in their free time.", ans:"T"},
            {q:"Safety drills happen every month.", ans:"F"}
        ]
    },
    {
        title: "Importance of English for Seafarers",
        text: "English is the international language of the sea. All seafarers must know basic English to communicate with other crew members, port authorities, and during emergencies. The IMO (International Maritime Organization) has standard phrases called SMCP (Standard Marine Communication Phrases) that all seafarers should use. Understanding English also helps seafarers read safety instructions, charts, and manuals. If a seafarer cannot speak English well, it can be dangerous because they might not understand important orders. That is why many maritime schools teach English as a very important subject.",
        questions: [
            {q:"English is the international language of the sea.", ans:"T"},
            {q:"Seafarers do not need to communicate with port authorities.", ans:"F"},
            {q:"SMCP stands for Standard Marine Communication Phrases.", ans:"T"},
            {q:"Understanding English helps seafarers read safety instructions.", ans:"T"},
            {q:"Not speaking English well has no risks.", ans:"F"}
        ]
    }
];

const listeningQuestions = [
    { q:"What did the Third Engineer complete?", opts:["A. Engine repair","B. Daily inspection of the purifier room","C. Safety drill"], ans:"B" },
    { q:"What did he notice in the number two fuel oil purifier?", opts:["A. Oil leak","B. A slight vibration","C. Blocked filter"], ans:"B" },
    { q:"According to the Second Engineer, what can a small vibration indicate?", opts:["A. Normal operation","B. Bearing failure","C. Oil change"], ans:"B" },
    { q:"Did the Third Engineer log the problem and report it?", opts:["A. Yes, immediately","B. Not yet","C. He did not find any problem"], ans:"B" },
    { q:"How long did the Third Engineer want to wait?", opts:["A. One day","B. One hour","C. One week"], ans:"B" },
    { q:"What did the Second Engineer say about delayed reporting?", opts:["A. It can lead to a major breakdown","B. It is acceptable","C. It saves time"], ans:"A" },
    { q:"What did the Second Engineer ask the Third Engineer to do?", opts:["A. Monitor another hour","B. Log it immediately and check bearings","C. Call the Chief Engineer"], ans:"B" },
    { q:"Where did the Second Engineer want to go together?", opts:["A. To the bridge","B. To check the bearings","C. To the mess room"], ans:"B" },
    { q:"Who is the Second Engineer speaking to?", opts:["A. Chief Engineer","B. Third Engineer","C. Bosun"], ans:"B" },
    { q:"What is the main message of the conversation?", opts:["A. Always follow orders","B. Delayed reporting can cause major problems","C. The purifier is working perfectly"], ans:"B" }
];

const writingTasks = {
    part1: {
        A: { title:"Report a Slippery Deck", task:"Write a short message to the Bosun about a slippery area near the gangway. Explain why it is dangerous. (approx. 25 words)", keywords:["slippery","gangway","bosun","dangerous","wet","report"] },
        B: { title:"Request for PPE", task:"Write a short message to the Safety Officer asking for new gloves because yours are damaged. (approx. 25 words)", keywords:["gloves","damaged","safety","officer","need","replace"] }
    },
    part2: {
        A: { title:"Teamwork on Board", task:"Describe a time when you had to work as a team on the ship. What was the task? How did you help each other? Why was teamwork important? (80-100 words)", keywords:["teamwork","together","help","communication","task","success"] },
        B: { title:"Learning a New Skill", task:"Write about a new skill you learned on the ship. Who taught you? How did you practice? How will this skill help you in your career? (80-100 words)", keywords:["learn","skill","teach","practice","career","helpful"] }
    }
};

const speakingQuestions = {
    part1: [
        { q:"What is your full name and where do you come from?", keywords:["name","from","live","Myanmar"] },
        { q:"What is your job on the ship?", keywords:["job","cadet","seaman","officer"] },
        { q:"How long have you been working at sea?", keywords:["year","month","started","experience"] },
        { q:"What do you like most about your job?", keywords:["like","enjoy","travel","sea","friend"] },
        { q:"What is your favorite meal on the ship?", keywords:["meal","favorite","cook","rice","chicken"] }
    ],
    part2: [
        { q:"What time do you wake up and start work?", keywords:["wake","morning","start","work","watch"] },
        { q:"What do you do during your daily duties?", keywords:["duty","deck","painting","maintenance","cleaning"] },
        { q:"How often do you have safety drills?", keywords:["drill","safety","weekly","monthly","fire"] },
        { q:"What PPE do you wear every day?", keywords:["PPE","helmet","gloves","boots","lifejacket"] },
        { q:"Who do you report to if you find a problem?", keywords:["report","bosun","officer","problem","safety"] }
    ],
    part3: {
        warmups: [
            { q:"Do you think English is important for seafarers? Why?", keywords:["English","important","communication","international","safety"] },
            { q:"What can happen if a seafarer does not speak English well?", keywords:["mistake","dangerous","misunderstand","order"] },
            { q:"How can seafarers improve their English?", keywords:["practice","study","speak","listen","class"] }
        ],
        debates: [
            { statement:"'All seafarers should speak good English.' Do you agree?", keywords:["agree","English","important","safety","communication"] },
            { statement:"'English is more important than other subjects for a seafarer.' Do you agree?", keywords:["agree","disagree","English","subject","important","navigation"] },
            { statement:"'Maritime schools should teach only in English.' Do you agree?", keywords:["agree","disagree","English","school","teach","understand"] },
            { statement:"'Speaking English well can help you get a better job.' Do you agree?", keywords:["agree","English","job","promotion","career"] },
            { statement:"'Learning English is easy for everyone.' Do you agree?", keywords:["agree","disagree","easy","hard","practice"] }
        ]
    }
};

// ======================== LOAD FIXED EXAM ========================
function loadFixedExam() {
    // Grammar
    let gHtml = '';
    grammarQuestions.forEach((q, i) => {
        gHtml += `<div class="question"><p><strong>${i+1}.</strong> ${q.q}</p><div class="options">`;
        q.opts.forEach(opt => { gHtml += `<label><input type="radio" name="gq${i}" value="${opt.charAt(0)}"> ${opt}</label>`; });
        gHtml += `</div></div>`;
    });
    document.getElementById('grammarQuestions').innerHTML = gHtml;

    // Reading
    let rHtml = '', qNum = 1;
    readingPassages.forEach(pass => {
        rHtml += `<div class="reading-passage"><h4>${pass.title}</h4><p>${pass.text}</p>`;
        pass.questions.forEach(q => {
            rHtml += `<div class="question"><p><strong>${qNum++}.</strong> ${q.q}</p>
            <select id="rq${qNum-2}"><option value="">Select</option><option value="T">True</option><option value="F">False</option></select></div>`;
        });
        rHtml += `</div>`;
    });
    document.getElementById('readingQuestions').innerHTML = rHtml;

    // Listening
    let lHtml = `<div class="card"><h4>Listening Task</h4>
        <div class="audio-container"><p><em>🎧 Listen carefully. You may play <strong>twice</strong> only.</em></p>
        <audio class="exam-audio" id="audioTask" controls>
            <source src="set2part2.mp3" type="audio/mpeg">
            Your browser does not support audio.
        </audio>
        <p class="audio-remaining" id="audioRemaining">⏳ Remaining plays: 2</p></div>`;
    listeningQuestions.forEach((q, i) => {
        lHtml += `<div class="question"><p><strong>${i+1}.</strong> ${q.q}</p><div class="options">`;
        q.opts.forEach(opt => { lHtml += `<label><input type="radio" name="lq${i}" value="${opt.charAt(0)}"> ${opt}</label>`; });
        lHtml += `</div></div>`;
    });
    lHtml += `</div>`;
    document.getElementById('listeningQuestions').innerHTML = lHtml;
    setupAudioLimit('audioTask', 'audioRemaining');

    // Writing
    let wHtml = `<div class="card"><h4>Part 1 (approx. 25 words) – Choose ONE</h4>
        <div class="option-card"><h5>Option A: ${writingTasks.part1.A.title}</h5><p>${writingTasks.part1.A.task}</p><p style="font-size:0.85rem;color:#666;">💡 Keywords: ${writingTasks.part1.A.keywords.join(', ')}</p><textarea id="w1A" rows="3" placeholder="Type here..."></textarea></div>
        <div class="option-card"><h5>Option B: ${writingTasks.part1.B.title}</h5><p>${writingTasks.part1.B.task}</p><p style="font-size:0.85rem;color:#666;">💡 Keywords: ${writingTasks.part1.B.keywords.join(', ')}</p><textarea id="w1B" rows="3" placeholder="Type here..."></textarea></div></div>
        <div class="card"><h4>Part 2 (80–100 words) – Choose ONE</h4>
        <div class="option-card"><h5>Option A: ${writingTasks.part2.A.title}</h5><p>${writingTasks.part2.A.task}</p><p style="font-size:0.85rem;color:#666;">💡 Keywords: ${writingTasks.part2.A.keywords.join(', ')}</p><textarea id="w2A" rows="5" placeholder="Type here..."></textarea></div>
        <div class="option-card"><h5>Option B: ${writingTasks.part2.B.title}</h5><p>${writingTasks.part2.B.task}</p><p style="font-size:0.85rem;color:#666;">💡 Keywords: ${writingTasks.part2.B.keywords.join(', ')}</p><textarea id="w2B" rows="5" placeholder="Type here..."></textarea></div></div>`;
    document.getElementById('writingQuestions').innerHTML = wHtml;

    // Speaking
    let sHtml = `<h4>Part I – Introduction and Career Life</h4>`;
    speakingQuestions.part1.forEach((q, i) => {
        sHtml += `<div class="card"><p><strong>Q${i+1}:</strong> ${q.q}</p><textarea id="sp1_${i}" rows="2" placeholder="Type your answer..."></textarea></div>`;
    });
    sHtml += `<h4>Part II – Understanding the Situation</h4>`;
    speakingQuestions.part2.forEach((q, i) => {
        sHtml += `<div class="card"><p><strong>Q${i+1}:</strong> ${q.q}</p><textarea id="sp2_${i}" rows="2" placeholder="Type your answer..."></textarea></div>`;
    });
    sHtml += `<h4>Part III – Debate Conversation</h4><p><em>Warm-up Questions</em></p>`;
    speakingQuestions.part3.warmups.forEach((q, i) => {
        sHtml += `<div class="card"><p><strong>Warm-up ${i+1}:</strong> ${q.q}</p><textarea id="sp3w_${i}" rows="2" placeholder="Type your answer..."></textarea></div>`;
    });
    sHtml += `<p><em>Debate Statements (Agree or Disagree)</em></p>`;
    speakingQuestions.part3.debates.forEach((q, i) => {
        sHtml += `<div class="card"><p><strong>Statement ${i+1}:</strong> ${q.statement}</p><textarea id="sp3d_${i}" rows="2" placeholder="Type your response..."></textarea></div>`;
    });
    document.getElementById('speakingQuestions').innerHTML = sHtml;
}

// ======================== AUDIO LIMIT ========================
function setupAudioLimit(audioId, remainingId) {
    const audio = document.getElementById(audioId);
    const remainingDisplay = document.getElementById(remainingId);
    if (!audio || !remainingDisplay) return;
    let playCount = 0;
    audio.addEventListener('ended', () => {
        playCount++;
        const remaining = 2 - playCount;
        if (remaining <= 0) {
            audio.disabled = true;
            audio.controls = false;
            remainingDisplay.textContent = '❌ Playback limit reached (2 times)';
            remainingDisplay.style.color = 'red';
        } else {
            remainingDisplay.textContent = `⏳ Remaining plays: ${remaining}`;
        }
    });
}

// ======================== SUBMIT & GRADING ========================
function submitExam() {
    clearInterval(timerInterval);
    let total = 0, max = 0;

    // Grammar (20 x 1)
    let gScore = 0;
    grammarQuestions.forEach((q, i) => {
        const sel = document.querySelector(`input[name="gq${i}"]:checked`);
        if (sel && sel.value === q.ans) gScore++;
    });
    total += gScore; max += 20;

    // Reading (10 x 1.5 = 15)
    let rScore = 0, rTotal = 0;
    readingPassages.forEach(pass => {
        pass.questions.forEach((q, idx) => {
            const sel = document.getElementById(`rq${rTotal}`);
            if (sel && sel.value === q.ans) rScore += 1.5;
            rTotal++;
        });
    });
    total += rScore; max += 15;

    // Listening (10 x 2.5 = 25)
    let lScore = 0;
    listeningQuestions.forEach((q, i) => {
        const sel = document.querySelector(`input[name="lq${i}"]:checked`);
        if (sel && sel.value === q.ans) lScore += 2.5;
    });
    total += lScore; max += 25;

    // Writing (Part1:10, Part2:15)
    let wScore = 0;
    const w1A = document.getElementById('w1A')?.value || '';
    const w1B = document.getElementById('w1B')?.value || '';
    const text1 = w1A.length >= w1B.length ? w1A : w1B;
    const kw1 = text1 === w1A ? writingTasks.part1.A.keywords : writingTasks.part1.B.keywords;
    let c = 0; kw1.forEach(k => { if (text1.toLowerCase().includes(k)) c++; });
    wScore += Math.min(10, c * 2);
    const w2A = document.getElementById('w2A')?.value || '';
    const w2B = document.getElementById('w2B')?.value || '';
    const text2 = w2A.length >= w2B.length ? w2A : w2B;
    const kw2 = text2 === w2A ? writingTasks.part2.A.keywords : writingTasks.part2.B.keywords;
    c = 0; kw2.forEach(k => { if (text2.toLowerCase().includes(k)) c++; });
    wScore += Math.min(15, Math.floor(c * 1.5));
    total += wScore; max += 25;

    // Speaking (raw max 18, scale to 15)
    let rawSpeaking = 0, rawMax = 0;
    const addSpeakingScore = (arr, prefix, maxPerQ) => {
        arr.forEach((q, i) => {
            const text = document.getElementById(`${prefix}${i}`)?.value || '';
            let cc = 0; q.keywords.forEach(k => { if (text.toLowerCase().includes(k)) cc++; });
            rawSpeaking += Math.min(maxPerQ, cc);
            rawMax += maxPerQ;
        });
    };
    addSpeakingScore(speakingQuestions.part1, 'sp1_', 1);
    addSpeakingScore(speakingQuestions.part2, 'sp2_', 1);
    addSpeakingScore(speakingQuestions.part3.warmups, 'sp3w_', 1);
    addSpeakingScore(speakingQuestions.part3.debates, 'sp3d_', 1);
    let sScore = Math.round((rawSpeaking / rawMax) * 15);
    total += sScore; max += 15;

    const pct = Math.round((total / max) * 100);
    const grade = getGrade(pct);
    const dateStr = new Date().toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });

    window._lastExamScores = {
        username: window.currentUsername || 'Unknown',
        gScore, rScore, lScore, wScore, sScore,
        total, max, pct, grade,
        date: dateStr,
        time: new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit' })
    };

    document.getElementById('examResult').style.display = 'block';
    document.getElementById('examResult').innerHTML = `
        <div class="result-card" id="resultCard">
            <div class="result-header"><h3>📊 Mock Test 5 Result</h3><p class="result-date">📅 ${dateStr}</p></div>
            <div class="result-score-circle"><span class="big-score">${pct}%</span><span class="total-score">${total}/${max}</span></div>
            <div class="result-grade ${grade.class}">${grade.emoji} ${grade.text}</div>
            <div class="result-details">
                <div class="result-item"><span class="section-name">📖 Grammar</span><span class="section-score">${gScore}/20</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(gScore/20*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">📰 Reading</span><span class="section-score">${rScore}/15</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(rScore/15*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">🎧 Listening</span><span class="section-score">${lScore}/25</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(lScore/25*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">✍️ Writing</span><span class="section-score">${wScore}/25</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(wScore/25*100)}%"></div></div></div>
                <div class="result-item"><span class="section-name">🗣️ Speaking</span><span class="section-score">${sScore}/15</span><div class="section-bar"><div class="section-bar-fill" style="width:${Math.round(sScore/15*100)}%"></div></div></div>
            </div>
            <button class="download-btn" onclick="downloadPDF()">📥 Download Score Report</button>
            <button class="download-btn" style="margin-top:10px; background: linear-gradient(135deg, #f39c12, #e67e22);" onclick="downloadCertificate()">🎓 Download Certificate</button>
        </div>`;
    document.getElementById('examResult').scrollIntoView({ behavior:'smooth' });
}
// ၁။ Grade သတ်မှတ်ပေးမည့် Function
function getGrade(pct) {
    if (pct >= 90) return { class: 'grade-excellent', text: ' (A+)' };
    if (pct >= 80) return { class: 'grade-excellent', text: ' (A)' };
    if (pct >= 70) return { class: 'grade-good',      text: ' (B)' };
    if (pct >= 60) return { class: 'grade-good',      text: ' (C)' };
    if (pct >= 50) return { class: 'grade-fair',      text: ' (D)' };
    return { class: 'grade-poor',      text: ' (F)' };
}

// ၂။ CEFR Mapping Function
function getCEFR(pct) {
    if (pct >= 90) return 'C2 (Proficient)';
    if (pct >= 80) return 'C1 (Advanced)';
    if (pct >= 70) return 'B2 (Upper Intermediate)';
    if (pct >= 60) return 'B1 (Intermediate)';
    if (pct >= 50) return 'A2 (Elementary)';
    return 'A1 (Beginner)';
}

// ၃။ ရလဒ် Card ကို PDF အဖြစ် Print ထုတ်ပေးမည့် Function
function downloadPDF() {
    const card = document.getElementById('resultCard');
    if (!card) return;
    const btn = card.querySelector('.download-btn');
    if (btn) btn.style.display = 'none';
    window.print();
    if (btn) btn.style.display = 'block';
}

// ၄။ QR Code ကို Base64 အဖြစ် ပြောင်းလဲပေးမည့် Function
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

// ၅။ Main Function: HTML/CSS သီးသန့်ဖြင့် Anchor Logo သေချာပေါက်ပေါ်အောင် ပြင်ဆင်ထားသည့် စနစ်
async function downloadCertificate() {
    const scores = window._lastExamScores;
    if (!scores) {
        alert('ရလဒ်ဒေတာ မရှိပါ။ ကျေးဇူးပြု၍ စာမေးပွဲပြန်ဖြေပါ။');
        return;
    }

    const { username, total, max, pct, date } = scores;
    const cefr = getCEFR(pct); 
    const passFail = pct >= 50 ? 'PASS' : 'FAIL';
    const currentGrade = getGrade(pct);

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

    // Certificate HTML Template
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
                        <span style="font-size: 1.6rem; font-weight: 700; color: #f0b429;">${currentGrade.text.trim()}</span>
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

        const finalCertificateImageBase64 = canvas.toDataURL('image/png');
        container.remove(); 

        showPreviewModal(finalCertificateImageBase64, username);

    } catch (err) {
        console.error('Certificate generation error:', err);
        alert('Certificate ထုတ်ယူရာတွင် အမှားရှိပါသည်။');
        container.remove();
    }
}

// ၆။ Preview UI Modal Function
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
