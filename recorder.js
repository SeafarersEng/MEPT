/* ==========================================
   recorder.js
   MEPT Speaking Test
   Voice Recording Module
========================================== */

let mediaRecorder;
let audioChunks = [];
let audioBlob = null;
let audioURL = null;
let audioStream = null;

// ==========================================
// START RECORDING
// ==========================================

async function startRecording() {
    try {
        // Request Microphone
        audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        mediaRecorder = new MediaRecorder(audioStream, {
            mimeType: 'audio/webm;codecs=opus'
        });

        audioChunks = [];

        mediaRecorder.start();

        document.getElementById("recordStatus").innerHTML = "🔴 Recording...";
        document.getElementById("startRecordBtn").disabled = true;
        document.getElementById("stopRecordBtn").disabled = false;

        mediaRecorder.ondataavailable = function(event) {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = function() {
            audioBlob = new Blob(audioChunks, {
                type: "audio/webm"
            });

            audioURL = URL.createObjectURL(audioBlob);

            let player = document.getElementById("audioPlayer");
            player.src = audioURL;
            player.classList.remove("hidden");

            document.getElementById("recordStatus").innerHTML = "✅ Recording Complete";

            // Stop microphone
            audioStream.getTracks().forEach(track => track.stop());
        };

    } catch (error) {
        alert("Microphone permission is required!");
        console.log(error);
    }
}

// ==========================================
// STOP RECORDING
// ==========================================

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        document.getElementById("startRecordBtn").disabled = false;
        document.getElementById("stopRecordBtn").disabled = true;
    }
}

// ==========================================
// DELETE RECORDING
// ==========================================

function deleteRecording() {
    audioChunks = [];
    audioBlob = null;

    if (audioURL) {
        URL.revokeObjectURL(audioURL);
        audioURL = null;
    }

    let player = document.getElementById("audioPlayer");
    player.src = "";
    player.classList.add("hidden");

    document.getElementById("recordStatus").innerHTML = "🗑 Recording Deleted";
}

// ==========================================
// RECORD AGAIN
// ==========================================

function recordAgain() {
    deleteRecording();
    startRecording();
}

// ==========================================
// GET AUDIO DATA
// Used before submitting answer
// ==========================================

function getRecordedAudio() {
    return audioBlob;
}

// ==========================================
// IS RECORDING
// ==========================================

function isCurrentlyRecording() {
    return mediaRecorder && mediaRecorder.state === "recording";
}

// ==========================================
// CLEAR ALL AUDIO
// Exam Finished
// ==========================================

function clearAllRecording() {
    deleteRecording();
    audioChunks = [];
    mediaRecorder = null;
}