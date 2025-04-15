let points = []; 
let font; 

function preload () { 
  font = loadFont('./data/ArialBlack.TTF'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
 

  points = font.textToPoints("Les Points",
  width/2 - 450, 
  height/2, 
  140, {  
    sampleFactor:0.2, 
  });
  
}


function draw() {
   background(180); 
  
  for (let p of points) {
    circle(p.x, p.y,20); 
  }
}
