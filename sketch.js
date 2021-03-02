const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

function preload() {
bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
world = engine.world;
ground = new Ground(600, 600, 1200, 20);
hero = new Hero(400,800,250);

}

function draw() {
  background(bg);
  Engine.update(engine);
  hero.display();
  ground.display();
}

