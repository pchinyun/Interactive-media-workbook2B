let kusamaImg;
let cam; 


function preload() {
  kusamaImg = loadImage('../IMG/IMG_1893.jpg');

  
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  cam = createCapture(VIDEO); 
  cam.size(320,240); 
  cam.hide(); 
}

function draw() {
  background('white');
    ambientLight(500);
  pointLight(255, 255, 255, 0, 0, 100);
  
  rotateY(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateZ(frameCount *0.005);
  
  push(); 
  translate(-200,0,0);
  texture(kusamaImg);
  sphere(150);
  pop(); 
 
  push(); 
  translate(200,0,0);
  texture(cam);
  sphere(150);
  pop(); 

}




