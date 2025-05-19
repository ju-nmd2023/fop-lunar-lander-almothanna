let state = "start";
let groundY;

function setup() {
  createCanvas(600, 600);
  groundY = height - 50;
}

function draw() {
  background(0);

  if (state === "start") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Welcome to lunar landing game!", width / 2, height / 2 - 40);
    textSize(20);
    text("Click on any key to play", width / 2, height / 2);
  } else if (state === "play") {
    drawMoon();
  }
}

function keyPressed() {
  if (state === "start") {
    state = "play";
  }
}

function drawMoon() {
  noStroke();
  fill(80);
  rect(0, groundY, width, height - groundY);

  fill(60);
  ellipse(100, groundY + 20, 40, 15);
  ellipse(300, groundY + 10, 60, 20);
  ellipse(500, groundY + 25, 35, 12);
}
