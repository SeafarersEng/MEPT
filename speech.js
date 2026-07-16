/* ==========================================
   speech.js - FIXED for all devices
   MEPT Speaking Test
========================================== */

let recognition = null;
let finalTranscript = "";
let isListening = false;
let recognitionAttempts = 0;
let maxRecognitionAttempts = 3;
let isMicPermissionGranted = false;
let micCheckInterval = null;

// ==========================================
// CHECK MICROPHONE PERMISSION (NEW)
// ==========================================

function checkMicrophonePermission() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        document.getElementById("recordStatus").innerHTML = "❌ Your browser doesn't support microphone.";
        document.getElementById("recordStatus").style.color = "#ef4444";
        return false;
    }

    // Permission status ကိုစစ်မယ်
    if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'microphone' })
            .then(function(result) {
                if (result.state === 'granted') {
                    isMicPermissionGranted = true;
                    document.getElementById("recordStatus").innerHTML = "✅ Microphone ready";
                    document.getElementById("recordStatus").style.color = "#22c55e";
                    return true;
                } else if (result.state === 'prompt') {
                    // ခွင့်ပြုချက်တောင်းဖို့ ပြင်ဆင်မယ်
                    document.getElementById("recordStatus").innerHTML = "⏳ Click 'Listen Question' to allow microphone";
                    document.getElementById("recordStatus").style.color = "#eab308";
                    return false;
                } else {
                    document.getElementById("recordStatus").innerHTML = "❌ Microphone blocked. Please check browser settings.";
                    document.getElementById("recordStatus").style.color = "#ef4444";
                    return false;
                }
            })
            .catch(function(e) {
                console.log("Permission query not supported, will request directly.");
                return false;
            });
    }
    return false;
}

// ==========================================
// REQUEST MICROPHONE PERMISSION (NEW)
// ==========================================

function requestMicrophonePermission() {
    return new Promise(function(resolve, reject) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            reject("Browser doesn't support microphone");
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(function(stream) {
                // မိုက်ကိုသုံးပြီးတာနဲ့ ချက်ချင်းပိတ်မယ် (Permission ရဖို့ပဲလိုတာ)
                stream.getTracks().forEach(track => track.stop());
                isMicPermissionGranted = true;
                document.getElementById("recordStatus").innerHTML = "✅ Microphone ready";
                document.getElementById("recordStatus").style.color = "#22c55e";
                resolve(true);
            })
            .catch(function(err) {
                console.error("Microphone permission denied:", err);
                isMicPermissionGranted = false;
                document.getElementById("recordStatus").innerHTML = "❌ Please allow microphone access";
                document.getElementById("recordStatus").style.color = "#ef4444";
                reject(err);
            });
    });
}

// ==========================================
// TEXT TO SPEECH
// ==========================================

function readQuestion() {
    let text = document.getElementById("questionText").innerText;
    if (!text) return;

    // မိုက်ခွင့်ပြုချက်ကို အရင်စစ်မယ်
    requestMicrophonePermission()
        .then(function() {
            // မိုက်ခွင့်ပြုပြီးရင် အသံဖတ်မယ်
            speakText(text);
            setTimeout(function() {
                speakText(text);
                setTimeout(function() {
                    if (!document.getElementById("examScreen").classList.contains("hidden")) {
                        startSpeechRecognition();
                    }
                }, 1500);
            }, 3500);
        })
        .catch(function(err) {
            // မိုက်ခွင့်မပြုရင် သုံးစွဲဲသူကို အကြောင်းကြားမယ်
            alert("Please allow microphone access in your browser settings, then click 'Listen Question' again.");
            document.getElementById("recordStatus").innerHTML = "❌ Please allow microphone and try again";
            document.getElementById("recordStatus").style.color = "#ef4444";
        });
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
// START SPEECH RECOGNITION (IMPROVED)
// ==========================================

function startSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Speech Recognition is not supported. Please use Chrome or Edge.");
        return;
    }

    if (recognitionAttempts >= maxRecognitionAttempts) {
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

            if (final) {
                finalTranscript += final;
            }

            let displayText = finalTranscript + interim;
            document.getElementById("transcript").value = displayText;
            
            let textarea = document.getElementById("transcript");
            textarea.scrollTop = textarea.scrollHeight;

            if (interim) {
                document.getElementById("recordStatus").innerHTML = "🎤 Speaking... (processing)";
            } else if (final) {
                document.getElementById("recordStatus").innerHTML = "✅ Captured: " + final.trim().substring(0, 30) + "...";
            }
        };

        recognition.onerror = function(event) {
            console.log("Speech Error:", event.error);
            
            if (event.error === "not-allowed") {
                document.getElementById("recordStatus").innerHTML = "❌ Please allow microphone access";
                document.getElementById("recordStatus").style.color = "#ef4444";
                alert("Please allow microphone access in your browser settings, then click 'Listen Question' again.");
                return;
            }
            
            if (event.error === "no-speech") {
                document.getElementById("recordStatus").innerHTML = "🔇 No speech detected. Say something!";
                document.getElementById("recordStatus").style.color = "#eab308";
                
                setTimeout(function() {
                    if (!document.getElementById("examScreen").classList.contains("hidden") && !isListening) {
                        startSpeechRecognition();
                    }
                }, 1000);
                return;
            }
            
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

        recognition.onend = function() {
            isListening = false;
            recognition = null;
            console.log("⏹ Speech recognition ended");
            
            if (!document.getElementById("examScreen").classList.contains("hidden")) {
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
// PRELOAD VOICES & CHECK PERMISSION
// ==========================================

if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}

// စာမျက်နှာပေါ်ရောက်တာနဲ့ မိုက်ခွင့်ပြုချက် အခြေအနေကို စစ်ဆေးမယ်
setTimeout(function() {
    checkMicrophonePermission();
}, 1000);
