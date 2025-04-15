
let mic;
let button;

function setup() {
  micCanvas = createCanvas(windowWidth, windowHeight);
  micCanvas.id("mic-canvas");
  mic = new p5.AudioIn();
  mic.start();
}
function draw() {
  // background(220);
  // fill(r,g,b);
  // for (i = 0; i < 20; i++) {
  // button = createButton('useless button');
  // button.position(random(0, width), random(0, height));
  // frameRate(2);
  // }
  fill("black");
  text("Press any key, Make some noise!", 50, 100);
  let volume = mic.getLevel() * 10;
  let mappedVol = map(volume, 0, 1, 0, 255);
  let circleSize = map (volume, 0, 1, 50, height);
  r = map (volume, 0, 1, 0, 255);
  g = map (volume, 0, 1, 0, 255);
  b = map (volume, 0, 1, 0, 255);
  fill(255, 0, mappedVol);
  circle(width/2, height/2, circleSize);
  console.log(volume)
}
function keyPressed() {
  background(random(255), random(255), random(255));
  if (key === "r") {
  background(255, 0, 0);
  }
  if (key === "b") {
  background(0, 0, 255);
  }
}