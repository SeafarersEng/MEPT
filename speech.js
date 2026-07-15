/* ==========================================
   speech.js - Mobile Optimized
   MEPT Speaking Test
========================================== */

let recognition;
let finalTranscript = "";
let isListening = false;
let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// ==========================================
// TEXT TO SPEECH - Mobile Ready
// ==========================================

function readQuestion() {
    let text = document.getElementById("questionText").innerText;
    if (!text) return;
    
    // Mobile: Voices ကိုကြိုပြင်ဆင်မယ်
    if (isMobile) {
        prepareVoicesForMobile(function() {
            speakText(text);
            setTimeout(function() {
                speakText(text);
            }, 4000);
        });
    } else {
        speakText(text);
        setTimeout(function() {
            speakText(text);
        }, 3500);
    }
}

// ==========================================
// PREPARE VOICES FOR MOBILE
// ==========================================

function prepareVoicesForMobile(callback) {
    if (window.speechSynthesis.getVoices().length > 0) {
        callback();
        return;
    }
    
    // Voices မရသေးရင် စောင့်မယ်
    let checkCount = 0;
    let maxChecks = 20;
    let interval = setInterval(function() {
        checkCount++;
        if (window.speechSynthesis.getVoices().length > 0 || checkCount >= maxChecks) {
            clearInterval(interval);
            callback();
        }
    }, 200);
}

// ==========================================
// SPEAK TEXT (Mobile Optimized)
// ==========================================

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        alert("Text To Speech is not supported");
        return;
    }

    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.rate = isMobile ? 0.8 : 0.9;  // Mobile အတွက် နည်းနည်းနှေး
    speech.pitch = 1;
    speech.volume = 1;

    // Mobile အတွက် အသံကို ကြိုရွေးမယ်
    let voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        let preferredVoice = null;
        
        // ဦးစားပေး အသံများ
        let preferredNames = [
            "Google UK English Male",
            "Google US English Male",
            "Microsoft David",
            "Samantha",
            "Alex"
        ];
        
        for (let name of preferredNames) {
            let found = voices.find(v => v.name.includes(name));
            if (found) {
                preferredVoice = found;
                break;
            }
        }
        
        // မတွေ့ရင် ယောက်ျားအသံကိုရှာ
        if (!preferredVoice) {
            preferredVoice = voices.find(v => 
                v.name.toLowerCase().includes("male") ||
                v.name.includes("David")
            );
        }
        
        if (preferredVoice) {
            speech.voice = preferredVoice;
        }
    }

    window.speechSynthesis.speak(speech);
}

// ==========================================
// SPEECH RECOGNITION - Mobile Optimized
// ==========================================

function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported. Please use Chrome.");
        return;
    }

    if (isListening) {
        stopSpeechRecognition();
        setTimeout(function() {
            startSpeechRecognition();
        }, 500);
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;  // 🔥 Mobile အတွက် continuous ကို false ထားတယ် (ပိုကောင်း)
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    
    // Mobile အတွက် timeout ကိုတိုးမယ်
    if (isMobile) {
        // ဒါကို တိုက်ရိုက်မသတ်မှတ်နိုင်ပေမယ့် onend မှာ ပြန်စမယ်
    }

    finalTranscript = "";

    recognition.onstart = function() {
        isListening = true;
        console.log("🎤 Speech recognition started (Mobile mode)");
        document.getElementById("recordStatus").innerHTML = "🎤 Listening...";
        document.getElementById("recordStatus").style.color = "#38bdf8";
    };

    recognition.onresult = function(event) {
        let interim = "";
        let final = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                final += transcript + " ";
            } else {
                interim += transcript;
            }
        }

        if (final) {
            finalTranscript += final;
        }

        // Show in textarea
        let displayText = finalTranscript + interim;
        document.getElementById("transcript").value = displayText;
        
        // Mobile: textarea ကို auto scroll
        let textarea = document.getElementById("transcript");
        textarea.scrollTop = textarea.scrollHeight;
        
        // သုံးစွဲသူ ပြောနေတယ်ဆိုတာ သိစေဖို့ status update
        if (interim) {
            document.getElementById("recordStatus").innerHTML = "🎤 Speaking... (interim)";
        } else if (final) {
            document.getElementById("recordStatus").innerHTML = "✅ Captured: " + final.trim();
        }
    };

    recognition.onerror = function(event) {
        console.log("Speech Error:", event.error);
        
        // Mobile: error ဖြစ်ရင် သုံးစွဲဲသူကို ပြန်စခိုင်းမယ်
        if (event.error === "not-allowed") {
            alert("Please allow microphone access in your browser settings.");
        } else if (event.error === "no-speech") {
            document.getElementById("recordStatus").innerHTML = "🔇 No speech detected. Please speak again.";
            // ပြန်စမယ်
            setTimeout(function() {
                if (!document.getElementById("examScreen").classList.contains("hidden")) {
                    startSpeechRecognition();
                }
            }, 1000);
        } else if (event.error !== "aborted") {
            // အခြား error အတွက် ပြန်စမယ်
            setTimeout(function() {
                if (!document.getElementById("examScreen").classList.contains("hidden")) {
                    startSpeechRecognition();
                }
            }, 2000);
        }
    };

    recognition.onend = function() {
        isListening = false;
        console.log("⏹ Speech recognition ended");
        document.getElementById("recordStatus").style.color = "";
        
        // Exam screen ထဲမှာဆိုရင် ပြန်စမယ် (Mobile အတွက် continuous ကို simulate လုပ်တယ်)
        if (!document.getElementById("examScreen").classList.contains("hidden")) {
            // Time ကျန်သေးရင် ပြန်စမယ်
            let timerDisplay = document.getElementById("timer");
            if (timerDisplay) {
                let timeParts = timerDisplay.innerText.split(":");
                let seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
                if (seconds > 5) {
                    setTimeout(function() {
                        if (!document.getElementById("examScreen").classList.contains("hidden")) {
                            startSpeechRecognition();
                        }
                    }, 500);
                }
            }
        }
    };

    try {
        recognition.start();
    } catch (e) {
        console.warn("Could not start recognition:", e);
        // တစ်ခါမရရင် ထပ်စမ်းမယ်
        setTimeout(function() {
            if (!document.getElementById("examScreen").classList.contains("hidden")) {
                startSpeechRecognition();
            }
        }, 1000);
    }
}

// ==========================================
// STOP SPEECH RECOGNITION
// ==========================================

function stopSpeechRecognition() {
    if (recognition) {
        try {
            recognition.stop();
        } catch (e) {
            console.log("Recognition already stopped");
        }
        isListening = false;
    }
    document.getElementById("recordStatus").innerHTML = "⏹ Stopped";
    document.getElementById("recordStatus").style.color = "";
}

// ==========================================
// GET FINAL TEXT
// ==========================================

function getTranscript() {
    return document.getElementById("transcript").value.trim();
}

// ==========================================
// CLEAR TEXT
// ==========================================

function clearTranscript() {
    finalTranscript = "";
    document.getElementById("transcript").value = "";
}

// ==========================================
// STOP ALL SPEECH (Emergency)
// ==========================================

function stopAllSpeech() {
    window.speechSynthesis.cancel();
    stopSpeechRecognition();
}

// ==========================================
// PRELOAD VOICES (Mobile Ready)
// ==========================================

// Page Load ဖြစ်တာနဲ့ Voices ကို ကြိုယူမယ်
if (window.speechSynthesis) {
    // အရင်ဆုံး ချက်ချင်းယူမယ်
    window.speechSynthesis.getVoices();
    
    // Voices ပြောင်းလဲရင် ထပ်ယူမယ်
    window.speechSynthesis.onvoiceschanged = function() {
        let voices = window.speechSynthesis.getVoices();
        console.log("✅ Available voices:", voices.length);
        if (isMobile) {
            voices.forEach(function(v) {
                console.log("  -", v.name, "(", v.lang, ")");
            });
        }
    };
    
    // Mobile: နောက်ထပ် ၁ စက္ကန့်အကြာမှာ ထပ်ယူမယ်
    if (isMobile) {
        setTimeout(function() {
            window.speechSynthesis.getVoices();
        }, 1000);
    }
}
