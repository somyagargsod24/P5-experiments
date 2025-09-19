function setup() {
  createCanvas(400, 400);
  noLoop();
  background(240);

  let step = 30;
  for (let i = 0; i < 6; i++) {
    let s = step * (i + 1);
    rectMode(CENTER);
    noFill();
    strokeWeight(2);
    stroke(random(100,255), random(100,255), random(100,255));
    rect(width/2, height/2, s, s);
  }
}
