// script.js
var UA = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 (') + 19, navigator.userAgent.indexOf(') Apple')).replace("layStation 4/", "");
if (UA == "9.00") {
  document.getElementById("PS4fw").innerHTML = "v" + UA + " Detected";
} else {
  document.getElementById("PS4fw").innerHTML = "Spoofed To v" + UA;
}

// Function to go back to the main menu
function loadMainMenu() {
  window.location.href = 'index.html';
}

// Function to toggle manual exploit menu
function goToManualHostExploit() {
  document.getElementById("Manual_J").style.display = "block";
  document.getElementById("Auto_J").style.display = "none";
}

// Function to toggle auto exploit menu
function goToAutoHostExploit() {
  document.getElementById("Auto_J").style.display = "block";
  document.getElementById("Manual_J").style.display = "none";
}
