/* ==========================================
   speech.js - FIXED for multiple questions
   MEPT Speaking Test
========================================== */

let recognition = null;
let finalTranscript = "";
let isListening = false;
let recognitionAttempts = 0;
let maxRecognitionAttempts = 3;

// ==========================================
// TEXT TO SPEECH - Question Read Twice
// ==========================================

function readQuestion() {
    let text = document.getElementById("questionText").innerText;
    if (!text) return;

    // ပထမအကြိမ် ဖတ်မယ်
    speakText(text);

    // ဒုတိယအကြိမ် ဖတ်ပြီး မိုက်ကိုစမယ်
    setTimeout(function() {
        speakText(text);
        setTimeout(function() {
            if (!document.getElementById("examScreen").classList.contains("hidden")) {
                startSpeechRecognition();
            }
        }, 1500);
    }, 3500);
}

// ==========================================
// SPEAK FUNCTION
// ==========================================

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        console.warn("Text To Speech is not supported");
        return;
    }

    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.rate = 0.85;
    speech.pitch = 1;
    speech.volume = 1;

    let voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        let preferred = ["Google UK English Male", "Google US English Male", "Microsoft David", "Samantha", "Alex"];
        let selected = null;
        
        for (let p of preferred) {
            let found = voices.find(v => v.name.includes(p));
            if (found) {
                selected = found;
                break;
            }
        }
        
        if (!selected) {
            selected = voices.find(v => v.name.toLowerCase().includes("male")) || voices[0];
        }
        
        if (selected) {
            speech.voice = selected;
        }
    }

    window.speechSynthesis.speak(speech);
}

// ==========================================
// START SPEECH RECOGNITION (FIXED)
// ==========================================

function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported. Please use Chrome or Edge.");
        return;
    }

    // မိုက်ခွင့်ပြုချက် ရှိမရှိ စစ်မယ်
    if (recognitionAttempts >= maxRecognitionAttempts) {
        console.warn("Max recognition attempts reached. Please click 'Listen Question' again.");
        document.getElementById("recordStatus").innerHTML = "⚠️ Please click 'Listen Question' again";
        return;
    }

    if (isListening) {
        stopSpeechRecognition();
        setTimeout(function() {
            startSpeechRecognition();
        }, 500);
        return;
    }

    // 🔥 အဓိက ပြင်ဆင်ချက်: recognition object အသစ်ဖန်တီးမယ်
    try {
        recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        // ဒီမေးခွန်းအတွက် transcript ကို ရှင်းမယ်
        finalTranscript = "";

        recognition.onstart = function() {
            isListening = true;
            recognitionAttempts = 0;
            console.log("🎤 Speech recognition started");
            document.getElementById("recordStatus").innerHTML = "🎤 Listening... Speak now!";
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

            // Final transcript ကို သိမ်းမယ်
            if (final) {
                finalTranscript += final;
            }

            // Textarea မှာ ပြမယ် (Interim + Final)
            let displayText = finalTranscript + interim;
            document.getElementById("transcript").value = displayText;
            
            // Auto scroll
            let textarea = document.getElementById("transcript");
            textarea.scrollTop = textarea.scrollHeight;

            // အခြေအနေပြမယ်
            if (interim) {
                document.getElementById("recordStatus").innerHTML = "🎤 Speaking... (processing)";
            } else if (final) {
                document.getElementById("recordStatus").innerHTML = "✅ Captured: " + final.trim().substring(0, 30) + "...";
            }
        };

        recognition.onerror = function(event) {
            console.log("Speech Error:", event.error);
            
            // Permission error
            if (event.error === "not-allowed") {
                document.getElementById("recordStatus").innerHTML = "❌ Please allow microphone access";
                document.getElementById("recordStatus").style.color = "#ef4444";
                alert("Please allow microphone access in your browser settings.");
                return;
            }
            
            // No speech detected
            if (event.error === "no-speech") {
                document.getElementById("recordStatus").innerHTML = "🔇 No speech detected. Say something!";
                document.getElementById("recordStatus").style.color = "#eab308";
                
                // ထပ်စမ်းမယ်
                setTimeout(function() {
                    if (!document.getElementById("examScreen").classList.contains("hidden") && !isListening) {
                        startSpeechRecognition();
                    }
                }, 1000);
                return;
            }
            
            // အခြား error များ
            if (event.error !== "aborted") {
                document.getElementById("recordStatus").innerHTML = "⚠️ Error: " + event.error;
                recognitionAttempts++;
                
                if (recognitionAttempts < maxRecognitionAttempts) {
                    setTimeout(function() {
                        if (!document.getElementById("examScreen").classList.contains("hidden")) {
                            startSpeechRecognition();
                        }
                    }, 2000);
                } else {
                    document.getElementById("recordStatus").innerHTML = "❌ Please click 'Listen Question' again";
                    document.getElementById("recordStatus").style.color = "#ef4444";
                }
            }
        };

        // 🔥 အဓိက ပြင်ဆင်ချက်: onend မှာ recognition ကို null လုပ်မယ်
        recognition.onend = function() {
            isListening = false;
            recognition = null;  // 🔥 အရေးကြီးဆုံး
            console.log("⏹ Speech recognition ended");
            
            // စာမေးပွဲထဲမှာဆိုရင် ပြန်စမယ်
            if (!document.getElementById("examScreen").classList.contains("hidden")) {
                // အချိန်ကျန်သေးရင် ပြန်စမယ်
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
                    } else {
                        document.getElementById("recordStatus").innerHTML = "⏱️ Time almost up!";
                    }
                }
            } else {
                document.getElementById("recordStatus").innerHTML = "⏹ Stopped";
                document.getElementById("recordStatus").style.color = "";
            }
        };

        recognition.start();

    } catch (e) {
        console.error("Error starting recognition:", e);
        document.getElementById("recordStatus").innerHTML = "❌ Error starting microphone";
        recognitionAttempts++;
        
        if (recognitionAttempts < maxRecognitionAttempts) {
            setTimeout(function() {
                if (!document.getElementById("examScreen").classList.contains("hidden")) {
                    startSpeechRecognition();
                }
            }, 2000);
        }
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
        recognition = null;
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
    document.getElementById("recordStatus").innerHTML = "Ready";
    document.getElementById("recordStatus").style.color = "";
}

// ==========================================
// STOP ALL SPEECH (Emergency)
// ==========================================

function stopAllSpeech() {
    window.speechSynthesis.cancel();
    stopSpeechRecognition();
}

// ==========================================
// PRELOAD VOICES
// ==========================================

if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}
