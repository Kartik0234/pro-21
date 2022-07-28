const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;

var ball;
var v_options = {restitution:0};


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(395,350,10,100);
  left = new Ground(320,350,10,100);
 ball = Bodies.circle(50,50,20,v_options)
 World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
}
function keyPressed(){
  if(keyCode==32)
Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.05})

}
