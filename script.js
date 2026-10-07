/* =========================
   MATRIX BACKGROUND
========================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&<>/\\[]{}";

let fontSize = 12;
let columns = Math.floor(window.innerWidth / fontSize);
let drops = Array(columns).fill(1);

function drawMatrix() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9d";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const char =
            characters[
                Math.floor(Math.random() * characters.length)
            ];

        ctx.fillText(
            char,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 45);


/* =========================
   TERMINAL
========================= */

const terminal = document.getElementById("terminalText");

const terminalLines = [

    "[21:42:17] Initializing security protocol...",
    "[21:42:18] Connecting to target...",
    "[21:42:19] Connection established.",
    "[21:42:20] Bypassing firewall...",
    "[21:42:21] Scanning system...",
    "[21:42:22] Searching vulnerabilities...",
    "[21:42:24] Vulnerability detected.",
    "[21:42:25] Exploiting connection...",
    "[21:42:27] Access granted.",
    "[21:42:29] Accessing system...",
    "[21:42:31] Retrieving information...",
    "[21:42:34] Encrypting connection...",
    "[21:42:37] Downloading data...",
    "[21:42:40] Monitoring activity...",
    "[21:42:43] Operation in progress..."

];

let lineIndex = 0;

function addTerminalLine() {

    if (lineIndex >= terminalLines.length) {
        lineIndex = 0;
        terminal.innerHTML = "";
    }

    const line = document.createElement("div");

    line.textContent = terminalLines[lineIndex];

    terminal.appendChild(line);

    terminal.scrollTop = terminal.scrollHeight;

    lineIndex++;
}

setInterval(addTerminalLine, 900);


/* =========================
   FAKE DOWNLOAD PROGRESS
========================= */

const progress = document.getElementById("progress");
const percentage = document.getElementById("percentage");

let value = 0;

function updateProgress() {

    value += Math.random() * 2;

    if (value >= 100) {
        value = 0;
    }

    const rounded = Math.floor(value);

    progress.style.width = rounded + "%";
    percentage.textContent = rounded + "%";
}

setInterval(updateProgress, 250);


/* =========================
   RANDOM GLITCH
========================= */

const alertBox = document.querySelector(".alert-box");

setInterval(() => {

    if (Math.random() > 0.7) {

        alertBox.style.transform =
            `translateX(${Math.random() * 4 - 2}px)`;

        setTimeout(() => {
            alertBox.style.transform = "translateX(0)";
        }, 80);
    }

}, 1500);