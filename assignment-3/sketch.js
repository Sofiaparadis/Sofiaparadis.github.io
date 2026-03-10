// Sofia Paradis, paradis.s@northeastern.edu
// ARTG2262, lab#2-boolean
// Title: Mirror Me

// create my canvas size
function setup() {
  createCanvas(500, 500);
}

// draw the background + color
function draw() {
  background("#da85eb");
  noLoop();
  fill("#ff9300");
  stroke("#ffb248");
  rect(250, 0, 250, 500);

  fill("#9ef7e3");
  stroke("#0ecca0");
  strokeWeight(3);
  rect(0, 260, 500, 250);

  //ellipse for face
  // x, y, width, height
  fill("#fab9c0");
  stroke("#faa2ac");
  strokeWeight(2);
  ellipse(250, 250, 325, 450);

  // triangle for hat or hair
  // x1, y1, x2, y2, x3, y3
  stroke("#c40c7c");
  fill("#78572a");
  triangle(250, 15, 35, 180, 45, 100);
  triangle(250, 15, 435, 180, 465, 100);

  //rectangle- right eye shape
  // x, y, width, height
  fill("#162ab8");
  stroke("#0c186e");
  rect(325, 100, 135, 350);

  // Draw ellipse #1 as outer eye shape- left
  // x, y, width, height
  fill(255);
  stroke("#e61646");
  ellipse(100, 180, 150, 80);

  // Draw circle as eye - left
  // x, y, diameter
  fill("#7ddb10");
  stroke("#b5ff61");
  circle(100, 180, 80);

  // Draw arc - left pupil
  // x, y, width, height, start angle, stop angle, mode
  fill(0);
  stroke("#f5c915");
  arc(100, 180, 75, 40, 180, 360, CHORD);

  // left eyelashes - draw line
  // x1, y1, x2, y2
  stroke(0);
  line(50, 150, 30, 135);
  line(55, 148, 35, 120);

  // Draw ellipse #2 as outer eye shape - right
  // x, y, width, height
  stroke("#e61646");
  fill(255);
  ellipse(400, 180, 150, 80);

  // Draw circle #2 as eye - right
  // x, y, diameter
  stroke("#b2e8f5");
  fill("#66d8f2");
  circle(400, 180, 80);

  //right pupil
  stroke("#820a0c");
  fill(0);
  circle(400, 180, 55);

  //right pupil
  fill("#ffd14d");
  stroke("#ffc10d");
  strokeWeight(3);
  beginShape();
  vertex(360, 180);
  vertex(400, 220);
  vertex(440, 180);
  vertex(360, 180);
  endShape();

  // right eyelashes - draw line
  // x1, y1, x2, y2
  stroke(0);
  line(454, 153, 464, 145);
  line(450, 150, 473, 130);

  // triangle for a nose
  // x1, y1, x2, y2, x3, y3
  stroke("#ffc15a");
  fill("#ff8823");
  triangle(250, 235, 220, 275, 280, 275);
  fill("#b5120c");
  stroke("#d11810");
  strokeWeight(3);
  triangle(250, 250, 240, 265, 260, 265);

  //ellipse for mouth
  // x, y, width, height
  ellipse(250, 350, 40, 20);
  fill("#fab9c0");
  stroke("#fab9c0");
  ellipse(255, 340, 35, 15);

  let var1 = "Mirror Me";
  fill(0);
  noStroke();
  textSize(15);
  textAlign(LEFT);
  text(var1, 430, 490);

  // saveCanvas("Mirror_me_selfportait");
}
