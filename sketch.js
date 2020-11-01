var wall;
var speed,weight; 
var bullet;

function setup() {

  createCanvas(1600,600);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);
    
  bullet=createSprite(50, 200, 50, 8);
  bullet.velocityX=speed;
  bullet.shapeColour=color(255);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}
function draw(){
  background(0);

   if(hasCollided(bullet,wall)){
  
    bullet.velocityX=0
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
   
    if(damage>10)
    {
     wall.shapeColor(255,0,0);
    }
   
    if(damage<10)
    {
     wall.shapeColor(0,255,0);
    }

 } 

  drawSprites();
}

function hasCollided(bullet,wall){   
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x

  if(bulletRightEdge>=wall.LeftEdge){
   return true;
  }
  return false;
 
}
  
