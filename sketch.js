var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";

  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";

  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";

  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="blue";
  
  }
  else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
 
  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2){
     object1.velocityX=object1.velociyX*(-1);
     object1.velocityX=object1.velociyX*(-1);
    }
}
if(object1.y-object2.y<object2.width/2+object1.width/2
  && object2.y-object1.y<object1.width/2+object2.width/2){
   object1.velocityY=object1.velociyY*(-1);
   object1.velocityY=object1.velociyY*(-1);
  }


function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object2.y<object2.height/2+object1.height/2){
      return true;
   
  }
  else {
    return false;
  }

}