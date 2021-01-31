const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var ball1, slingShot;
var box3,box4,box5,box6,box7,box8,box9,box11,box10,box12,box13,box14,box15,box16,box17,box18;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,660);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   ball1 = new Circle(300,400,70,70);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
   
    box3 = new Box(700,240,70,70);
    box4 = new Box(700,240,70,70);
   
    box5 = new Box(700,160,70,70);
    box6 = new Box(700,200,70,70);
    box7 = new Box(700,240,70,70);
    box8 = new Box(700,280,70,70);
    box9 = new Box(700,310,70,70);
    box10 = new Box(780,320,70,70);
    box11 = new Box(780,320,70,70);
   
    box12 = new Box(780,240,70,70);
    box13= new Box(780,240,70,70);
   
    box14 = new Box(780,160,70,70);
    box15 = new Box(780,200,70,70);
    box16 = new Box(780,240,70,70);
    box17 = new Box(780,280,70,70);
    box18 = new Box(780,310,70,70);
   
   

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball1.body,{x:470, y:100});
}

function draw(){
    background("orange");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
   

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
   ball1.display();

    
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


