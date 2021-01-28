
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground1= new Ground(600,350,1200,10)
hexa1= new Hexa (200,200)
sling1=new SlingShot(hexa1.ball,100,100)


   
}

function draw(){
    background(0);
    Engine.update(engine);
 
    ground1.display();
    sling1.display();
    hexa1.display();
}

