
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  // let button = createButton("Hold to enter exhibiton"); 
  // button.position(width/2,height/2);
  // button.size(400,200); 

}

function draw() {
 
  background("red");
  textSize(100);
  fill("black");
  text("press and hold",width/2, height/2); 
  // button.mousePressed(enterExhibition);
  fill("white"); 
  noStroke(); 

  if(mouseIsPressed === true) { 
    circle(random(width), random(height), random(10,300));

  }
}

// function enterExhibition() { 
//   fill(colours); 
//   noStroke(); 

//   if(mouseIsPressed === true) { 
//     circle(random(width), random(height), random(10,300));
//     background("red");
//   }
// }
