let mic;
function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}
function draw() {
  fill("white");
  textSize(30);
  text("Make some noise and watch the circle change!", width/2, height/2);
  background("black");
  let strokeCol; 
  noFill()
  let volume = mic.getLevel();
  let circleSize = map (volume, 0, 1, 50, height);
  circle(width/2, height/2, circleSize);

 
  if (volume <0.1) {
  strokeCol = color("red") //quiet blue
  } else if (volume <0.4) {
  strokeCol = color("purple"); //yellow
  } else {
  strokeCol = color("yellow"); //red
  }
  stroke(strokeCol);
  circle(width/2, height/2, circleSize);
}