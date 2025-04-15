function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(10);
 
}

function draw() { 
  let x = random(width); 
  let y = random(height); 
  drawAirMailLabel(x,y); 
 }

 for(i=0; i<5; i++) { 
  function drawAirMailLabel(x, y) {
    push();
    translate(x, y);
  
  
  
    let labelWidth = 120;
    let labelHeight = 50;
    let barHeight = 10;
  
  
    fill(20, 30, 80);
    noStroke();
    rectMode(CENTER);
    rect(0, -labelHeight / 2 + barHeight / 2, labelWidth, barHeight);
  
    
    fill(200, 30, 30);
    rect(0, labelHeight / 2 - barHeight / 2, labelWidth, barHeight);
  
    fill('white'); 
    rect(0,0, labelWidth,barHeight);
  
    
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    textFont('sans-serif');
    text("VIA AIR MAIL", 0, 0);
  
    pop(); 
  } 
  
 }


