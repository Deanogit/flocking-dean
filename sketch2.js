let points = [];
let density = 25;
// let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  let space = width / density;

  //   p = createVector(x + randomGaussian(-10, 10), y + randomGaussian(-8, 8));

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      //   let p = createVector(x, y);
      let p = createVector(
        x + randomGaussian(-10, 10),
        y + randomGaussian(-8, 8)
      );
      points.push(p);
    }
  }
  // noLoop();
}

function draw() {
  noStroke();

  for (let i = 0; i < 1000; i++) {
    let angle = createVector(points[i].x, points[i].y);
    points[i].add(angle);
    stroke("white");
    // ellipse(points[i].x, points[i].y, 10);
    ellipse(
      points[i].x,
      points[i].y,
      randomGaussian(40, 25),
      randomGaussian(40, 10)
    );
  }
}
