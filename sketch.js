const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var gameState=0;
var world,engine;
var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;
var word,game;
function preload()
{
    bgImg=loadImage('sprite/bg.png');	
}

function setup() {
    createCanvas(displayWidth, displayHeight-80);

    database = firebase.database();

    welcome = new Welcome();
    player=new Player();
    game=new Game();

    engine = Engine.create();
    engine.world.gravity.y = 0;
	world = engine.world;

    //Create the Bodies Here.
    ball = new Round(displayWidth/2,(displayHeight-80)/2,30,'white');

    // gamer1 - players : 5
    g1pgk = new Player1(displayWidth/7,(displayHeight-80)/2);
    g1p2 = new Player1(displayWidth/3.5,(displayHeight-160)/3);
    g1p3 = new Player1((displayWidth/3.5)+100,(displayHeight-80)/2);
    g1p4 = new Player1(displayWidth/3.5,(displayHeight+1090)/3);

    // gamer1 - players : 5
    g2pgk = new Player2(displayWidth-250,(displayHeight-80)/2);
    g2p2 = new Player2(displayWidth-515,(displayHeight-160)/3);
    g2p3 = new Player2((displayWidth-615),(displayHeight-80)/2);
    g2p4 = new Player2(displayWidth-515,(displayHeight+1090)/3);
    // runing the engine
	Engine.run(engine);

}

function draw(){
    if (gameState==0){
        background('white');
        welcome.display();
    }else if (gameState==2){
        background(bgImg);
        display_char();
    }
    
}

function display_char(){
    ball.display();
    g1pgk.display();
    g1p2.display();
    g1p3.display();
    g1p4.display();
    g2pgk.display();
    g2p2.display();
    g2p3.display();
    g2p4.display();
}