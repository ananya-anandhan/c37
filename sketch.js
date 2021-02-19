var database,backgrImg,form,Player,Game;
var gameState = 0;
var playercount;
var allplayers;
var distance = 0;

function setup(){
    database = firebase.database();
    createCanvas(400,400);

    Game = new game();
    Game.getState();
    Game.start();
    
}

function draw(){
    
    
}

