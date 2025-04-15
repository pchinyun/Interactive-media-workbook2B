let cam; 
let x, y; 
let colour; 

//inspired by: https://www.youtube.com/watch?v=hsjMz7QKToc

function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO); 
  cam.size(width, height); 
  cam.hide(); 
  imageMode(CENTER); 
  image(cam, width/2, height/2); 
  background("white");
  
}

function draw() {

  for (i=0; i<100; i++) {
    x = random(width); 
    y = random(height);
    colour = cam.get(x,y); 
    noStroke(); 
    fill(colour);
    ellipse(x,y,20,20); 
  }
}
