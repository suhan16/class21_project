
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world

var ball
var ground
var leftside
var rightside

function preload(){

}

function setup() {
	createCanvas(1400,640);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false ,
        restitution : 0.3 ,
		friction: 0 ,
		density:1.2
	}
	ball= Bodies.circle(120,100,10,ball_options);
	World.add(world,ball);

	ground =new Ground(700,640,1400,20);
    leftside=new Ground(800,560,10,130);
   rightside=new Ground(1000,560,10,130);

   

	Engine.run(engine);
  
	
	rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
background(0);

  ground.show();
  leftside.show();
  rightside.show();

  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode = UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:9,y:-2})
	}
}


