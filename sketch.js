
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
  monkey= createSprite (50,350,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  ground= createSprite (200,370,800,20)
  ground.velocityX=-2  
  bananaGroup=createGroup()
  stoneGroup=createGroup()
}


function draw() {
background(255)
         
  if(keyDown("space")) {
      monkey.velocityY = -12;
    
  }
     
monkey.velocityY = monkey.velocityY + 0.8
     
     
     
if(ground.x<0){
ground.x=200   


}
monkey.collide(ground) 
  
  var survivalTime=0;
  
  stroke("black")
  textSize(20);
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  spawnbanana();
  spawnstone();
  if(monkey.isTouching(stoneGroup)){
     ground.velocityX=0
     monkey.velocityY=0
    stoneGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
    stoneGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1)
  }
  
drawSprites()
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(400,250,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 135;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}
function spawnstone() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var stone = createSprite(400,350,40,10);
    stone.addImage(obstacleImage);
    stone.scale = 0.1;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 135;
    
    
    //add each cloud to the group
    stoneGroup.add(stone);
  }

}