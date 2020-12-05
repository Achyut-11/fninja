var swordCut,swordCutS,
sword,swordImg,
monster,monsterImg,monsterImg2,
fruit,fruitI1,fruitI2,fruitI3,fruitI4,randomFruit,
score = 0,randomEnemy,start,end,
gameState = "start",gameOver,gameOverImg;

function preload(){
fruitG  = new Group ();
monsterG = new Group();
swordImg = loadImage("sword.png");
monsterImg = loadAnimation("alien1.png","alien2.png")
gameOverImg = loadImage("gameover.png")

fruitI1 = loadImage("fruit1.png")
fruitI2 = loadImage("fruit2.png")
fruitI3 = loadImage("fruit3.png")
fruitI4 = loadImage("fruit4.png")
swordCutS = loadSound("knifeSwooshSound.mp3");

 
}

function setup() {
  createCanvas(400, 400);

sword = createSprite(200,350,10,10);
sword.addImage(swordImg);
sword.scale = 0.5;
}

function createFruits(){
if(frameCount%80 === 0){
fruit = createSprite(400,200,20,20);
fruit.scale = 0.2

randomFruit = Math.round(random(1,4))
console.log(randomFruit);

fruit.y = Math.round(random(1,400));
fruit.velocityX = -5;

switch(randomFruit){

  case 1:
     fruit.addImage(fruitI1);
     break

   case 2:
     fruit.addImage(fruitI2);
     break

  case 3:
     fruit.addImage(fruitI3);
     break

   case 4:
     fruit.addImage(fruitI4);
     break



}


fruitG.add(fruit);
fruit.lifetime = 100;

}
}


function createEnemy(){
if(frameCount%200 === 0){
monster = createSprite(400,200,10,10);
//enemy.velocityX = -3;
randomEnemy = Math.round(random(1,2))
//console.log(randomFruit);

monster.y = Math.round(random(1,400));
monster.velocityX = -5;
monster.addAnimation("monster",monsterImg)
monsterG.add(monster);










monster.lifetime = 100;
}
}




function draw(){
background("white");



text("score: " + score,300,20);

//sword.depth = background.depth-1;


if(gameState === "start"){

createFruits();
createEnemy();

if(fruitG.isTouching(sword)){
fruitG.destroyEach()
score = score+2;
 swordCutS.play(); 
sword.visible = true
}


sword.y = mouseY
}else if(gameState === "end"){
gameOver = createSprite(200,200,10,10)
gameOver.addImage(gameOverImg)
sword.visible = false




}
  

if(monsterG.isTouching(sword)){
gameState = "end";

}



drawSprites();

}
