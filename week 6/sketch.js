// let mic; 

// function setup() {
//   createCanvas(400, 400);
//   mic = new p5.AudioIn(); 
//   mic.start();
// }

// function draw() {
//   background(220);
//   noFill(0); 
//   let volume = mic.getLevel(); 
//   let circleSize = map(volume, 0, 1, 50, 400); 
//   circle(width/2, height/2, circleSize); 

//   let strokeCol; 
//   if (volume<0.1) { 
//     strokeCol = color(0,100,255); 
//   } else if (volume<0.4) { 
//     strokeCol = color(0,255,100); 
//   } else { 
//     strokeCol = color(255,200,0); 
//   }
//   stroke(strokeCol); 
//   circle(width/2, height/2, circleSize); 
// }


let mic;
let button; 


function setup() {
  createCanvas(400, 400);
  micCanvas.id("mic-canvas"); 
  let button = createButton('this button does nothing'); 
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  // background(220);
  for (i=0; i<20; i++) { 
    button = createButton('this button does nothing');
    button.position(random(0,width), random(0,height));
  }
  let volume = mic.getLevel() *10;
  let mappedVol = map(volume, 0, 1, 0, 255); 
  let circleSize = map (volume, 0, 1, 50, height);


  r = map (volume, 0, 1, 100, 255); 
  g = map(volume, 0, 1, 0, 255); 
  b = map (volume, 0, 1, 0, 255); 

  fill(255, 0, mappedVol); 
  circle(width/2, height/2, circleSize);

 

//   let strokeCol;
//   if (volume <0.1) {
//   strokeCol = color(0, 100, 255) //quiet blue
//   } else if (volume <0.4) {
//   strokeCol = color(0, 255, 100); //yellow
//   } else {
//   strokeCol = color(255, 200, 0); //red
// }
//   stroke(strokeCol);
//   circle(width/2, height/2, circleSize);
} 

function keyPressed() { 
  background(random(255), random(255), random(255)); 
  if (key ==='r') { 
    background(255,0,0); 
  }
  if (key === 'b') { 
    background(0,0,255); 
  }
} 