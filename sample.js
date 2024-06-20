function setup() {
  createCanvas(400, 400);
  background(220);
}


function draw() {
  // background(220);
 
  let x1 = random(0, 400);
  let y1 = random(0, 400);
  let x2 = random(0, 400);
  let y2 = random(0, 400);
  
  line(x1, y1, x2, y2);
}
