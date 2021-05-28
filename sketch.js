
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper= new Paper( 100,100, 25)
	ground1= new Ground(600, 370, 1200, 20)
	ground2= new Ground(900, 285, 20, 150)
	ground3= new Ground(1100, 285,20, 150)
	ground4=new Ground(1000,350, 200, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display()
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:35, y:-35})
	}
}



