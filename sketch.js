
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2, ground3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	//Create the Bodies Here.

	ball = Bodies.circle(260, 100, 30, ball_options);
	World.add(world, ball);

	ground1 = new ground(width/2, 670, width, 20);
	ground2 = new ground(1100, 600, 20, 120);
	ground3 = new ground(1350, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  
	ground1.show();
	ground2.show();
	ground3.show();

	

	ellipse(ball.position.x, ball.position.y, 60, 60);
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 85, y: - 85})
	}
}