// let answers = ["Yes", "No", "Maybe"]; 
// let response = ""; 

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textAlign(CENTER, CENTER);
//   textSize(64);
  
// }

// function draw() {
//   background(220);
//   fill(0); 

//   if (response === "") { 
//     text("Click to get an answer", width/2, height/2); 
//   } else { 
//     text(response, width/2, height/2); 
//   }

// }

// function mousePressed() { 
//   let index = int(random(answers.length)); 
//   response = answers[index];
  
// }

// let answers = ["Yes", "No", "Maybe"];
// let currentAnswer = "";
// let cracked = false;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   textAlign(CENTER, CENTER);
//   textSize(48);
// }

// function draw() {
//   background(255);

//   let centerX = width / 2;
//   let centerY = height / 2;

//   if (!cracked) {
//     drawWholeCookie(centerX, centerY);
//     fill(0);
//     textSize(24);
//     text("Click the cookie", centerX, centerY + 200);
//   } else {
//     drawCrackedCookie(centerX, centerY);
//     drawFortunePaper(centerX, centerY - 120);
//   }
// }

// function mousePressed() {
//   if (!cracked) {
//     cracked = true;
//     let index = int(random(answers.length));
//     currentAnswer = answers[index];
//   }
// }

// function drawWholeCookie(x, y) {
//   fill('#d9a066'); // golden brown
//   stroke(0);
//   strokeWeight(2);
//   ellipse(x, y, 200, 200);
//   fill(255, 150);
//   noStroke();
//   arc(x, y, 200, 200, -PI / 4, PI / 4);
// }

// function drawCrackedCookie(x, y) {
//   // left half
//   fill('#d9a066');
//   stroke(0);
//   strokeWeight(2);
//   arc(x - 50, y, 100, 100, PI / 2, 3 * PI / 2);

//   // right half
//   arc(x + 50, y, 100, 100, -PI / 2, PI / 2);
// }

// function drawFortunePaper(x, y) {
//   fill(255);
//   stroke(0);
//   rect(x - 100, y, 200, 40, 10);
//   fill(0);
//   noStroke();
//   textSize(32);
//   text(currentAnswer, x, y + 20);
// }

let answers = ["Yes", "No", "Maybe"];
let currentAnswer = "";
let cracked = false;
let cracking = false;
let crackProgress = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(48);
  noStroke();
}

function draw() {
  drawBackground();

  let centerX = width / 2;
  let centerY = height / 2;

  if (!cracked && !cracking) {
    drawWholeCookie(centerX, centerY);
    fill(0);
    textSize(24);
    text("Click the cookie", centerX, centerY + 200);
  } else if (cracking) {
    animateCrack(centerX, centerY);
  } else if (cracked) {
    drawCrackedCookie(centerX, centerY, 50); 
    drawFortunePaper(centerX, centerY - 120);
    fill(0);
    textSize(20);
    text("Click again to try a new fortune", centerX, centerY + 200);
  }
}

function mousePressed() {
  if (cracking) return;

  if (!cracked) {
    cracking = true;
    let index = int(random(answers.length));
    currentAnswer = answers[index];
  } else {
    cracked = false;
    currentAnswer = "";
  }
}



function drawWholeCookie(x, y) {
  fill('#d9a066');
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, 200, 200);
  fill(255, 150);
  noStroke();
  arc(x, y, 200, 200, -PI / 4, PI / 4);
}

function animateCrack(x, y) {
  crackProgress += 0.05;
  let offset = easeOutExpo(crackProgress) * 50;

  drawCrackedCookie(x, y, offset);

  if (crackProgress >= 1) {
    crackProgress = 0;
    cracking = false;
    cracked = true;
  }
}

function drawCrackedCookie(x, y, offset) {
  fill('#d9a066');
  stroke(0);
  strokeWeight(2);
  arc(x - offset, y, 100, 100, PI / 2, 3 * PI / 2); 
  arc(x + offset, y, 100, 100, -PI / 2, PI / 2); 
}

function drawFortunePaper(x, y) {
  fill(255);
  stroke(0);
  rect(x - 100, y, 200, 40, 10);
  fill(0);
  noStroke();
  textSize(32);
  text(currentAnswer, x, y + 20);
}



function drawBackground() {
  background('#ffefdb'); 

  stroke('#e23d28'); 
  strokeWeight(1);

  for (let x = 0; x < width; x += 60) {
    line(x, 0, x, height);
  }

  for (let y = 0; y < height; y += 60) {
    line(0, y, width, y);
  }

}


function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - pow(2, -10 * t);
}


