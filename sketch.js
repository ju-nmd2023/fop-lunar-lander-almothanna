let state = "start";
let groundY = 550;
let lander;
let gravity = 0.1;
let resultText = "";

function setup() {
  createCanvas(600, 600);
  lander = new Lander();
}

function draw() {
  background(0);

  if (state === "start") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Welcome to Lunar Lander! :)", width / 2, height / 2 - 40);
    textSize(18);
    text("Click any key to start playing!", width / 2, height / 2);
  } else if (state === "play") {
    drawMoon();
    lander.update();
    lander.display();
    checkLanding();
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
  ellipse(100, groundY + 20, 40, 15);
  ellipse(300, groundY + 10, 60, 20);
  ellipse(500, groundY + 25, 35, 12);
}

function keyPressed() {
  if (state === "start" || state === "result") {
    lander = new Lander();
    state = "play";
  } else if (state === "play") {
    if (key === ' ' || keyCode === DOWN_ARROW) {
      lander.thrusting = true;
    }
  }
}

function keyReleased() {
  if (state === "play") {
    if (key === ' ' || keyCode === DOWN_ARROW) {
      lander.thrusting = false;
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
