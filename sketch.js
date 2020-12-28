var bird, birdImg;
var pipes = [];
var pipeNorthImg;
var pipeSouthImg;
var bgImg, fgImg;
var start = 0, play = 1, end = 2;
var gameState = 0;
var score = 0;

function preload(){
 // birdImg=loadImage("bird.png");
  //pipeNorthImg=loadImage("pipeNorth.png");
  //pipeSouthImg=loadImage("pipeSouth.png");
  bgImg=loadImage("bg.png")
  fgImg = loadImage("fg.png");
}
/*
function setup(){
  createCanvas(500,600);
  bird=createSprite(200,200);
  bird.addImage("bird",birdImg)
}
function draw(){
 background("white");
  drawSprites();
}*/


function setup() {
  createCanvas(400, 400);
  
  bird = new Bird();  
  
  // bird.addImage("bird",birdImg);
  pipes.push(new Pipe());
  /*bg=createSprite(100,0,10,10);
  bg.scale=2;
  bg.addImage("bg",bgImg)
  bg.x=bg.width/2;
  bg.velocityX=-2;*/
}

function draw() {
  background(0);

  
/*if(bg.x<0){
  bg.x=bg.width/2;
} 
 // bg.velocityX=-2;*/
  
  if(gameState === play)
    {
      background(bgImg);
      
      if(frameCount % 60 === 0)
        {
          score++;
        }
      for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
          console.log("HIT");
          gameState = end;
        }

        if (pipes[i].offscreen()) {
          pipes.splice(i, 1);
        }
      }

      bird.update();
      bird.show();

      if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
      }
      
      text("Score :" + score, 10, 10);
    }
  
  if(gameState === start)
    {
      background(fgImg);
    
      var heading = createElement('h1');
        
      heading.html("Flappy Bird");
      heading.position(110, 50);
      
      var button = createButton("start")
      button.position(175, 200);
      

      
      button.mousePressed( () => 
      {
        removeElements();
        gameState = play;
      }
      )
    }
  
  if(gameState === end)
    {
      background(255, 0, 0);
      var h = createElement('h1');
      h.html("YOU LOSE!");
      h.position(110, 30);
      
      var m = createElement('p3');
      m.html("hahaha");
      m.position(170, 130);
      
      var s = createButton("Go To Start")
      s.position(155, 200);
      
      s.mousePressed(() =>
      {
        removeElements();
        bird = new Bird();
        pipes = [];
        pipes.push(new Pipe());
        gameState = 0;
      })
    }

  drawSprites();
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}


