/* ==========================================
   speech.js - PRODUCTION READY (Part 1)
   Variables + Permission + Text To Speech
   MEPT Speaking Test - Mobile Optimized
========================================== */

// ==========================================
// 1. GLOBAL VARIABLES
// ==========================================

let recognition = null;
let finalTranscript = "";
let isListening = false;
let recognitionAttempts = 0;
let maxRecognitionAttempts = 3;
let isMicPermissionGranted = false;
let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let isChrome = /Chrome/i.test(navigator.userAgent) && !/Edge/i.test(navigator.userAgent);

// ==========================================
// 2. DOM REFS (Cache for performance)
// ==========================================

const dom = {
    recordStatus: document.getElementById("recordStatus"),
    transcript: document.getElementById("transcript"),
    questionText: document.getElementById("questionText"),
    timer: document.getElementById("timer"),
    examScreen: document.getElementById("examScreen")
};

// ==========================================
// 3. MICROPHONE PERMISSION CHECK
// ==========================================

function checkMicrophonePermission() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        updateStatus("❌ Browser doesn't support microphone", "#ef4444");
        return false;
    }

    // Permission API (Chrome/Edge only)
    if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'microphone' })
            .then(function(result) {
                if (result.state === 'granted') {
                    isMicPermissionGranted = true;
                    updateStatus("✅ Microphone ready", "#22c55e");
                    return true;
                } else if (result.state === 'prompt') {
                    updateStatus("⏳ Click 'Listen Question' to allow microphone", "#eab308");
                    return false;
                } else {
                    updateStatus("❌ Microphone blocked. Check browser settings.", "#ef4444");
                    return false;
                }
            })
            .catch(function() {
                // Permission API not supported - will request directly
                return false;
            });
    }
    return false;
}

// ==========================================
// 4. REQUEST MICROPHONE PERMISSION
// ==========================================

function requestMicrophonePermission() {
    return new Promise(function(resolve, reject) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            reject("Browser doesn't support microphone");
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(function(stream) {
                // Stop tracks immediately after getting permission
                stream.getTracks().forEach(function(track) { track.stop(); });
                isMicPermissionGranted = true;
                updateStatus("✅ Microphone ready", "#22c55e");
                resolve(true);
            })
            .catch(function(err) {
                console.error("Microphone permission denied:", err);
                isMicPermissionGranted = false;
                
                // Show user-friendly message based on error
                if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                    updateStatus("❌ Please allow microphone in browser settings", "#ef4444");
                } else if (err.name === 'NotFoundError') {
                    updateStatus("❌ No microphone found. Please connect one.", "#ef4444");
                } else {
                    updateStatus("❌ Microphone error: " + err.message, "#ef4444");
                }
                reject(err);
            });
    });
}

// ==========================================
// 5. STATUS UPDATE HELPER
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
// 6. TEXT TO SPEECH (TTS)
// ==========================================

function readQuestion() {
    if (!dom.questionText) return;
    let text = dom.questionText.innerText;
    if (!text) return;

    // Request microphone permission first
    requestMicrophonePermission()
        .then(function() {
            // Speak first time
            speakText(text);
            // Speak second time after 3.5 seconds
            setTimeout(function() {
                speakText(text);
                // Start speech recognition after second read
                setTimeout(function() {
                    if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                        startSpeechRecognition();
                    }
                }, 1500);
            }, 3500);
        })
        .catch(function() {
            alert("Please allow microphone access in your browser settings, then click 'Listen Question' again.");
            updateStatus("❌ Please allow microphone and try again", "#ef4444");
        });
}

function speakText(text) {
    if (!("speechSynthesis" in window)) {
        console.warn("Text To Speech is not supported");
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = "en-US";
    speech.rate = isMobile ? 0.8 : 0.85;
    speech.pitch = 1;
    speech.volume = 1;

    // Select best voice
    var voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        var preferred = ["Google UK English Male", "Google US English Male", "Microsoft David", "Samantha", "Alex"];
        var selected = null;
        
        for (var i = 0; i < preferred.length; i++) {
            var found = voices.find(function(v) { return v.name.includes(preferred[i]); });
            if (found) {
                selected = found;
                break;
            }
        }
        
        if (!selected) {
            selected = voices.find(function(v) { return v.name.toLowerCase().includes("male"); }) || voices[0];
        }
        
        if (selected) {
            speech.voice = selected;
        }
    }

    window.speechSynthesis.speak(speech);
}

// ==========================================
// 7. PRELOAD VOICES (Mobile Ready)
// ==========================================

if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
    
    // Mobile: Try again after 1 second
    if (isMobile) {
        setTimeout(function() {
            window.speechSynthesis.getVoices();
        }, 1000);
    }
}

// Check permission on page load
setTimeout(function() {
    checkMicrophonePermission();
}, 500);
/* ==========================================
   speech.js - PRODUCTION READY (Part 2)
   Speech Recognition Engine
   MEPT Speaking Test - Mobile Optimized
========================================== */

// ==========================================
// 8. START SPEECH RECOGNITION
// ==========================================

function startSpeechRecognition() {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported. Please use Chrome or Edge.");
        return;
    }

    // Don't start if max attempts reached
    if (recognitionAttempts >= maxRecognitionAttempts) {
        updateStatus("⚠️ Please click 'Listen Question' again", "#eab308");
        return;
    }

    // Stop if already listening
    if (isListening) {
        stopSpeechRecognition();
        setTimeout(function() {
            startSpeechRecognition();
        }, 500);
        return;
    }

    try {
        // Create new recognition instance
        recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        // Reset transcript for this question
        finalTranscript = "";

        // ===== ON START =====
        recognition.onstart = function() {
            isListening = true;
            recognitionAttempts = 0;
            console.log("🎤 Speech recognition started");
            updateStatus("🎤 Listening... Speak now!", "#38bdf8");
        };

        // ===== ON RESULT =====
        recognition.onresult = function(event) {
            var interim = "";
            var final = "";

            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
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

            // Update textarea
            var displayText = finalTranscript + interim;
            if (dom.transcript) {
                dom.transcript.value = displayText;
                dom.transcript.scrollTop = dom.transcript.scrollHeight;
            }

            // Update status
            if (interim) {
                updateStatus("🎤 Speaking... (processing)", "#38bdf8");
            } else if (final) {
                var preview = final.trim().substring(0, 30);
                updateStatus("✅ Captured: " + preview + "...", "#22c55e");
            }
        };

        // ===== ON ERROR =====
        recognition.onerror = function(event) {
            console.log("Speech Error:", event.error);
            
            // Handle different errors
            if (event.error === "not-allowed") {
                updateStatus("❌ Please allow microphone access", "#ef4444");
                alert("Please allow microphone access in your browser settings, then click 'Listen Question' again.");
                return;
            }
            
            if (event.error === "no-speech") {
                updateStatus("🔇 No speech detected. Say something!", "#eab308");
                // Retry after 1 second
                setTimeout(function() {
                    if (dom.examScreen && !dom.examScreen.classList.contains("hidden") && !isListening) {
                        startSpeechRecognition();
                    }
                }, 1000);
                return;
            }
            
            if (event.error === "audio-capture") {
                updateStatus("❌ No microphone found. Please connect one.", "#ef4444");
                return;
            }
            
            if (event.error === "network") {
                updateStatus("⚠️ Network error. Please check connection.", "#eab308");
                return;
            }
            
            // Other errors - retry
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

        // ===== ON END =====
        recognition.onend = function() {
            isListening = false;
            recognition = null;
            console.log("⏹ Speech recognition ended");
            
            // Auto-restart if still in exam and time remaining
            if (dom.examScreen && !dom.examScreen.classList.contains("hidden")) {
                var timerDisplay = dom.timer;
                if (timerDisplay) {
                    var timeParts = timerDisplay.innerText.split(":");
                    var seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
                    
                    // Restart if more than 5 seconds remaining
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

        // ===== START =====
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

// ==========================================
// 9. STOP SPEECH RECOGNITION
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
    updateStatus("⏹ Stopped", "#94a3b8");
}
/* ==========================================
   speech.js - PRODUCTION READY (Part 3)
   Recording Control + Transcript + Utilities
   MEPT Speaking Test - Mobile Optimized
========================================== */

// ==========================================
// 10. GET FINAL TRANSCRIPT
// ==========================================

function getTranscript() {
    if (dom.transcript) {
        return dom.transcript.value.trim();
    }
    return "";
}

// ==========================================
// 11. CLEAR TRANSCRIPT
// ==========================================

function clearTranscript() {
    finalTranscript = "";
    if (dom.transcript) {
        dom.transcript.value = "";
    }
    updateStatus("Ready", "#94a3b8");
}

// ==========================================
// 12. STOP ALL SPEECH (Emergency)
// ==========================================

function stopAllSpeech() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    stopSpeechRecognition();
}

// ==========================================
// 13. RETRY MICROPHONE PERMISSION
// ==========================================

function retryMicrophonePermission() {
    updateStatus("⏳ Requesting microphone...", "#eab308");
    requestMicrophonePermission()
        .then(function() {
            updateStatus("✅ Microphone ready", "#22c55e");
        })
        .catch(function() {
            // Error already handled in request function
        });
}

// ==========================================
// 14. IS RECOGNITION ACTIVE
// ==========================================

function isRecognitionActive() {
    return isListening;
}

// ==========================================
// 15. RESET RECOGNITION STATE (for new question)
// ==========================================

function resetRecognitionState() {
    stopSpeechRecognition();
    recognitionAttempts = 0;
    finalTranscript = "";
    if (dom.transcript) {
        dom.transcript.value = "";
    }
    updateStatus("Ready", "#94a3b8");
}

// ==========================================
// 16. EXPOSE GLOBALS (for other scripts)
// ==========================================

// Make functions globally accessible
window.readQuestion = readQuestion;
window.speakText = speakText;
window.startSpeechRecognition = startSpeechRecognition;
window.stopSpeechRecognition = stopSpeechRecognition;
window.getTranscript = getTranscript;
window.clearTranscript = clearTranscript;
window.stopAllSpeech = stopAllSpeech;
window.retryMicrophonePermission = retryMicrophonePermission;
window.isRecognitionActive = isRecognitionActive;
window.resetRecognitionState = resetRecognitionState;
window.checkMicrophonePermission = checkMicrophonePermission;

console.log("✅ speech.js loaded (Production Ready)");
console.log("📱 Mobile mode:", isMobile);
console.log("🌐 Chrome:", isChrome);
