var bathing,brush,drink,sleep,eat,gymImg,gymAnim,issImg,movem;
var astronaut;

function preload(){
  bathing = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  sleep = loadAnimation("sleep.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gymImg = loadAnimation("gym1.png");
  gymAnim = loadAnimation("gym11.png","gym12.png");
  bg = loadImage("iss.png");
  move2 = loadAnimation("a.png","b.png");
}

function setup() {
  createCanvas(800,400);
 astronaut = createSprite(300, 230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("M")){
    astronaut.addAnimation("moving_",move2);
    astronaut.changeAnimation("moving_")
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymAnim);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bathing);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}