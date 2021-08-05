var runner,path,boy,pathImage,invisibleGround1,invisibleGround2;
function preload(){
  //pre-load images
  runner = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite (200,200);
path.addImage(pathImage);
path.velocityY = 4;
path.scale = 1.2;
if (path.y > 400){
  path.y = height/2;
}
boy= createSprite(200,200,20,20);
boy.addAnimation("run",runner);
boy.scale = 0.05;


invisibleGround1= createSprite(375,400,20,400);
invisibleGround1.visible = false;

invisibleGround2 = createSprite(35,400,20,800);
invisibleGround2.visible = false;



}
if (keyDown("RIGHT_ARROW")){
  boy.velocityX=1;

} 
if (keyDown("LEFT_ARROW")){
  boy.velocityX=-1;
}

boy.collide(invisibleGround1,invisibleGround2);

function draw() {
  background("white");
  drawSprites();
}
