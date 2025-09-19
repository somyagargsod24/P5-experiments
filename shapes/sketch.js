function setup() {
  createCanvas(400, 400);
  noLoop(); 
  background("#F8F9FA");
  
  let palette = ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"];
  
  for (let i = 0; i < 15; i++) {
    fill(random(palette));
    noStroke();
    let x = random(width);
    let y = random(height);
    let s = random(20, 60);
    triangle(x, y, x + s, y, x + s/2, y - s);
  }
  
  for (let i = 0; i < 10; i++) {
    fill(random(palette));
    noStroke();
    ellipse(random(width), random(height), random(20, 50));
  }
  
  for (let i = 0; i < 8; i++) {
    fill(random(palette));
    noStroke();
    let w = random(20, 60);
    let h = random(20, 60);
    rect(random(width), random(height), w, h);
  }
  
  stroke("#000000");
  strokeWeight(2);
  noFill();
  rect(width/2 - 50, height/2 - 50, 100, 100);
}
