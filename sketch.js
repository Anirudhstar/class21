var fixedRect, movingRect;
var c21
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  c21 = createSprite(100,100,50,50);
  c21.shapeColor = "green";
  c21.velocityX=-10
 //fixedRect.velocityY=-10
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);
if(isTouching(c21,movingRect))
 {
  c21.shapeColor= "blue";
  movingRect.shapeColor= "blue";
 }
  else{
    c21.shapeColor= "green";
    movingRect.shapeColor= "green"; 
  }
  bounceoff(c21,fixedRect);
  drawSprites();
}


