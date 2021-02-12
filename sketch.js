const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload(){
   polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(390+60,310,270,12);

  block1=new Block(300+60,275,30,40);
  block2=new Block (330+60,275,30,40);
  block3=new Block(360+60,275,30,40);
  block4=new Block(390+60,275,30,40);
  block5=new Block(420+60,275,30,40);
  block6=new Block(450+60,275,30,40);
  block7=new Block(480+60,275,30,40);

  block8=new Block(330+60,235,30,40);
  block9=new Block(360+60,235,30,40);
  block10=new Block(390+60,235,30,40);
  block11=new Block(420+60,235,30,40);
  block12=new Block(450+60,235,30,40);

  block13=new Block(360+60,195,30,40);
  block14=new Block(390+60,195,30,40);
  block15=new Block(420+60,195,30,40);
  
  block16=new Block(390+60,155,30,40);

  ground2=new Ground(800,225,210,12);

  block17=new Block(800-60,205,30,40);
  block18=new Block(800-30,205,30,40);
  block19=new Block(800,205,30,40);
  block20=new Block(800+30,205,30,40);
  block21=new Block(800+60,205,30,40);

  block22=new Block(800-30,205-40,30,40);
  block23=new Block(800,205-40,30,40);
  block24=new Block(800+30,205-40,30,40);

  block25=new Block(800,205-80,30,40);

  ground3=new Ground(500,390,1000,20);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling=new SlingShot(this.ball,{x:180,y:190})
}

function draw() {

  background(88); 

  Engine.update(engine);

  textSize(20);
  fill(255);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);


  ground1.display();
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  ground2.display();
  fill("pink")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("skyblue");
  block25.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  ground3.display();
  sling.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   sling.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    sling.attacher(this.ball);
  }
}