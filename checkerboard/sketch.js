function setup() {
  createCanvas(400, 400);
  noLoop();
  background(255);

  let step = 40;
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      if ((x + y) % (step * 2) == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, step, step);
    }
  }
}

