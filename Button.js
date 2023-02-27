function Button(x,y,ofWhat){
    this.x=x
    this.y=y;
    this.Sz=50;
    this.ofWhat=ofWhat;
    this.show=function(){
        switch(this.ofWhat){
            case 1:
                //Normal Block
                fill(255);
                strokeWeight(2);
                stroke(255);
                line(this.x,this.y,this.x+this.Sz,this.y);
                rect(this.x,this.y+10,this.Sz,this.Sz-10)
            break;
            case 2:
                fill(255);
                strokeWeight(2);
                stroke(255);
                line(this.x,this.y,this.x+this.Sz,this.y);
                rect(this.x,this.y+10,this.Sz,this.Sz-10)
                triangle(this.x+5,this.y,this.x+10,this.y-10,this.x+15,this.y);
                triangle(this.x+5+30,this.y,this.x+10+30,this.y-10,this.x+15+30,this.y);
            break;
            case 3:
                noFill();
                stroke(255);
                strokeWeight(5);
                rect(this.x,this.y,this.Sz,this.Sz);
            break;
        }
    };
    this.update=function(DashBoard){
        if(mouseIsPressed&&mouseX>this.x&&mouseX<this.x+this.Sz&&mouseY>this.y&&mouseY<this.y+this.Sz){
            switch(this.ofWhat){
                case 1:
                    DashBoard.selectedThing=1;
                break;
                case 2:
                    DashBoard.selectedThing=2;
                break;
                case 3:
                    DashBoard.selectedThing=3;
                break;

            }
        }
        if(DashBoard.selectedThing===this.ofWhat){
                noFill();
                strokeWeight(3);
                stroke(255)
                rect(this.x-5,this.y-5,this.Sz+10,this.Sz+10);
        }
    };
}