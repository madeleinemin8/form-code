let dancer1Arr = [];
let dancer2Arr = [];
let dancer3Arr = [];
let pos1 = [];
let pos2 = [];
let pos3 = [];
let dancerWidth = 180;
let dancerHeight = 300;
let d1 = 0;
let d2 = 0;
let d3 = 0;

function preload() {
  
  dancer1Arr[0] = loadImage('/../images/dancer1_0.png');
  dancer1Arr[1] = loadImage('/../images/dancer1_1.png');
  dancer1Arr[2] = loadImage('/images/dancer1_2.png');
  dancer1Arr[3] = loadImage('/images/dancer1_3.png');
  dancer1Arr[4] = loadImage('/images/dancer1_4.png');
  
  dancer2Arr[0] = loadImage('/images/dancer2_0.png');
  dancer2Arr[1] = loadImage('/images/dancer2_1.png');
  dancer2Arr[2] = loadImage('images/dancer2_2.png');
  dancer2Arr[3] = loadImage('images/dancer2_3.png');
  dancer2Arr[4] = loadImage('images/dancer2_4.png');
  dancer2Arr[5] = loadImage('images/dancer2_5.png');
  dancer2Arr[6] = loadImage('images/dancer2_6.png');
  
  dancer3Arr[0] = loadImage('images/dancer3_0.png');
  dancer3Arr[1] = loadImage('images/dancer3_1.png');
  dancer3Arr[2] = loadImage('images/dancer3_2.png');
  dancer3Arr[3] = loadImage('images/dancer3_3.png');
  dancer3Arr[4] = loadImage('images/dancer3_4.png');
  dancer3Arr[5] = loadImage('images/dancer3_5.png');
  dancer3Arr[6] = loadImage('images/dancer3_6.png');
  
}

function setup() {
  
  createCanvas(innerWidth, innerHeight);
  frameRate(9);
  resetPositions();
  
}

function resetPositions() {
  
  let x1 = 50;
  let x2 = x1 + width/3;
  let x3 = width - x1 - dancerWidth;
  let r1 = random([x1, x2, x3]);
  let r2 = random([x1, x2, x3]);
  let r3 = random([x1, x2, x3]);
  while (r2 == r1) {
    r2 = random([x1, x2, x3]);
  }
  while (r3 == r2 || r3 == r1) {
    r3 = random([x1, x2, x3]);
  }
  pos1 = [r1, random(40, height - dancerHeight)];
  pos2 = [r2,random(40, height - dancerHeight)];
  pos3 = [r3, random(40, height - dancerHeight)];
  
}


function draw() {
  
  let r = random(170, 255);
  let g = random(170, 255);
  let b = random(170, 255);
  
  background(r, g, b);
  
  if (dancer1Arr.length != 0 && dancer2Arr.length != 0 && dancer3Arr.length != 0) {
    image(dancer1Arr[d1], pos1[0], pos1[1], dancerWidth, dancerHeight);
  image(dancer2Arr[d2], pos2[0], pos2[1], dancerWidth, dancerHeight);
  image(dancer3Arr[d3], pos3[0], pos3[1], dancerWidth, dancerHeight);
  }
  
  randomizeAnimation();
  
}

function randomizeAnimation() {
  
  if (random([0,1]) == 0) {
    d1++;
  } else {
    d1--;
  }
  if (d1 < 0) { 
    d1 = dancer1Arr.length - 1; 
  }
  if (d1 >= dancer1Arr.length) {
    d1 = 0;
  }
  
  if (random([0,1]) == 0) {
    d2++;
  } else {
    d2--;
  }
  if (d2 < 0) { 
    d2 = dancer2Arr.length - 1; 
  }
  if (d2 > dancer2Arr.length - 1) {
    d2 = 0;
  }
  
  if (random([0,1]) == 0) {
    d3++;
  } else {
    d3--;
  }
  if (d3 < 0) { 
    d3 = dancer3Arr.length - 1; 
  }
  if (d3 >= dancer3Arr.length) {
    d3 = 0;
  }
  
}

function mouseClicked() {
  
  frameRate(random(5, 15));
  resetPositions();
  
}

