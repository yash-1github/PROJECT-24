
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper;

function preload()
{
	paperimg = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 

	paperSprite = createSprite(200,550,10,10);
	paperSprite.addImage(paperimg);
	paperSprite.scale = 0.2;

	base = createSprite(width/2,600,width , 10);
	base.shapecolor = " red " ;

	
	

	wall1 = new Wall(600,600,200,20);
	wall2 = new Wall(500,560,20,100);
	wall3 = new Wall(700,560,20,100);
	ball = new Paper(100,570,40);
	 

  
}	


function draw() {

  background(0);
  Engine.update(engine);
  rectMode(CENTER);
 
  
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();

  paperSprite.x = ball.position.x ;
  paperSprite.y= ball.position.y 


  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.setStatic( ball.body, false);
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
}	

