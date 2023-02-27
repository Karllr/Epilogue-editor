function Player(x,y){
    this.x=x;
    this.y=y;
    this.Sz=20;
    this.yvel=0;
    this.gravity=0.8;
    this.speed=0;
    this.falling=true;
    this.accel=5;
    this.jumpHeight=-9.7;
    this.respawn={
        x:this.x,
        y:this.y
    };
    this.update=function(blocks){
        this.yvel+=this.gravity;
        if(keys[LEFT_ARROW]){
            this.speed=-this.accel;
        }
        if(keys[RIGHT_ARROW]){
            this.speed=this.accel;
        }
        if(!keys[LEFT_ARROW]&&!keys[RIGHT_ARROW]){
            this.speed=0;
        }
        if(keys[SHIFT]&&mouseIsPressed){
            this.x=mouseX;
            this.y=mouseY;
        }
        if(keys[UP_ARROW]&&!this.falling){
            this.yvel=this.jumpHeight;
        }
        if(keys[82]){
            this.yvel=0;
            this.x=this.respawn.x;
            this.y=this.respawn.y;
        }
        this.x+=this.speed;
        this.collideWith(this.speed,0,blocks);
        this.falling=true;
        this.y+=this.yvel;
        if(this.y>height-90-this.Sz){
            this.y=height-90-this.Sz;
            this.yvel=0;
            this.falling=false;
        }
        this.collideWith(0,this.yvel,blocks);
    };
    this.collideWith=function(xv,yv,blocks){
        for(var i=0;i<blocks.length;i++){
            var b=blocks[i];
            if(this.y+this.Sz > b.y &&
                this.y        < b.y+b.Sz &&
                this.x+this.Sz > b.x &&
                this.x        < b.x+b.Sz){
                //console.log("ouch");
                switch(b.type1){
                        case 1:
                        if(yv>0) {
                            this.yvel = 0;
                            this.falling = false;
                            this.y = b.y-this.Sz;
                        }
                        // TOP
                        if(yv<0) {
                            this.yvel = 0;
                            this.falling = true;
                            this.y = b.y+b.Sz;
                        }
                        // RIGHT
                        if(xv>0) {
                            this.speed = 0;
                            this.x = b.x-this.Sz;
                        }
                        // LEFT
                        if(xv<0) {
                            this.speed = 0;
                            this.x = b.x+b.Sz;
                        }
                    break;
                    case 2:
                        this.x=this.respawn.x;
                        this.y=this.respawn.y;
                        this.yvel=0;
                    break;    
                }

            }
        }
    };
    this.show=function(){
        fill(255);
        rect(this.x,this.y,this.Sz,this.Sz);
        fill(0);
        ellipse(this.x+this.Sz/2,this.y+this.Sz/2,10,10);
    };
}