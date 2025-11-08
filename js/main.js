// Main game logic

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let scoreElem = document.getElementById("score");
let timerElem = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let messageElem = document.getElementById("message");

let player, coin;
let keys = {};
let score = 0;
let time = 60; // seconds
let gameActive = false;
let timerInterval;

function startGame() {
    score = 0;
    time = 60;
    player = new Player(100, 200, 40, "#00ff88");
    coin = new Coin(24, "#ffd700");
    keys = {};
    gameActive = true;
    messageElem.textContent = "";
    startBtn.style.display = "none";
    scoreElem.textContent = "Score: " + score;
    timerElem.textContent = "Time: " + time + "s";
    timerInterval = setInterval(() => {
        time--;
        timerElem.textContent = "Time: " + time + "s";
        if (time <= 0) {
            endGame();
        }
    }, 1000);
    window.requestAnimationFrame(gameLoop);
}

function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    startBtn.style.display = "block";
    messageElem.textContent = "Game Over! Final Score: " + score;
}

function gameLoop() {
    if (!gameActive) return;
    // Update
    player.move(keys);

    // Check collision with coin
    if (rectsOverlap(player.getRect(), coin.getRect())) {
        score++;
        scoreElem.textContent = "Score: " + score;
        coin.spawn();
    }

    // Render
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    coin.draw(ctx);

    window.requestAnimationFrame(gameLoop);
}

// Keyboard controls
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

startBtn.addEventListener("click", startGame);

// Show initial message
messageElem.textContent = "Use arrow keys or WASD to collect as many coins as you can in 60 seconds.";
