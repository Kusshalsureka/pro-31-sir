const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world; 

  ground1=new Ground(width/2,670,width,20);
  
  for(var j = 40 ;j<=width;j=j+50)
  {
plinkos.push(new Plinko(j,75));
}
for(var j=15;j<width-10;j=j+50){

plinkos.push(new Plinko(j,175));


}
}

function draw() {
  background(255,255,255); 
ground1.display();

  for(var j=0;j<particles.lenghth;j++){
particles[j].display();
}
for(var k =0;k<divisions.lenghth;k++){
divisions[k].display();

}
for(var p =0;k<plinkos.lenghth;k++){
  plinkos[p].display();
  
  }

  
  

drawSprites();
}