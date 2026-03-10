// ARTG2262, Sofia Paradis, paradis.s@northeastern.edu
//assignment 4, "Party Plaid"

function setup() {
  createCanvas(1024, 1024);
  noLoop();
}

function draw() {
  background(213, 235, 209);

  let sageGreen = color(146, 186, 138);
  let pink = color(250, 195, 223);
  let red = color(241, 84, 16, 200);
  let lightBlue = color(86, 169, 209, 120);
  let white = color(255);
  let redOrange = color(168, 56, 12, 230);
  let darkBlue = color(45, 85, 138, 200);

  //making horizontal lines with color
  //without hard coding it

  let rowCount = 0;
  for (let i = width / 10; i < width; i += width / 10) {
    // conditional alternate line colors every other line
    if (rowCount % 2 === 0) {
      stroke(sageGreen);
    } else {
      stroke(white);
    }

    //draw the actual lines now horizontal
    strokeWeight(4);
    line(0, i, width, i);

    // draw thin line close above horizontal
    strokeWeight(2);
    stroke(pink);
    line(0, i - 10, width, i - 10);

    //thick stripe horizontal
    if (rowCount % 2 === 0) {
      noStroke();
      fill(redOrange);
      rect(0, i + 5, width, 25);
    }
    rowCount++;
  }

  //vertical lines
  for (let j = width / 5; j < width; j += width / 5) {
    if (j < width) {
      //       thin lines
      stroke(red);
      strokeWeight(2);
      line(j, 0, j, height);

      //thick lines
      noStroke();
      fill(lightBlue);
      rect(j + 5, 0, 25, height);

      noStroke();
      fill(darkBlue);
      rect(j + 45, 0, 15, height);
    }
  }

  // diagonal circles - scattered
  noStroke();
  let offset = 0;

  for (let y = 30; y < height; y += 60) {
    for (let x = offset; x < width; x += 70) {
      // Alternate between different colors
      if ((x + y) % 140 < 70) {
        fill(sageGreen);
      } else {
        fill(pink);
      }
      circle(x, y, 10);
    }
    // Shift offset for next row - create diagonal effect
    offset += 35;
    if (offset >= 70) offset = 0;
  }
}

function keyPressed() {
  if (key === "S" || key === "s") {
    saveCanvas("assignment[4]_Party_Plaid");
  }
}
