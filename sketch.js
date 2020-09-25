var banana;
var obstacle;
var backGround;
var monkey;
var score;
var ground;
var bananaGroup; 
var obstacleGroup;
var gameState;
var play = 1;
var over = 0;
var die;
var jump;
var cheackPoint;

function preload(){
 backGroundimg = loadImage("jungle.png");
  monkeyimg = loadAnimation("Monkey_01.png, Monkey_02.png, Monkey_03.png, Monkey_04.png, Monkey_05.png, Monkey_06.png, Monkey_07.png, Monkey_08.png, Monkey_09.png, Monkey_10.png");
  bananaimg = loadImage("banana.png");
  obstacleimg = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  backGround = createSprite(200,200, 20, 20);
  backGround.addImage("BackGround", backGroundimg);
  backGround.scale = 0.5;
  monkey = createSprite(200, 380, 20, 20);
  monkey.addImage("Monkey", monkeyimg);
  banana = createSprite(200, 200, 20, 20);
  banana.addImage("Banana", bananaimg);
  obstacle = createSprite(380, 200, 20, 20);
  obstacle.addImage("Obstacle", obstacleimg);
  ground = createSprite(200, 385, 800, 20);
  ground.visible = false;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  die = loadSound("die.mp3");
  cheackPoint = loadSound("cheackPoint.mp3");
  jump = loadSound("jump.mp3");
}

function draw() {
  background(220);
  ground.x = ground.width/2;
  gorund.collide(monkey);
  
  if (bananaGroup.isTouching(monkey)) {
   cheackPoint.mp3.play();
    score = score + 2;
    fruitGroup.destroyEach();
  }
  if (obstacleGroup.isTouching(monkey)) {
   monkey.scale = 0.2;
  }
  if(keyDown("space") && monkey.y >= 359){
      monkey.velocityY = -12 ;
      jump.mp3.play();
    }
  
  if (monkey.scale == 0.2 && obstacleGroup.isTouching(monkey)) {
    die.mp3.play();
  gameState = over;
  }
  switch(score) {
    case 10:monkey.scale = 0.12;
      break;
    case 20:monkey.scale = 0.14;
      break;
    case 30:monkey.scale = 0.16;
      break;
    case 40:monkey.scale = 0.18;
      break;
      default: break;
  }
  console.log(gameState);
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score);
  
  drawSprites();
}