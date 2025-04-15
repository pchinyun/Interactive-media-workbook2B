let bottomImg, topImg; 

function preload () { 
  bottomImg = loadImage('./data/yayoi-bw.jpg'); 
  topImg = loadImage('./data/yayoi.jpg'); 
 }

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(180); 
  topImg.resize(width, height); 
  image(bottomImg, 0,0, width, height);


}


function draw() {
 
}  

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight);

}

function mouseDragged() { 
  copy(topImg, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20); 
}
