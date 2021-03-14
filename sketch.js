
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var log1,log2,log3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
createEdgeSprites();
paper= new Paper(200,450,40)

log1= new Bin(1100,640,170,13)
log2= new Bin(1000,620,13,81)
log3= new Bin(1202,620,13,81)


ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
	
	
  
  
  log = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, log);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  log1.display();
log2.display();
log3.display();
  drawSprites();
  
  
 // keyPressed()


}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y:-85});
	}
}


