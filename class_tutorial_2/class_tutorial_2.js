
let circleSize;
let counter = 0;  
let maxCount = 150;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  background(220);
  text("hello world", 50, 100);
}

function draw() {

  if (counter < maxCount) {
    circleSize = random(100, 800);
    r = random(255); 
    g = random(255); 
    b = random(255); 
    
    fill(r, g, b, 20);
    textSize(30);
    
    circle(width/2, height/2, circleSize); 
    square(mouseX, mouseY, circleSize);
    
    counter++;  
  } else {
 
    fill(0);
    textSize(30);
    text("Refresh to try again!", width/2 - 100, 50);
    noLoop();  
  }
}