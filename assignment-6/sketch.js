//  ARTG-2262 - PWC
// Sofia Paradis, paradis.s@northeastern.edu
//   Assignment: 6 - Drawing App

//   How to interact:
//   - Click and drag to draw
//   - Press '1' to draw circles
//   - Press '2' to draw stars
//   - Press up/down arrows to change brush size
//   - Press E to toggle eraser
//   - Press C to clear the screen
//   - Press S to save your drawing

// global variables

let brushSize = 20; // how big the shapes are
let brushShape = 1; // 1 = circle, 2 = star
let eraserMode = false; // tracks if eraser is on or off
let currentColor; //  the current drawing color
let autoHue = 0; // used to shift the color over time automatically for hacker requirments! - found this on p5js website

function setup() {
  createCanvas(600, 600);
  background(20); // dark background
  currentColor = color(255, 100, 150); // starting color (gets overridden by autoHue- I just figured out
}

function draw() {
  // autoHue goes up by 1 every frame — the user can't control this!
  // it cycles back to 0 after 360 so the color keeps looping
  autoHue = (autoHue + 1) % 360;
  currentColor = color(autoHue * 0.7, random(150, 255), random(150, 255));

  // show the instructions panel in the corner
  drawInstructions();

  // check if the mouse is being held down
  if (mouseIsPressed) {
    // if eraser is on, paint dark circles to erase
    if (eraserMode) {
      noStroke();
      fill(20);
      ellipse(mouseX, mouseY, brushSize + 10);

      // otherwise draw normally with the current shape
    } else {
      noStroke();
      fill(currentColor);

      if (brushShape == 1) {
        // draw a circle with mouse
        ellipse(mouseX, mouseY, brushSize);
      } else if (brushShape == 2) {
        // draw a star with mouse
        drawStar(mouseX, mouseY, brushSize / 2, brushSize, 5);
      }
    }
  }
}

// drawing a star
// this is a helper function I found to draw a star shape-  I also learned this online because P5JS does not have that shape set up.

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; // divides the circle into equal slices
  let halfAngle = angle / 2.0; // finds the middle of each slice for the inner points
  beginShape();
  for (let a = -HALF_PI; a < TWO_PI - HALF_PI; a += angle) {
    vertex(x + cos(a) * radius2, y + sin(a) * radius2); // outer point
    vertex(x + cos(a + halfAngle) * radius1, y + sin(a + halfAngle) * radius1); // inner point
  }
  endShape(CLOSE);
}

// Instructions for draw on screen
//  it draws the info panel in the corner
// it runs every frame inside draw() so it always stays on top

function drawInstructions() {
  // semi-transparent dark box behind the text
  fill(0, 0, 0, 150);
  noStroke();
  rect(10, 10, 200, 185, 10);

  // white instruction text
  fill(255);
  textSize(11);
  textAlign(LEFT);
  text("1 = circles  |  2 = stars", 20, 32);
  text("UP / DOWN = brush size", 20, 52);
  text("E = toggle eraser", 20, 72);
  text("C = clear screen", 20, 92);
  text("S = save drawing", 20, 112);

  // this line changes color depending on whether eraser is on or off- I used a variable to track which mode the sketch is in inside draw otherwise it gets confusing
  fill(eraserMode ? color(255, 100, 100) : color(100, 255, 180));
  text(eraserMode ? "MODE: eraser" : "MODE: drawing", 20, 140);

  // show the current brush size number
  fill(255);
  text("brush size: " + brushSize, 20, 160);
}

// Key functions
// this runs every time the user presses a key

function keyPressed() {
  // switch to circle brush
  if (key == "1") {
    brushShape = 1;
    eraserMode = false; // turn off eraser when switching brush
  }

  // switch to star brush
  if (key == "2") {
    brushShape = 2;
    eraserMode = false;
  }

  // toggle eraser on or off
  // the ! flips true to false and false to true
  if (key == "E" || key == "e") {
    eraserMode = !eraserMode;
  }

  // clear the whole canvas by redrawing the background
  if (key == "C" || key == "c") {
    background(20);
  }

  // save the canvas as a png
  if (key == "S" || key == "s") {
    saveCanvas("my_drawing", "png");
  }

  // make brush bigger with up arrow
  if (keyCode == UP_ARROW) {
    brushSize = brushSize + 5;
  }

  // make brush smaller with down arrow
  if (keyCode == DOWN_ARROW) {
    brushSize = brushSize - 5;
  }
}
