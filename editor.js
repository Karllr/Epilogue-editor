var song;
var blocks=[];
var testMap=[
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
  '          ',
];
var keys=[];
function keyPressed(){
  keys[keyCode]=true;
  if(keyCode===90){
    blocks.splice(length-1,1);
  }
  if(keyCode===67){
    blocks.length=0;
  }
  if(keyCode===83){
    for(var i=0;i<blocks.length;i++){
      console.log(blocks[i])
    }
  }
}
function keyReleased(){
  keys[keyCode]=false;
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
var levelWidth=0;
var levelHeight=0;
var player;
var DashBoard;
var DashButtons=[];
function setup() {
  createCanvas(windowWidth,windowHeight);
  //song=loadSound('Creo-Epilogue.mp3',ok);
  //song.setVolume(0.1);
  //blocks=[new Block(100,100,1,1,1,1)];
  blocks=[new Block(200,300,1,1,1,1)];
  DashBoard=new DashBoard(0,height-90);
  player=new Player(200,200);
  for(var i=0;i<testMap.length;i++){
    for(var j=0;j<testMap[i].length;j++){
      switch(testMap[i][j]){
        case '1':
          blocks.push(new Block(j*50,i*50,1,1,1,1));
        break;
      }
    }
  }
  for(var i=1;i<7;i++){
    DashButtons.push(new Button(i*60,height-70,i));
  }
}
function ok(){
  //song.play();
}
mouseClicked=function(){
  for(var i=0;i<(height-90)/50;i++){
    for(var j=0;j<(width)/50;j++){
      if(mouseX<width&&mouseX>j*50&&mouseX<j*50+50&&mouseY>i*50&&mouseY<i*50+50&&mouseY<height-90){
        if(DashBoard.selectedThing===1){
          blocks.push(new Block(j*50,i*50,1,1,1,1));
        }
        if(DashBoard.selectedThing===2){
          blocks.push(new Block(j*50,i*50,2,1,1,1));
        }
        //console.log(mouseX,mouseY);
      }
    }
  }
};
var BG=[31,22,100];
function draw() {
  frameRate(60);
  //console.log(mouseX,mouseY);
  //console.log(frameCount);
  background(BG[0],BG[1],BG[2]);
  if(frameCount<978){
    //background(31,22,100);
    BG[0]=31;
    BG[1]=22;
    BG[2]=100;
  }
  if(frameCount>978&&frameCount<1379){
    background(56,6,112);
    BG[0]=56;
    BG[1]=6;
    BG[2]=112;
  }
  
  for(var i=0;i<blocks.length;i++){
    blocks[i].updateTextures(blocks);
    blocks[i].show();
  }
  stroke(255,255,255,50);
  strokeWeight(2)
  for(var i=0;i<width;i+=50){
    line(i,0,i,height-90);
  }
  for(var i=0;i<height-90;i+=50){
    line(0,i,width,i);
  }
  player.update(blocks);
  player.show();
  DashBoard.show();
  for(var i=0;i<blocks.length;i++){
    if(mouseIsPressed&&mouseX>blocks[i].x&&mouseX<blocks[i].x+blocks[i].Sz&&mouseY>blocks[i].y&&mouseY<blocks[i].y+blocks[i].Sz){
      if(DashBoard.selectedThing===3){
        console.log('ouch');
        blocks.splice(i,1);
      }
    }
  }
  for(var i=0;i<DashButtons.length;i++){
    DashButtons[i].update(DashBoard);
    DashButtons[i].show();
  }
}
