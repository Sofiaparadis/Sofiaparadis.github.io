// PWC 2262-2263, boolean lab
// Sofia Paradis, paradis.s@northeastern.edu
// assignment #5, Polka Dot Polka Grow :) 

let colors = ["#b9e6eb", "#ffd46c", "#db2c68"];
let grid = 10;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#b4c2fc");
  noStroke();
 buildGrid();
}
  
  // MY CONCEPT: I wanted to create a grid of circles that randomly grow bigger
  // to create a polka dotty flower effect

  
function draw() {
  background("#b4c2fc");
  // for each loop to go through all circles
  circles.forEach((circle) => {
    circle.show();
    circle.grow();

     //  Random conditional to trigger animation
    if (random(1) < 0.01) {
   circle.speed = (height / grid) * 0.08;// I initially hard coded this to 2 and then changed it to work full screen 
    }
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildGrid();
}
  function buildGrid(){
    circles = [];
  for (let row = 0; row < grid; row++) {
    for (let col = 0; col < grid; col++) {
      let x = col * (width / grid) + width / grid / 2;
      let y = row * (height / grid) + height / grid / 2;
      let c = colors[(col + row) % 3];
      circles.push(new Circle(x, y, c));
    }
  }
}


class Circle {
  // HELP NEEDED: Constructor is a special function that runs when you
  // create a new Circle - it sets up the starting values
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.speed = 0; // starts not moving
    this.diameter = (height / grid) * 0.8; // starting size
    this.maxDiameter = (height / grid) * 2.5; // max size it can grow to; this was also hard coded initially 
    this.color = color;
  }

  show() {
    
    // Draw a dark circle slightly offset to create depth
    fill("#0d0e08");
    circle(this.x - width * 0.001, this.y + height * 0.001, this.diameter); // also had hard coded this as -1 and 1 and changed it to scale 

    // Draw the main colored circle on top
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }

  grow() {
    //  Make circles grow when activated to overlap colors
    // HELP NEEDED: The syntax for checking and updating diameter
    if (this.diameter < this.maxDiameter && this.speed > 0) {
      this.diameter += this.speed; // increase size by speed amount 
    }
  }
}
