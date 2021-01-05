var movingRect, fixedRect,fixedRect2, fixedRect3;

function setup(){
  createCanvas(600,600);

  fixedRect=createSprite(200,200,40,60);
  fixedRect.velocityY=-5;
  fixedRect2=createSprite(200,20,40,40);
  fixedRect3=createSprite(500,300,100, 80);
  movingRect=createSprite(100,50,20,80);




}

function draw(){
  background (20,1,50);

  movingRect.shapeColor='yellow';

  if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor='green';
  fixedRect.shapeColor='green';
}

else{
  movingRect.shapeColor='yellow';
  fixedRect.shapeColor='purple';
}

  movingRect.x=mouseX;
  movingRect.y=mouseY;

 if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor='green';
  fixedRect.shapeColor='green';
}

else{
  
  fixedRect.shapeColor='purple';
}

if(isTouching(movingRect,fixedRect2)){

  movingRect.shapeColor='brown';
  fixedRect2.shapeColor='brown';
}

else{
  
  fixedRect2.shapeColor='pink';
}

if(isTouching(movingRect,fixedRect3)){

  movingRect.shapeColor='red';
  fixedRect3.shapeColor='red';
}

else{
 
  fixedRect3.shapeColor='orange';
}
 
  drawSprites();

  bounceOff(fixedRect,fixedRect2);
  bounceOff(fixedRect,movingRect);
}



