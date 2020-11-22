var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 750, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-3
  fixedRect.debug = true;
  movingRect = createSprite(400,100,80,30);
  movingRect.shapeColor = "red";
  movingRect.velocityY=3
  movingRect.debug = true;
  bounceRect = createSprite(800, 100, 50, 80);
  bounceRect.shapeColor = "purple";
  bounceRect.velocityY=3
  bounceRect.debug = true;
  xyRect = createSprite(800, 750, 50, 80);
  xyRect.shapeColor = "orange";
  movingRect.velocityY=-3
  xyRect.debug = true;

}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  //for bounceRect
  if(isTouching(movingRect,fixedRect)){

    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "red";
  }
  else{

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  
 // bounce(movingRect,fixedRect)

  
  drawSprites();
}

