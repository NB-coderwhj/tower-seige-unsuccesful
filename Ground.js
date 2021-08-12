class Ground{
    constructor(x,y,width){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,width,20,options);
        this.width = width;
        this.height = 20;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(83,53,36)
        rect (pos.x,pos.y,this.width,this.height);
    }
}