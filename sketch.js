
//part of the code was improved by claude to acheive the desired effects

let sheep;
let sheeps = [];
let font;

function preload() {
  sheep = loadModel('./3d/uprightSheep.obj', true);
  font = loadFont('./Fonts/Agrandir-GrandHeavy.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);

  sheeps = [
    {
      pos: createVector(-150, 0, 0),
      vel: createVector(0, 0, 0),
      col: color(255, 100, 100),
      link: "./Workbook/index.html"
    },
    {
      pos: createVector(150, 0, 0),
      vel: createVector(0, 0, 0),
      col: color(100, 100, 255),
      link: "./landingPage/index.html"
    }
  ];
}

function draw() {
  background("white");
  orbitControl();


  ambientLight(80);
  pointLight(255, 255, 255, 0, -200, 300);


  push();
  translate(0, -150 + sin(frameCount * 0.02) * 10, 0);
  rotateY(frameCount * 0.01);
  fill("#0800ff");
  textSize(60);
  textAlign(CENTER);
  text("CY's Workbook", 0, 0);
  pop();

  //this was to get the sheeps to react to the mouse, Claude helped with understanding and forumalating 
  for (let s of sheeps) {
  
    let drift = p5.Vector.random3D().mult(0.05);
    s.vel.add(drift);
    s.vel.limit(0.5);
    s.pos.add(s.vel);
    s.vel.mult(0.95);

   
    let mouse3D = createVector(mouseX - width / 2, mouseY - height / 2, 0);
    let d = dist(s.pos.x, s.pos.y, s.pos.z, mouse3D.x, mouse3D.y, mouse3D.z);
    if (d < 100) {
      let repel = p5.Vector.sub(s.pos, mouse3D).normalize().mult(2);
      s.vel.add(repel);
    }


    push();
    translate(s.pos.x, s.pos.y, s.pos.z);
    rotateX(PI);
    ambientMaterial(s.col);
    model(sheep);
    pop();
  }
}

function mousePressed() {
  let mouse3D = createVector(mouseX - width / 2, mouseY - height / 2, 0);
  for (let s of sheeps) {
    let d = dist(s.pos.x, s.pos.y, s.pos.z, mouse3D.x, mouse3D.y, mouse3D.z);
    if (d < 100) {
      window.open(s.link, "_blank");
      break;
    }
  }


}


