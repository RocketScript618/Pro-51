var canvas, backgroundImage;
var database, gameState;
var playerLobby,lobby,form, player,players,game;
var allLobbies;
var lobbies = [];
var lobbyPlayers, program1,pro1L,pro1R, disc1, disc2, program2,pro2L,pro2R, disc3, disc4;
var programs = [];
var discs = [];
var p1Discs = [];
var p2Discs = [];
var p1Img,p1RImg,p1LImg, p2Img,p2RImg,p2LImg, disc1Img, disc3Img;

//BP
function preload() {
  backgroundImage = loadImage("./assets/back.png");

  p1Img = loadImage("./assets/pro1.png");
  p2Img = loadImage("./assets/pro2.png");

  p1LImg = loadImage("./assets/pro1L.png");
  p1RImg = loadImage("./assets/pro1R.png");

  p2LImg = loadImage("./assets/pro2L.png");
  p2RImg = loadImage("./assets/pro2R.png");

  disc1Img = loadImage("./assets/Disc1.png");
  disc3Img = loadImage("./assets/Disc3.png");
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  Lobby.getLobbiesInfo();

  form = new Form();
  form.display();

}

//BP
function draw() {
  background("black");

  Lobby.getLobbiesInfo();

  if(lobbies != null){
    if(lobbies[playerLobby] != undefined){
        if(lobbies[player.lobby].gameState == 1){

            form.hide();
            background(backgroundImage)
            game.play();

          }
      }
  }

  

  drawSprites();
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}