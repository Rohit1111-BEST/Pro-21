var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	packageBody= new Package(width/2, 80,10);		


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//World.add(world, packageBody);

	ground=new Ground(width/2, height-35, width,10);
box1 = new Box(420,height-50, 70,10);
box2 = new Box(460,height-80,10,50);
box3 = new Box(380,height-80,10,50);
	

	//packageBody=new Package(100,700,20);



	//Create a Ground
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 packageSprite.x = packageBody.body.position.x;
 packageSprite.y= packageBody.body.position.y;

  packageBody.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();


}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
	
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



