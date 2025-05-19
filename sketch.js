
let state = "start";
let groundY = 550;
let lander;
let gravity = 0.1;

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
    text("Welcome to lunar lander game!! :)", width / 2, height / 2 - 40);
    textSize(18);
    text("Click any key to play!", width / 2, height / 2);

  } else if (state === "play") {
    drawMoon();
    lander.update();
    lander.display();

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

  if (state === "start") {
    state = "play";
  }
}
