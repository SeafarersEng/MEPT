/* ==========================================
   speech.js - Frontend Only (GitHub Pages)
   Web Speech API for Voice to Text
========================================== */

let recognition = null;
let finalTranscript = "";
let isListening = false;
let recognitionAttempts = 0;
let maxRecognitionAttempts = 3;

// ==========================================
// DOM REFS
// ==========================================

const dom = {
    recordStatus: document.getElementById("recordStatus"),
    transcript: document.getElementById("transcript"),
    questionText: document.getElementById("questionText"),
    timer: document.getElementById("timer"),
    examScreen: document.getElementById("examScreen")
};

// ==========================================
// STATUS UPDATE
// ==========================================

function updateStatus(message, color) {
    if (dom.recordStatus) {
        dom.recordStatus.innerHTML = message;
        if (color) {
            dom.recordStatus.style.color = color;
        }
    }
}

// ==========================================
// TEXT TO SPEECH
// ==========================================

function readQuestion() {
    let text = dom.questionText ? dom.questionText.innerText : "";
    if (!text) return;

    speakText(text);
    setTimeout(function() {
        speakText(text);
        // Start listening after second read
        setTimeout(function() {
            if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                startSpeechRecognition();
            }
        }, 1500);
    }, 3500);
}

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        alert("Text To Speech is not supported");
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
// START SPEECH RECOGNITION (Web Speech API)
// ==========================================

function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported. Please use Chrome.");
        return;
    }

    if (recognitionAttempts >= maxRecognitionAttempts) {
        updateStatus("⚠️ Please click 'Listen Question' again", "#eab308");
        return;
    }

    if (isListening) {
        stopSpeechRecognition();
        setTimeout(function() {
            startSpeechRecognition();
        }, 500);
        return;
    }

    try {
        recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        finalTranscript = "";

        recognition.onstart = function() {
            isListening = true;
            recognitionAttempts = 0;
            console.log("🎤 Speech recognition started");
            updateStatus("🎤 Listening... Speak now!", "#38bdf8");
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

            let displayText = finalTranscript + interim;
            if (dom.transcript) {
                dom.transcript.value = displayText;
                dom.transcript.scrollTop = dom.transcript.scrollHeight;
            }

            if (interim) {
                updateStatus("🎤 Speaking... (processing)", "#38bdf8");
            } else if (final) {
                let preview = final.trim().substring(0, 30);
                updateStatus("✅ Captured: " + preview + "...", "#22c55e");
            }
        };

        recognition.onerror = function(event) {
            console.log("Speech Error:", event.error);
            
            if (event.error === "not-allowed") {
                updateStatus("❌ Please allow microphone access", "#ef4444");
                alert("Please allow microphone access in your browser settings.");
                return;
            }
            
            if (event.error === "no-speech") {
                updateStatus("🔇 No speech detected. Say something!", "#eab308");
                setTimeout(function() {
                    if (dom.examScreen && !dom.examScreen.classList.contains("hidden") && !isListening) {
                        startSpeechRecognition();
                    }
                }, 1000);
                return;
            }
            
            if (event.error !== "aborted") {
                updateStatus("⚠️ Error: " + event.error, "#eab308");
                recognitionAttempts++;
                
                if (recognitionAttempts < maxRecognitionAttempts) {
                    setTimeout(function() {
                        if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                            startSpeechRecognition();
                        }
                    }, 2000);
                } else {
                    updateStatus("❌ Please click 'Listen Question' again", "#ef4444");
                }
            }
        };

        recognition.onend = function() {
            isListening = false;
            recognition = null;
            console.log("⏹ Speech recognition ended");
            
            if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                let timerDisplay = dom.timer;
                if (timerDisplay) {
                    let timeParts = timerDisplay.innerText.split(":");
                    let seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
                    
                    if (seconds > 5) {
                        setTimeout(function() {
                            if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                                startSpeechRecognition();
                            }
                        }, 500);
                    } else {
                        updateStatus("⏱️ Time almost up!", "#eab308");
                    }
                }
            } else {
                updateStatus("⏹ Stopped", "#94a3b8");
            }
        };

        recognition.start();

    } catch (e) {
        console.error("Error starting recognition:", e);
        updateStatus("❌ Error starting microphone", "#ef4444");
        recognitionAttempts++;
        
        if (recognitionAttempts < maxRecognitionAttempts) {
            setTimeout(function() {
                if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                    startSpeechRecognition();
                }
            }, 2000);
        }
    }
}

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
    updateStatus("⏹ Stopped", "#94a3b8");
}

function getTranscript() {
    return dom.transcript ? dom.transcript.value.trim() : "";
}

function clearTranscript() {
    finalTranscript = "";
    if (dom.transcript) {
        dom.transcript.value = "";
    }
    updateStatus("Ready", "#94a3b8");
}

function stopAllSpeech() {
    window.speechSynthesis.cancel();
    stopSpeechRecognition();
}

// Preload voices
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}

// Expose globals
window.readQuestion = readQuestion;
window.speakText = speakText;
window.startSpeechRecognition = startSpeechRecognition;
window.stopSpeechRecognition = stopSpeechRecognition;
window.getTranscript = getTranscript;
window.clearTranscript = clearTranscript;
window.stopAllSpeech = stopAllSpeech;

console.log("✅ speech.js loaded (Frontend Only - GitHub Pages compatible)");
