var thickness,wall;
thickness = random(22,83);
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(30,200,50,30);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  bullet.shapeColorcolor=(255,0,0);
   hasCollided(bullet,wall);
  drawSprites();
  
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLefttEdge = wall.x;
  if(bulletRightEdge>=wallLefttEdge){
    return true;
}
return false;
}
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight* speed* speed/(thickness *thickness *thickness);
  
    if (damage>10){
      wall.shapeColor = (255,0,0);
  
    }

  if (damage<10){
      wall.shapeColor = (0,225,0);
  
  }
  
  }
  


}