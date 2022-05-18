var navio, navio_movimentando,tela,telaimg;

function preload(){

  navio_movimentando = loadAnimation("ship-1.png ","ship-2.png","ship-3.png","ship-4.png")

  telaimg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  
 
  tela=createSprite(400,200)
  tela.addImage(telaimg)
  tela.scale=0.3

  tela.velocityX=-5

  navio=createSprite(150,200,100,100);
  navio.addAnimation("movimentando",navio_movimentando);
  navio.scale = 0.2;
}
function draw() {
  background("blue");
   
  if(tela.x < 0){
  tela.x = 400;
  }
  drawSprites();
  
 
}
