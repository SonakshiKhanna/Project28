const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,mango,ground,slingshot;

function preload()
{
	boy = loadImage("Sprites/boy.png");
	tree = loadImage("Sprites/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	// tree = new Tree(600,400,400,600);
	// boy = new Boy(200,600,150,300);
	stone = new Stone(75,530,30,30);
	slingshot = new SlingShot(stone.body, {x:130, y:530});
	mango1 = new Mango(550,200,40,40);
	mango2 = new Mango(480,240,40,40);
	mango3 = new Mango(580,300,40,40);
	mango4 = new Mango(450,350,40,40);
	mango5 = new Mango(650,280,40,40);
	ground = new Ground(400,690,800,20);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
//   tree.display();
//   boy.display();
  image(boy, 100, 450, 150, 300);
  image(tree, 300, 100, 400, 600); 
  slingshot.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();


  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(stone.body);
    }
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY});
}

function mouseReleased() {
	slingshot.fly();
}

function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

