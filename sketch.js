var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23;
var gameState, man, manAnimation , manStanding;
var lifetime = 3;
var check = 0;

function preload(){
  manAnimation = loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png","images/man7.png","images/man8.png");
  manStanding = loadImage("images/man1.png"); 
  wall = loadAnimation("images/st.png");
  }

function setup() {
  createCanvas(windowWidth,windowHeight);
  gameState = "start";
  man = createSprite(200,600,10,10);
  man.addImage("standing",manStanding);
  man.addAnimation("running",manAnimation);
  man.scale = 0.9;
  
   wall1 = createSprite(770, 50, 1000, 10);//
   wall2 = createSprite(275, 290, 10, 470);//
   wall3 = createSprite(330,520, 100, 10);//
   wall4 = createSprite(1270,170, 10, 250);//
   wall5 = createSprite(1265,650, 10, 300);//
   wall6 = createSprite(320,680, 100, 10);//
   wall7 = createSprite(275,740, 10, 120);//
   wall8 = createSprite(770,800, 1000, 10);//
   wall9 = createSprite(1120,700, 10, 200);//
   wall10 = createSprite(1190,505, 150, 10);//
   wall11 = createSprite(1120,350, 10, 300);//
   wall12 = createSprite(1050,200, 150, 10);//
   wall13 = createSprite(980,430, 10, 450);//
   wall14 = createSprite(800,650, 350, 10);//
   wall15 = createSprite(630,550, 10, 200);//
   wall16 = createSprite(560,450, 150, 10);//
   wall17 = createSprite(580,320, 350, 10);//
   wall18 = createSprite(750,415, 10, 200);//
   wall19 = createSprite(350,120, 10, 100);//
   wall20 = createSprite(730,110, 10, 130);//
   wall21 = createSprite(780,170, 100, 10);//
   wall22 = createSprite(520,190,150,10);
   wall23 = createSprite(860,430,10,200);//
  }

function draw() {
  background(0);  
  text(mouseX+","+mouseY,mouseX,mouseY);
  console.log(windowWidth);
  console.log(windowHeight);
  
  if(keyDown("space")&& gameState==="start"){
    man.changeAnimation("running",manAnimation)
    gameState ="play";
 };

    if(keyDown(RIGHT_ARROW)&& gameState==="play"){
    man.x += 5;
    }

    if(keyDown(LEFT_ARROW)&& gameState==="play"){
      man.x -= 5;
    }

    if(keyDown(UP_ARROW)&& gameState==="play"){
      man.y += 5;
    }

    if(keyDown(DOWN_ARROW)&& gameState==="play"){
      man.y -= 5;
    }

    if(man.isTouching(wall1)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall2)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall3)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall4)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall5)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall6)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall7)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall8)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall9)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall10)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall11)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall12)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall13)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall14)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall15)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall16)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall17)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall18)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall19)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall20)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall21)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall22)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall23)&& gameState==="play"){
      check = 1;
    }

    if(check === 1 && lifetime>0 && gameState==="play"){
      man.x = 350;
      man.y = 600;
      gameState = "start";
      lifetime--;
      check = 0;
    }
  drawSprites();
}