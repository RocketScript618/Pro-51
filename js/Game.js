class Game{
    constructor(lobby){
        this.lobby = lobby
    }

    start(){
        program1 = createSprite(100,height/2);
        program1.addImage("pro1",p1Img);
        program1.scale = .12;

        pro1L = createSprite(122,height/2);
        pro1L.addImage("pro1L",p2LImg);
        pro1L.depth = program1.depth-1;
        pro1L.scale = .2;

        pro1R = createSprite(114,height/2+15);
        pro1R.addImage("pro1R",p2RImg);
        pro1R.scale = .2;

        program2 = createSprite(width-100,height/2);
        program2.addImage("pro2",p2Img);
        program2.scale = 0.12;

        pro2L = createSprite(width-122,height/2+15);
        pro2L.addImage("pro2L",p1LImg);
        pro2L.scale = .2;

        pro2R = createSprite(width-119,height/2);
        pro2R.addImage("pro2R",p1RImg);
        pro2R.depth = program2.depth-1;
        pro2R.scale = .2;

        programs = [program1,pro1L,pro1R,program2,pro2L,pro2R]

        disc1 = createSprite(136,height/2);
        disc1.addImage("disc",disc3Img)
        disc1.scale = .2;
        disc1.setCollider("circle",0,0,110,110);
        disc1.depth = pro1L.depth-1;

        disc2 = createSprite(128,height/2+15);
        disc2.addImage("disc",disc3Img)
        disc2.scale = .2;
        disc2.setCollider("circle",0,0,110,110);
        disc2.depth = pro1R.depth-1;

        disc3 = createSprite(width-135,height/2);
        disc3.addImage("disc",disc1Img)
        disc3.scale = .2;
        disc3.setCollider("circle",0,0,110,110);
        disc3.depth = pro2R.depth-1;

        disc4 = createSprite(width-136,height/2+15);
        disc4.addImage("disc",disc1Img)
        disc4.scale = .2;
        disc4.setCollider("circle",0,0,110,110);
        disc4.depth = pro2L.depth-1;

        discs = [disc1,disc2,disc3,disc4]

    }

    play(){
        Player.getDiscs1Info(this.lobby);
        Player.getDiscs2Info(this.lobby);
        Player.getPlayerInfo(this.lobby);
        this.handlePlayerControls();

        if (lobbyPlayers !== undefined) {
      
            var index = 0;
            for (var plr in lobbyPlayers) {
              //agrega 1 al índice por cada bucle
      
              //utiliza datos de la base de datos para mostrar los autos en la dirección x e y
              
              var x = lobbyPlayers[plr].positionX;
              var y = lobbyPlayers[plr].positionY;

              var rX = lobbyPlayers[plr].hands.rX;
              var rY = lobbyPlayers[plr].hands.rY;

              var lX = lobbyPlayers[plr].hands.lX;
              var lY = lobbyPlayers[plr].hands.lY;

              var d1X = lobbyPlayers[plr].discs.disc1X;
              var d1Y = lobbyPlayers[plr].discs.disc1Y;

              var d2X = lobbyPlayers[plr].discs.disc2X;
              var d2Y = lobbyPlayers[plr].discs.disc2Y;
      
              programs[index].position.x = x;
              programs[index].position.y = y;

              programs[index+2].position.x = rX;
              programs[index+2].position.y = rY;

              programs[index+1].position.x = lX;
              programs[index+1].position.y = lY;

              if(index == 0){
                discs[index].position.x = d1X;
                discs[index].position.y = d1Y;

                discs[index+1].position.x = d2X;
                discs[index+1].position.y = d2Y;
              } else{
                discs[index-1].position.x = d1X;
                discs[index-1].position.y = d1Y;

                discs[index].position.x = d2X;
                discs[index].position.y = d2Y;
              }
              

              index = index + 3;
            
            }

        }
    }

    handlePlayerControls() {
        if (keyIsDown(UP_ARROW)||keyIsDown(87)) {
      
            player.positionY -= 6;
            player.rY -= 6;
            player.lY -= 6;

            this.discsUpdate();
            player.update();

        }if(keyIsDown(LEFT_ARROW)||keyIsDown(65)){
      
            player.positionX -= 6;
            player.rX -= 6;
            player.lX -= 6;

            this.discsUpdate();
            player.update();

        }if(keyIsDown(RIGHT_ARROW)||keyIsDown(68)){

            player.positionX += 6;
            player.rX += 6;
            player.lX += 6;

            this.discsUpdate();
            player.update();

        }if(keyIsDown(DOWN_ARROW)||keyIsDown(83)){
            player.positionY += 6;
            player.rY += 6;
            player.lY += 6;

            this.discsUpdate();
            player.update();
        }

        if(keyDown(69)){
            if(player.index == 1){
                player.disc2X += 8;
                player.disc2Y += 8;
            } else{
                player.disc2X -= 8;
                player.disc2Y -= 8;
            }
            

            player.update();
            
        }

        if(keyDown(81)){
            if(player.index == 1){
                player.disc1X += 8;
                player.disc1Y -= 8;
            } else{
                player.disc1X -= 8;
                player.disc1Y += 8;
            }
            

            player.update();
            
        }

        if(player.index == 1){
            if(player.positionX >= width/2){
                player.positionX = width/2
                player.rX = width/2+14;
                player.lX = width/2+22;
            }
            
            if(player.positionX <= 23){
                player.positionX = 23
                player.rX = 37;
                player.lX = 45;
            } 

            if(player.positionY >= height-65){
                player.positionY = height-65
                player.rY = height-50;
                player.lY = height-65;
            }
            
            if(player.positionY <= 65){
                player.positionY = 65
                player.rY = 80;
                player.lY = 65;
            } 

        }else if(player.index == 2){
            if(player.positionX <= width/2){
                player.positionX = width/2
                player.rX = width/2-22;
                player.lX = width/2-19;
            }
            
            if(player.positionX >= width-23){
                player.positionX = width-23
                player.rX = width-45;
                player.lX = width-42;
            }

            if(player.positionY >= height-65){
                player.positionY = height-65
                player.rY = height-65;
                player.lY = height-50;
            }
            
            if(player.positionY <= 65){
                player.positionY = 65
                player.rY = 65;
                player.lY = 80;
            } 

        }
  }

  discsUpdate(){

    if(player.index == 1){

        player.rX = player.positionX+14;
        
        if(player.touch1 == true){
            player.disc1X = player.positionX+36;
            player.disc1Y = player.positionY;
        }

        if(player.touch2 == true){
            player.disc2X = player.positionX+28;
            player.disc2Y = player.positionY+15;
            }   
    } else{
        if(player.touch1 == true){
            player.disc1X = player.positionX-35;
            player.disc1Y = player.positionY;
            }

        if(player.touch2 == true){
            player.disc2X = player.positionX-36;
            player.disc2Y = player.positionY+15;
            }
        }
    }
}