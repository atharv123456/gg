const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var bg,bgImg;

var snow=[];

function preload(){
bgImg=loadImage("snow1.jpg");
}




function setup() {
   createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  //createSprite(400, 200, 50, 50);

  if(frameCount%50===0){
  //create snowfall objects
  for (var e = 0; e<200 ; e++)
  {
    snow.push(new snowfall(random(0,800),random(0,800)));
  }
  }

  
   }

function draw() {
  background(bgImg);  

  Engine.update(engine);

  for(var i=0;i<200;i++){
  snow[i].display();
  snow[i].updateY();
  }





  drawSprites();
  


}