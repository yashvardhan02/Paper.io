
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1
var ground
var rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
     

	engine = Engine.create();
	world = engine.world;
    paper1 = new Paper(800,200,10)
    ground = new Ground(200,300,5000,50)
    
    rect1 = new Dustbin(800,275,100,10)
    rect2 = new Dustbin(750,240,10,80)
    rect3 = new Dustbin(850,240,10,80)


	//Create the Bodies Here.


	Engine.run(engine);
  
}
function draw() {

  Engine.update(engine)

  rectMode(CENTER);
  background(0);

  rect1.display()
  rect2.display()
  rect3.display()

  
   ground.display()
  
  paper1.display()
  drawSprites();
 
  
  


}
function keyPressed(){
  if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper1.bodies,paper1.bodies.position,{x:15,y:-15})
  



  }


}







