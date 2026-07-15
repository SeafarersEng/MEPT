/* ==========================================
   score.js - MEPT Speaking Test
   (answerResults ကို speak.js မှာ သိမ်းထားပြီးသားမို့ ဒီမှာ မကြေငြာတော့ပါ)
========================================== */

function calculateScore(answer, keywords) {
    if (!answer || answer.length === 0) return 0;
    let text = answer.toLowerCase();
    let matched = 0;
    keywords.forEach(function(word) {
        if (text.includes(word.toLowerCase())) {
            matched++;
        }
    });
    return Math.round((matched / keywords.length) * 100);
}

function saveAnswerResult(question, transcript) {
    let score = calculateScore(transcript, question.keywords);
    
    // answerResults ကို speak.js မှာ သိမ်းထားတာမို့ ဒီမှာ ထည့်တယ်
    if (typeof answerResults !== 'undefined') {
        answerResults.push({
            question: question.prompt,
            questionType: question.type || "Short Answer",
            answer: transcript || "[No answer provided]",
            keywordScore: score,
            keywords: question.keywords || []
        });
        console.log(`✅ Q${answerResults.length} Score: ${score}%`);
    } else {
        console.error("❌ answerResults not defined! Make sure speak.js loads first.");
    }
}

function calculateOverallScore() {
    if (typeof answerResults === 'undefined' || answerResults.length === 0) return 0;
    let total = 0;
    answerResults.forEach(function(item) {
        total += item.keywordScore;
    });
    return Math.round(total / answerResults.length);
}

function getGrade(score) {
    if (score >= 85) {
        return { grade: "A", label: "Professional Pass", description: "Excellent! You have strong maritime English skills.", color: "#22c55e" };
    } else if (score >= 70) {
        return { grade: "B", label: "Operational Pass", description: "Good! You can communicate effectively on board.", color: "#38bdf8" };
    } else if (score >= 50) {
        return { grade: "C", label: "Needs Improvement", description: "Practice more to improve your maritime vocabulary.", color: "#eab308" };
    } else {
        return { grade: "D", label: "Development Required", description: "You need to study maritime English further.", color: "#ef4444" };
    }
}

function showResult() {
    let overall = calculateOverallScore();
    let gradeInfo = getGrade(overall);
    let status = overall >= 70 ? "PASS ✅" : "FAIL ❌";

    let html = `
        <div style="text-align:center; padding: 16px 0;">
            <div style="font-size: 48px; font-weight: 800; color: ${gradeInfo.color};">${gradeInfo.grade}</div>
            <h2 style="font-size: 24px; margin: 8px 0;">${gradeInfo.label}</h2>
            <p style="color: #94a3b8; font-size: 14px;">${gradeInfo.description}</p>
            <div style="display: flex; justify-content: center; gap: 20px; margin: 16px 0;">
                <div>
                    <div style="font-size: 32px; font-weight: 700; color: #38bdf8;">${overall}%</div>
                    <div style="font-size: 12px; color: #64748b;">Overall Score</div>
                </div>
                <div>
                    <div style="font-size: 32px; font-weight: 700; color: ${overall >= 70 ? '#22c55e' : '#ef4444'};">${status}</div>
                    <div style="font-size: 12px; color: #64748b;">Result</div>
                </div>
            </div>
        </div>
        <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
        <div style="max-height: 300px; overflow-y: auto; padding-right: 8px;">
    `;

    if (typeof answerResults !== 'undefined') {
        answerResults.forEach(function(item, index) {
            let scoreColor = item.keywordScore >= 70 ? '#22c55e' : (item.keywordScore >= 50 ? '#eab308' : '#ef4444');
            html += `
                <div style="background: rgba(30, 41, 59, 0.5); border-radius: 12px; padding: 12px; margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="color: #38bdf8; font-size: 14px; margin: 0;">Q${index + 1}: ${item.questionType}</h3>
                        <span style="font-weight: 700; color: ${scoreColor};">${item.keywordScore}%</span>
                    </div>
                    <p style="color: #94a3b8; font-size: 13px; margin: 4px 0;">${item.question}</p>
                    <p style="color: #e2e8f0; font-size: 14px; margin: 4px 0; background: #0f172a; padding: 8px; border-radius: 8px;">"${item.answer}"</p>
                </div>
            `;
        });
    }

    html += `</div>`;
    document.getElementById("resultBox").innerHTML = html;
    document.getElementById("processingScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");
}

function clearResults() {
    if (typeof answerResults !== 'undefined') {
        answerResults = [];
    }
}
