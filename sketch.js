const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,base
var b1, b2,b3,b4,b5,b6;
var polygon, hexagon;
var connector
var gameState = 0;
var score = 0;
var bg = "day.jpg", bgImg;

function preload(){
  hexagon = loadImage("h1.png");
  bgImg = loadImage("day.jpg")
 // getTime();
}

function setup() {
  createCanvas(800,580);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, 550,800);
  base = new Ground(600,530,400);

  b1 = new Box(600,500);
  b2 = new Box(600,460);
  b3 = new Box(600,420);
  b4 = new Box(600,380);
  b5 = new Box(600,340);
  b6 = new Box(560,500);
  b7 = new Box(560,460);
  b8 = new Box(560,420);
  b9 = new Box(560,380);
  b10 = new Box(520,500);
  b11 = new Box(520,460);
  b12 = new Box(520,420);
  b13 = new Box(480,500);
  b14 = new Box(480,460);
  b15 = new Box(440,500);
  b16 = new Box(640,500);
  b17 = new Box(640,460);
  b18 = new Box(640,420);
  b19 = new Box(640,380);
  b20 = new Box(680,500);
  b21 = new Box(680,460);
  b22 = new Box(680,420);
  b23 = new Box(720,500);
  b24 = new Box(720,460);
  b25 = new Box(760,500);
  var p_options = {
    density : 0.75
  }

  polygon = Bodies.rectangle(200,200,40,40,p_options);
  World.add(world,polygon);

  connector = new Sling(polygon, {x:250, y:450});

}

function draw() {
  Engine.update(engine);

  if (bgImg){
  background(bgImg); 
  }

  rectMode(CENTER) 

  ground.display();
  base.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display(); 
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display(); 

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score(); 
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score(); 

  push();
  translate(polygon.position.x,polygon.position.y);
  rotate(polygon.angle)
  imageMode(CENTER);
  image(hexagon,0,0,40,40);
  pop();

  connector.display();

  fill("green")
  textSize(25);
  text("DRAG YOUR MOUSE AND RELEASE TO THROW THE HEXAGON",10,50);

  text("PRESS SPACE TO RESET",290,75);

  textSize(15);
  textFont("algerian")
  text("SCORE : "+score, 50,100)  
}

function mouseDragged(){
  if(gameState === 0){
  Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY});
  console.log("yay");
  }
}

function mouseReleased(){
  connector.fly();
  gameState = 1;
}

function keyPressed(){
  if(gameState === 1){
  if(keyCode === 32){
    connector.attatch(polygon);
    Matter.Body.setPosition(polygon, {x:200,y:400});
    gameState = 0;
  }
  }
}

/*async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var dt = responseJSON.datetime;
  var hr = dt.slice(11,13);

  console.log(hr);

  if(hr <= 7 && hr >= 16){
    bg = "night.jpg";
  }else{
    bg = "day.jpg";
  }

  bgImg = loadImage(bg);

}*/