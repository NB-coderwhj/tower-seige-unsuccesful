class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.2,
            length : 50
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    attatch(body){
        this.sling.bodyA = body
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
        var A = this.sling.bodyA.position;
        var B = this.pointB;
        push();
        strokeWeight(4);
        stroke(0);
        line(B.x,B.y,A.x,A.y);
        pop();
        }
    }
}

