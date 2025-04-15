let circleSize, r,g,b; 
var xPos, yPos;

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(5);
}


function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  background (r,g,b)
circleSize = random(0,800);
ellipse(mouseX,mouseY,circleSize); 

for (i=0; i<10; i++) { 
  let lineWeight = random(2,10);
  lineWeight - random(2,10);
  xPos = random(width);
  yPos = random(height);
  fill (255,0,255);
  stroke(255);
  strokeWeight(lineWeight);
  ellipse(xPos,yPos,circleSize);
}
}
