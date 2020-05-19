
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 roof = new Roof(350,250,400,20);
	 bob1 = new Bob(250,450);
	 bob2 = new Bob(300,450);
	 bob3 = new Bob(350,450);
	 bob4 = new Bob(400,450);
	 bob5 = new Bob(450,450);
	 rope1 = new Rope(bob1.body,{x:250,y:250});
	 rope2 = new Rope(bob2.body,{x:300,y:250});
	 rope3 = new Rope(bob3.body,{x:350,y:250});
	 rope4 = new Rope(bob4.body,{x:400,y:250});
	 rope5 = new Rope(bob5.body,{x:450,y:250});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(225);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyDown(LEFT_ARROW)){
	  Matter.Body.applyForce(bob1,10,10)
  }
  
  drawSprites();
 
}




