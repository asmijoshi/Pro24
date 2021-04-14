var hammer;
var stone;
var rubber;
var ground;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;
var iron;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer (40,50);
	ground = new Ground (400,690,800,20);
	stone = new Stone (400,200,60,60);
	rubber = new Rubber (500,450,50);
	s1 = new Sand (290,10)
	s2 = new Sand (270,10)
	s3 = new Sand (350,10)
	s4 = new Sand (400,10)
	s5 = new Sand (470,10)
	s6 = new Sand (500,10)
	s7 = new Sand (520,10)
	s8 = new Sand (575,10)
	s9 = new Sand (600,10)
	s10 = new Sand (190,10)
	iron = new Iron (450,500,50,100)
	//Create the Bodies Here.

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(6, 64, 57);

  fill(252, 249, 33)
  textSize(35)
  text("Geologist's Lab",270,40);

  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  iron.display();
 
}



