class Round{
    constructor(x,y,r,f){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.f=f
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill(this.f);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
        pop();
    }
}