var sc , mn , hr

sc = second()
mn = minute()
hr = hour()


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  scAngle = map(sc,0,60,0,360)

  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
}