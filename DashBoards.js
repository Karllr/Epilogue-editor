function DashBoard(x,y,what){
    this.x=x;
    this.y=y;
    this.what=what;
    this.selectedThing=0;
    this.show=function(){
        fill(BG[0],BG[1],BG[2]);
        rect(this.x,this.y,width,height-90);
    };
    this.update=function(){

    };
}