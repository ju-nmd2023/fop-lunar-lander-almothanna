let state = "start";
let groundY = 550;
let lander;
let gravity = 0.1;  // Constant gravity force – Inspired by The Coding Train: https://www.youtube.com/watch?v=6vHkI4fZJ6Q
let resultText = "";

function setup() {
  createCanvas(600, 600);   // Creates canvas – p5.js: https://p5js.org/reference/#/p5/createCanvas
  lander = new Lander();
}

function draw() {
  background(0);

  if (state === "start") {
    fill(255);
    textAlign(CENTER, CENTER);  // W3Schools: https://www.w3schools.com/graphics/canvas_text.asp
    textSize(32);
    text("Welcome to Lunar Lander! :)", width / 2, height / 2 - 40);
    textSize(18);
    text("Click any key to start playing!", width / 2, height / 2);
  } else if (state === "play") {
    drawMoon();             // Draws the moon surface and craters
    lander.update();           // Updates landers physics
    lander.display();      // Draws the lander
    checkLanding();          // Checks winor lose conditions
  } else if (state === "result") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(28);
    text(resultText, width / 2, height / 2);
    textSize(18);
    text("Click any key to play again!", width / 2, height / 2 + 40);
  }
}

function drawMoon() {
  fill(80);
  rect(0, groundY, width, height - groundY);
  fill(60);
  ellipse(100, groundY + 20, 40, 15);    // Craters – p5.js: https://p5js.org/reference/#/p5/ellipse
  ellipse(300, groundY + 10, 60, 20);
  ellipse(500, groundY + 25, 35, 12);
}

function keyPressed() {
  if (state === "start" || state === "result") {
    lander = new Lander();  // Restart the game
    state = "play";
  } else if (state === "play") {
    if (key === ' ' || keyCode === DOWN_ARROW) {
      lander.thrusting = true;  // Start thrust – Based on idea from: https://www.youtube.com/watch?v=6vHkI4fZJ6Q
    }
  }
}

function keyReleased() {
  if (state === "play") {
    if (key === ' ' || keyCode === DOWN_ARROW) {
      lander.thrusting = false;   // Stop thrust 
    }
  }
}

function checkLanding() {
  if (lander.y + lander.size / 2 >= groundY) {
    lander.y = groundY - lander.size / 2; // This to stops it on the ground
    if (lander.vel < 2) {
      resultText = "You landed safely! Yay!!";
    } else {
      resultText = "You crashed! :'(";
    }
    state = "result";
  }
}
