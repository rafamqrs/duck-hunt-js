const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

let score = 0;

// Duck image
const duckImg = new Image();
duckImg.src = 'duck.png'; // Replace with your duck image URL

// Duck properties
let duckX = 100;
let duckY = 100;
let duckSpeedX = 5;
let duckSpeedY = 5;
const duckSize = 100;

// Confetti particles
const confetti = [];
const confettiCount = 100;
const confettiColors = ['red', 'green', 'blue', 'yellow'];

// Quack sound
const quackSound = new Audio('quack.mp3'); // Replace with your quack sound URL

// Update game state
function update() {
  // Move the duck
  duckX += duckSpeedX;
  duckY += duckSpeedY;

  // Bounce off the edges
  if (duckX + duckSize > canvas.width || duckX < 0) {
    duckSpeedX = -duckSpeedX;
  }
  if (duckY + duckSize > canvas.height || duckY < 0) {
    duckSpeedY = -duckSpeedY;
  }

  // Draw everything
  draw();

  // Request the next frame
  requestAnimationFrame(update);
}

// Draw game elements
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sky
  ctx.fillStyle = '#a0c0e0'; // Light blue color for the sky
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Fill the top half with sky color

    // Draw clouds
    ctx.fillStyle = '#ffffff'; // White color for clouds
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, Math.PI * 2); // First cloud
    ctx.arc(130, 100, 30, 0, Math.PI * 2);
    ctx.arc(160, 100, 20, 0, Math.PI * 2);
    ctx.fill();
  
    ctx.beginPath();
    ctx.arc(600, 50, 25, 0, Math.PI * 2); // Second cloud
    ctx.arc(630, 50, 35, 0, Math.PI * 2);
    ctx.arc(660, 50, 25, 0, Math.PI * 2);
    ctx.fill();

  // Draw the grass
  ctx.fillStyle = '#008000'; // Green color for the grass
  ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Fill the bottom half with grass color


  // Draw the duck
  if (duckY < canvas.height / 2) {
    ctx.drawImage(duckImg, duckX, duckY, duckSize, duckSize);
  }
  // Draw confetti
  for (let i = 0; i < confetti.length; i++) {
    ctx.beginPath();
    ctx.arc(confetti[i].x, confetti[i].y, confetti[i].radius, 0, Math.PI * 2);
    ctx.fillStyle = confetti[i].color;
    ctx.fill();
  }
}

// Handle mouse click
canvas.addEventListener('click', (event) => {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;

  // Check if the duck is hit
  if (
    mouseX > duckX &&
    mouseX < duckX + duckSize &&
    mouseY > duckY &&
    mouseY < duckY + duckSize &&
    duckY < canvas.height / 2 // Check if duck is above the grass
  ) {
    // Increase score
    score++;
    scoreElement.textContent = 'Score: ' + score;

    // Play quack sound
    quackSound.play();

    // Create confetti explosion
    createConfetti(duckX + duckSize / 2, duckY + duckSize / 2);
  }
});

// Create confetti particles
function createConfetti(x, y) {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: x,
      y: y,
      radius: Math.random() * 5 + 2,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      xVelocity: Math.random() * 10 - 5,
      yVelocity: Math.random() * 10 - 5,
      gravity: 0.1,
    });
  }
}

// Start the game loop
update();