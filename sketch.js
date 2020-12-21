
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var scorel;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
 
}



function setup() {
createCanvas(10000,700)
monkey=createSprite(80,515,20,20)
monkey.addAnimation('moving',monkey_running)
monkey.scale=(0.5)

ground=createSprite(5000,680,10000,27)
ground.velocityX=-4
ground.x=ground.width/2;

FruitGroup = createGroup();
obstaclesGroup = createGroup();

score = 0;



  
}


function draw() {
  background('lightBlue')

  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  //when space is clicked your monkey will jump
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  //gravity
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground); 

  SpawnFruits();
  spawnObstacles();

 drawSprites() 

 stroke("white")
 textSize(20)
 fill("white")
 text("Score: "+ score, 500,50)   

 if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0
  obstaclesGroup.setVelocityXEach(0)
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1)
  FoodGroup.setLifetimeEach(-1)
}
stroke("black")
textSize(20);
fill("black")
survivalTime=Math.ceil(frameCount/frameRate()) 
text("Survival Time: "+ survivalTime, 100,50);
}


function SpawnFruits(){
  
  if (frameCount % 100 === 0) {
    banana = createSprite(1000,50,40,10);
    banana.y = random(120,200)  
    banana.velocityX = -5

    banana.lifetime = 300;
    monkey.depth = banana.depth + 1

     banana.addImage(bananaImage)
     banana.scale=0.3
    
    FruitGroup.add(banana)
  }
  
}
function spawnObstacles() {
  if(frameCount % 100 === 0) {
    obstacle = createSprite(1000,600,10,40);
    obstacle.velocityX = -6
    
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.3
    obstacle.lifetime = 1000
    obstaclesGroup.add(obstacle)
  }
}







