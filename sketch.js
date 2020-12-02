
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1550, 500);

	engine = Engine.create();
	world = engine.world;
	
	rectangle1 = createSprite(1200,390,150,20, {isStatic:true});
    rectangle1.shapeColor = ("white");



	var ground_options = {
		isStatic : true
	  }
	
	  ground = Bodies.rectangle(200,390,500,20,ground_options);
	  World.add(world,ground); 
	  console.log(ground);
	
	 paperObject = Bodies.circle(200,370.5,20);
	 console.log(paperObject);

	  
	}
	
	function draw() {
	  background("black");
	  Engine.update(engine);	  
	  rectMode(CENTER);
	  rect(ground.position.x,ground.position.y,2900,20);
	
	  ellipseMode(RADIUS);
	  ellipse(paperObject.position.x,paperObject.position.y,10,10);
      
	  drawSprites();
	}

	function keyDown(){
		if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,false,{x : 85,y : -85});
	}
}