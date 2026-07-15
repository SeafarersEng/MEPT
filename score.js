/* ==========================================
   score.js
   MEPT Speaking Test
   Answer Evaluation System
========================================== */

let answerResults = [];

// ==========================================
// CHECK KEYWORDS
// ==========================================

function calculateScore(answer, keywords) {
    if (!answer || answer.length === 0) {
        return 0;
    }

    let text = answer.toLowerCase();
    let matched = 0;

    keywords.forEach(function(word) {
        if (text.includes(word.toLowerCase())) {
            matched++;
        }
    });

    let score = Math.round((matched / keywords.length) * 100);
    return score;
}

// ==========================================
// SAVE QUESTION RESULT
// ==========================================

function saveAnswerResult(question, transcript) {
    let score = calculateScore(transcript, question.keywords);

    answerResults.push({
        question: question.prompt,
        questionType: question.type || "Short Answer",
        answer: transcript || "[No answer provided]",
        keywordScore: score,
        keywords: question.keywords || []
    });

    console.log(`✅ Q${answerResults.length} Score: ${score}%`);
    console.log(`   Keywords: ${question.keywords.join(', ')}`);
    console.log(`   Answer: "${transcript}"`);
}

// ==========================================
// OVERALL SCORE
// ==========================================

function calculateOverallScore() {
    if (answerResults.length === 0) {
        return 0;
    }

    let total = 0;
    answerResults.forEach(function(item) {
        total += item.keywordScore;
    });

    return Math.round(total / answerResults.length);
}

// ==========================================
// GET GRADE
// ==========================================

function getGrade(score) {
    if (score >= 85) {
        return {
            grade: "A",
            label: "Professional Pass",
            description: "Excellent! You have strong maritime English skills.",
            color: "#22c55e" // green
        };
    } else if (score >= 70) {
        return {
            grade: "B",
            label: "Operational Pass",
            description: "Good! You can communicate effectively on board.",
            color: "#38bdf8" // blue
        };
    } else if (score >= 50) {
        return {
            grade: "C",
            label: "Needs Improvement",
            description: "Practice more to improve your maritime vocabulary.",
            color: "#eab308" // yellow
        };
    } else {
        return {
            grade: "D",
            label: "Development Required",
            description: "You need to study maritime English further.",
            color: "#ef4444" // red
        };
    }
}

// ==========================================
// SHOW FINAL RESULT
// ==========================================

function showResult() {
    let overall = calculateOverallScore();
    let gradeInfo = getGrade(overall);
    let status = overall >= 70 ? "PASS ✅" : "FAIL ❌";

    let html = `
        <div style="text-align:center; padding: 16px 0;">
            <div style="font-size: 48px; font-weight: 800; color: ${gradeInfo.color};">
                ${gradeInfo.grade}
            </div>
            <h2 style="font-size: 24px; margin: 8px 0;">
                ${gradeInfo.label}
            </h2>
            <p style="color: #94a3b8; font-size: 14px;">
                ${gradeInfo.description}
            </p>
            <div style="display: flex; justify-content: center; gap: 20px; margin: 16px 0;">
                <div>
                    <div style="font-size: 32px; font-weight: 700; color: #38bdf8;">
                        ${overall}%
                    </div>
                    <div style="font-size: 12px; color: #64748b;">Overall Score</div>
                </div>
                <div>
                    <div style="font-size: 32px; font-weight: 700; color: ${overall >= 70 ? '#22c55e' : '#ef4444'};">
                        ${status}
                    </div>
                    <div style="font-size: 12px; color: #64748b;">Result</div>
                </div>
            </div>
        </div>
        <hr style="border: none; border-top: 1px solid #334155; margin: 16px 0;">
        <div style="max-height: 300px; overflow-y: auto; padding-right: 8px;">
    `;

    answerResults.forEach(function(item, index) {
        let scoreColor = item.keywordScore >= 70 ? '#22c55e' : (item.keywordScore >= 50 ? '#eab308' : '#ef4444');
        
        html += `
            <div style="background: rgba(30, 41, 59, 0.5); border-radius: 12px; padding: 12px; margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="color: #38bdf8; font-size: 14px; margin: 0;">
                        Q${index + 1}: ${item.questionType}
                    </h3>
                    <span style="font-weight: 700; color: ${scoreColor};">
                        ${item.keywordScore}%
                    </span>
                </div>
                <p style="color: #94a3b8; font-size: 13px; margin: 4px 0;">
                    ${item.question}
                </p>
                <p style="color: #e2e8f0; font-size: 14px; margin: 4px 0; background: #0f172a; padding: 8px; border-radius: 8px;">
                    "${item.answer}"
                </p>
            </div>
        `;
    });

    html += `
        </div>
    `;

    document.getElementById("resultBox").innerHTML = html;
    document.getElementById("processingScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");
}

// ==========================================
// CLEAR RESULT
// ==========================================

function clearResults() {
    answerResults = [];
}

// ==========================================
// EXPORT RESULT (Optional)
// ==========================================

function exportResult() {
    let overall = calculateOverallScore();
    let data = {
        overallScore: overall,
        answers: answerResults,
        timestamp: new Date().toISOString()
    };
    
    let json = JSON.stringify(data, null, 2);
    let blob = new Blob([json], { type: 'application/json' });
    let url = URL.createObjectURL(blob);
    
    let a = document.createElement('a');
    a.href = url;
    a.download = `MEPT_Result_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}