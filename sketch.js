
var database;
var gameState = 0;
var playerCount;
var form, player, game;
var allPlayers = [];
var car1,car2,car3,car4;
var cars = [];
var flag = 0;
var car1Img,car2Img,car3Img,car4Img;
var track,ground;

function preload(){
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    // database.ref('/').update({
    //     gameState: 0,
    //     playerCount: 0
    // })
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
    }

    drawSprites();
}




