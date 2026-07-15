/* ==========================================
   speech.js
   MEPT Speaking Test
   Text To Speech + Speech Recognition
========================================== */

let recognition;
let finalTranscript = "";
let isListening = false;

// ==========================================
// TEXT TO SPEECH - Question Read Twice
// ==========================================

function readQuestion() {
    let text = document.getElementById("questionText").innerText;

    if (!text) {
        return;
    }

    // Read first time
    speakText(text);

    // Read second time after 3.5 seconds
    setTimeout(function() {
        speakText(text);
    }, 3500);
}

// ==========================================
// SPEAK FUNCTION
// ==========================================

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        alert("Text To Speech is not supported");
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    // Try to get male voice
    let voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        let maleVoice = voices.find(v => 
            v.name.toLowerCase().includes("male") || 
            v.name.includes("David") ||
            v.name.includes("Alex")
        );
        if (maleVoice) {
            speech.voice = maleVoice;
        }
    }

    window.speechSynthesis.speak(speech);
}

// ==========================================
// START SPEECH RECOGNITION
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
        }, 300);
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    // Reset final transcript
    finalTranscript = "";

    recognition.onstart = function() {
        isListening = true;
        console.log("Speech recognition started");
        document.getElementById("recordStatus").innerHTML = "🎤 Listening...";
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

        // Update final transcript
        if (final) {
            finalTranscript += final;
        }

        // Show in textarea (interim + final)
        document.getElementById("transcript").value = finalTranscript + interim;

        // Auto scroll to bottom
        let textarea = document.getElementById("transcript");
        textarea.scrollTop = textarea.scrollHeight;
    };

    recognition.onerror = function(event) {
        console.log("Speech Error:", event.error);
        
        // If error is not "no-speech", try to restart
        if (event.error !== "no-speech" && event.error !== "aborted") {
            setTimeout(function() {
                if (!document.getElementById("examScreen").classList.contains("hidden")) {
                    startSpeechRecognition();
                }
            }, 1000);
        }
    };

    recognition.onend = function() {
        isListening = false;
        console.log("Speech recognition ended");
        
        // Restart if still in exam and not finished
        if (!document.getElementById("examScreen").classList.contains("hidden")) {
            // Check if we should restart (if not stopped manually)
            if (document.getElementById("startRecordBtn").disabled === true) {
                // Auto restart after short delay
                setTimeout(function() {
                    if (!document.getElementById("examScreen").classList.contains("hidden")) {
                        startSpeechRecognition();
                    }
                }, 500);
            }
        }
    };

    recognition.start();
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
    document.getElementById("recordStatus").innerHTML = "⏹ Listening stopped";
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
// PRELOAD VOICES
// ==========================================

// Preload voices when page loads
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}