let points = [];
let density = 25;

function setup() {
  createCanvas(windowHeight, windowWidth);
  background(30);
  // noLoop();
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  // background(220);
  ellipse(mouseX, mouseY, 80, 80);
}
