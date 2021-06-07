

var elephant, elephant_running, elephant_collided;

var monkey, monkey_running, monkey_collided;

var obstacle;
var backgroundImg, background;
var jumpSound, collidedSound;

function preload(){
  
  backImg = loadImage("assets/grass_bg.jpg")
  
  elephant_running = loadAnimation("assets/cat_running.png","assets/cat_running2.png","assets/cat_running3.png");
  elephant_collided = loadAnimation("assets/cat_running.png");
  
  monkey_running = loadAnimation("assets/dog_runningnew.png","assets/dog_runningnew2.png","assets/dog_runningnew3.png");
  monkey_collided = loadAnimation("assets/dog_running2.png");
  
  obstacle = loadImage("assets/Obstacle.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImg);
  backgr.scale=3;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  elephant = createSprite(100,300,20,50);
  monkey = createSprite(100,150,20,50);
  
  elephant.addAnimation("running", elephant_running);
  elephant.addAnimation("collided", elephant_collided);
  elephant.setCollider('circle',0,0,350)
  //elephant.scale = 0.08
  // elephant.debug=true
  // background=createSprite(200,200,windowWidth,windowHeight);
  // background.addImage(backgroundImg);
  // background.scale=2.5;
  // invisibleGround.visible =false
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation("collided", monkey_collided);
  monkey.setCollider('circle',0,0,350)
}

function draw() {
  //elephant.debug = true;
  background(255);
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  

  drawSprites();
}


