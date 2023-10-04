let deforestMap;

function preload() {
  deforestMap = loadImage('/media/deforestmap.png');
        }

function setup() {
  createCanvas(800, 800);
  console.log("hello help");
  noStroke();
  image(deforestMap, 0, 0);
}

function draw() {
  background(220, 0);
  image(deforestMap, 0, 0);
  for (let x = 0; x < width; x += 5) {
    for (let y = 0; y < height; y += 5) {
      let d = dist(x, y, mouseX, mouseY);
      fill(240, 248, 255, d/2);
      circle(x, y, d / 1.2);
    }
  }
}









