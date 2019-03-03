function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  for (var i = 10; i <= width / 2; i = i + 10) {
    line(200 - i, i, 200 + i, i);
      }
  for (var i = 10; i <= height; i = i + 10) {
    line(i, height/2+i, 400-i, height/2+i);
  }
}
