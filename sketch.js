//variables for platform, backgound, shark, ground
var platform;
var bg;
var shark,sharkImg;
var ground;
var fish;
var platformGroup;

function preload() {
  //loading background of ocean
  bg = loadImage("ocean.jpg");
  sharkImg = loadImage("shark.png");
}

function setup() {
  createCanvas(800,400);
  //sprites for shark and ground
  shark = createSprite(400,350,20,50);
  shark.addImage(sharkImg);
  shark.scale = 0.07;

  ground = createSprite(400,390,800,20);
  ground.visible = false;

  platformGroup = new Group();


}

function draw() {
  background(bg);

  //spawning platforms at random positions
  if(frameCount % 80 === 0){
    platform = createSprite(random(100,700),0,60,10);
    platform.velocityX = 0;
    platform.velocityY = 2;

    platform.shapeColor = "red";
    platformGroup.add(platform);

  }

  //making shark jump
  if(keyDown("space")){
    shark.velocityY = -12;
  }

  //gravity for shark and making it collide with the ground
  shark.velocityY = shark.velocityY + 0.4;
  shark.collide(ground);

  //making shark move right
  if(keyWentDown("RIGHT_ARROW")){
    shark.velocityX = 4;
  }
  if(keyWentUp("RIGHT_ARROW")){
    shark.velocityX = 0;
  }
  
  //making shark move left
  if(keyWentDown("LEFT_ARROW")){
    shark.velocityX = -4;
  }
  if(keyWentUp("LEFT_ARROW")){
    shark.velocityX = 0;
  }

  if(shark.y < 0 ){
    shark.x = 400;
    shark.y = 350;
    shark.velocityY = 0;
  }

  if(shark.x < platformGroup.x && shark.y < platformGroup.y){
    shark.bounceOff(platformGroup);

  }

  //displaying all sprites
  drawSprites();

  
}


