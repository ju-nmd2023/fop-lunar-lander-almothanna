let state = "start";


function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(0);

  if (state === "start") {
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(33);
    text("Welcome to Lunar Landing Game!!", width / 2, height / 2 - 40);
    textSize(20);
    text("Click on any key to start this game", width / 2, height / 2);

  }
}

function keyPressed() {

  if (state === "start") {
    state = "play";
  }
}
