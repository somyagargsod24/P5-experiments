function setup() {
  createCanvas(400, 400);
  noLoop();
  background(245);

  translate(width/2, height/2);
  for (let i = 0; i < 36; i++) {
    stroke(random(255), random(255), random(255));
    rotate(TWO_PI / 36);
    line(0, 0, 150, 0);
  }
}