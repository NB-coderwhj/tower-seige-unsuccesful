class Box{
    constructor(x,y){
        var options = {
            'isStatic' : false,
            density : 0.9,
            friction : 10
        }
        this.body = Bodies.rectangle(x,y,40,50,options);
        this.width = 40;
        this.height = 50;
        World.add(world,this.body);
        this.Visibility = 255;

    }

    score(){
        if(this.Visibility < 255){
            score += 200;
        }
    }

    display(){
        var pos = this.body.position;
        var angle  = this.body.angle;
        var speed = this.body.speed;
       console.log(speed);
        if(speed < 3){
            push();
            translate(pos.x,pos.y);
            rotate(angle)
            rectMode(CENTER);
            fill(255,0,75);
            strokeWeight(3);
            stroke(0);
            rect (0,0,this.width,this.height);
            pop();
      
        }else{
       
        
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        rect (0,0,this.width,this.height);
        pop();
        World.remove(world,this.body);
        }
    }
}