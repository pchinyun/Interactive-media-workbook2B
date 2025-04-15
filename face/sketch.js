// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);

//   noStroke();
//   // hair 
//   angleMode(DEGREES)
//   fill('#3c2318');
//   arc (width/2,height/2,650,550, 180, 0);
//   rect(150,510, 650, 300);

//   //face
//   fill('#ffdcb0');
//   ellipse (width/2,height/2,500,420);

//   //ears
//   fill('#ffdcb0');
//   ellipse(200,500,100,100);
//   ellipse(750,500,100,100);

//   fill('#DAAE77');
//   ellipse(200,500,50,50);
//   ellipse(750,500,50,50);


//   //eyes
//   fill('white'); 
//   circle(400,500,70);
//   fill('black'); 
//   circle(400,500,45);

//   fill('white'); 
//   circle(550,500,70);
//   fill('black'); 
//   circle(550,500,45);


//   //fringe 
//   fill('#3c2318'); 
//   angleMode(DEGREES);
//   arc(width/2, height/2, 500, 420, 200, 0, close );


//   //mouth 
//   noFill();
//   stroke('black');
//   strokeWeight('5'); 
//   arc(500,500, 400,300, 45,90, close);

// }


// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES);
// }

// function draw() {
//   background(220);
//   noStroke();

//   // Center of the face
//   let faceX = width / 2;
//   let faceY = height / 2;

//   // --- HAIR BACK ---
//   fill('#3c2318');
//   arc(faceX, faceY, 650, 550, 180, 0);
//   rect(faceX - 325, faceY, 650, 300);

//   // --- EARS ---
//   fill('#ffdcb0');
//   ellipse(faceX - 250, faceY, 100, 100); // left ear
//   ellipse(faceX + 250, faceY, 100, 100); // right ear

//   fill('#DAAE77');
//   ellipse(faceX - 250, faceY, 50, 50);
//   ellipse(faceX + 250, faceY, 50, 50);

//   // --- FACE ---
//   fill('#ffdcb0');
//   ellipse(faceX, faceY, 500, 420);

//   // --- EYES ---
//   // Left eye
//   fill('white'); 
//   circle(faceX - 100, faceY + 20, 70);
//   fill('black'); 
//   circle(faceX - 100, faceY + 20, 45);

//   // Right eye
//   fill('white'); 
//   circle(faceX + 100, faceY + 20, 70);
//   fill('black'); 
//   circle(faceX + 100, faceY + 20, 45);

//   // --- FRINGE (front hair) ---
//   fill('#3c2318'); 
//   arc(faceX, faceY - 40, 500, 420, 200, 340, PIE);

//   // --- MOUTH ---
//   noFill();
//   stroke('black');
//   strokeWeight(5); 
//   arc(faceX, faceY + 100, 200, 100, 20, 160);
// }





function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("pink");
  noStroke();

  // Center of the face
  let faceX = width / 2;
  let faceY = height / 2;

  // --- HAIR BACK ---
  fill('#3c2318');
  arc(faceX, faceY, 650, 550, 180, 0);
  rect(faceX - 325, faceY, 650, 300);

  // --- EARS ---
  fill('#ffdcb0');
  ellipse(faceX - 250, faceY, 100, 100); // left ear
  ellipse(faceX + 250, faceY, 100, 100); // right ear

  fill('#DAAE77');
  ellipse(faceX - 250, faceY, 50, 50);
  ellipse(faceX + 250, faceY, 50, 50);

  // --- FACE ---
  fill('#ffdcb0');
  ellipse(faceX, faceY, 500, 420);

  // --- EYES ---
  // Eye positions
  let leftEyeX = faceX - 100;
  let rightEyeX = faceX + 100;
  let eyeY = faceY + 20;
  let eyeSize = 70;
  let pupilSize = 45;
  let maxPupilOffset = 12; // Maximum distance the pupil can move from center
  
  // Left eye white
  fill('white'); 
  circle(leftEyeX, eyeY, eyeSize);
  
  // Right eye white
  fill('white'); 
  circle(rightEyeX, eyeY, eyeSize);
  
  // Calculate pupil positions based on mouse
  // For left eye
  let leftDx = mouseX - leftEyeX;
  let leftDy = mouseY - eyeY;
  let leftAngle = atan2(leftDy, leftDx);
  let leftDistance = min(dist(leftEyeX, eyeY, mouseX, mouseY), maxPupilOffset);
  let leftPupilX = leftEyeX + cos(leftAngle) * leftDistance;
  let leftPupilY = eyeY + sin(leftAngle) * leftDistance;
  
  // For right eye
  let rightDx = mouseX - rightEyeX;
  let rightDy = mouseY - eyeY;
  let rightAngle = atan2(rightDy, rightDx);
  let rightDistance = min(dist(rightEyeX, eyeY, mouseX, mouseY), maxPupilOffset);
  let rightPupilX = rightEyeX + cos(rightAngle) * rightDistance;
  let rightPupilY = eyeY + sin(rightAngle) * rightDistance;
  
  // Draw pupils
  fill('black');
  circle(leftPupilX, leftPupilY, pupilSize);
  circle(rightPupilX, rightPupilY, pupilSize);

  // --- FRINGE (front hair) ---
  fill('#3c2318'); 
  arc(faceX, faceY - 40, 500, 420, 200, 340, PIE);

  // --- MOUTH ---
  noFill();
  stroke('black');
  strokeWeight(5); 
  arc(faceX, faceY + 100, 200, 100, 20, 160);
}